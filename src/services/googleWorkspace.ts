import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Provider with all requested scopes
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');
provider.addScope('https://www.googleapis.com/auth/drive.file');
provider.addScope('https://www.googleapis.com/auth/gmail.send');
provider.addScope('https://mail.google.com/');
provider.addScope('https://www.googleapis.com/auth/gmail.compose');

let isSigningIn = false;
let cachedAccessToken: string | null = null;
let currentSpreadsheetId: string | null = null;

export interface EnquirySubmission {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  message: string;
  status: 'Pending Review' | 'Confirmed' | 'Archived';
}

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // Token might have expired or not cached in memory yet
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to obtain Google OAuth access token');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Sign-in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = (): string | null => {
  return cachedAccessToken;
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const logout = async () => {
  await signOut(auth);
  cachedAccessToken = null;
  currentSpreadsheetId = null;
};

/**
 * Searches for an existing "Company Secretary Client Enquiries" spreadsheet or creates a new one.
 */
export const getOrCreateSpreadsheet = async (accessToken: string): Promise<string> => {
  if (currentSpreadsheetId) {
    return currentSpreadsheetId;
  }

  const SHEET_TITLE = 'Apex Corporate Secretary — Client Enquiries & Advisory Leads';

  try {
    // 1. Search Google Drive for existing spreadsheet
    const query = encodeURIComponent(
      `name = '${SHEET_TITLE}' and mimeType = 'application/vnd.google-apps.spreadsheet' and trashed = false`
    );
    const searchRes = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,webViewLink)`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      }
    );

    if (searchRes.ok) {
      const data = await searchRes.json();
      if (data.files && data.files.length > 0) {
        currentSpreadsheetId = data.files[0].id;
        return currentSpreadsheetId as string;
      }
    }

    // 2. Create new spreadsheet with styled header row
    const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          title: SHEET_TITLE,
        },
        sheets: [
          {
            properties: {
              title: 'Submissions',
              gridProperties: {
                frozenRowCount: 1,
              },
            },
          },
        ],
      }),
    });

    if (!createRes.ok) {
      const err = await createRes.json();
      throw new Error(err.error?.message || 'Failed to create Google Sheet');
    }

    const createdSheet = await createRes.json();
    const sheetId = createdSheet.spreadsheetId;
    currentSpreadsheetId = sheetId;

    // 3. Initialize header row
    const headers = [
      'Submission ID',
      'Date & Time',
      'Full Name',
      'Email',
      'Phone Number',
      'Company Name',
      'Service Required',
      'Message',
      'Submission Status',
    ];

    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Submissions!A1:I1?valueInputOption=USER_ENTERED`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [headers],
        }),
      }
    );

    return sheetId;
  } catch (error) {
    console.error('Error finding/creating Google Sheet:', error);
    throw error;
  }
};

/**
 * Appends a form enquiry row to the Google Sheet.
 */
export const appendEnquiryToSheet = async (
  accessToken: string,
  enquiry: EnquirySubmission
): Promise<{ spreadsheetId: string; webViewLink: string }> => {
  const spreadsheetId = await getOrCreateSpreadsheet(accessToken);

  const rowValues = [
    enquiry.id,
    enquiry.timestamp,
    enquiry.fullName,
    enquiry.email,
    enquiry.phone || 'N/A',
    enquiry.companyName || 'N/A',
    enquiry.serviceRequired,
    enquiry.message || 'N/A',
    enquiry.status,
  ];

  const appendRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Submissions!A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowValues],
      }),
    }
  );

  if (!appendRes.ok) {
    const err = await appendRes.json();
    throw new Error(err.error?.message || 'Failed to append row to Google Sheet');
  }

  const webViewLink = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
  return { spreadsheetId, webViewLink };
};

/**
 * Sends a notification email to the connected Gmail account containing all submitted details.
 */
export const sendEnquiryEmailNotification = async (
  accessToken: string,
  recipientEmail: string,
  enquiry: EnquirySubmission
): Promise<boolean> => {
  const subject = `[New CS Enquiry #${enquiry.id}] ${enquiry.fullName} - ${enquiry.serviceRequired}`;
  
  const emailBody = `
New Corporate Secretary & Governance Enquiry Received
======================================================
Submission ID: ${enquiry.id}
Date & Time:   ${enquiry.timestamp}
Full Name:     ${enquiry.fullName}
Email:         ${enquiry.email}
Phone Number:  ${enquiry.phone}
Company Name:  ${enquiry.companyName}
Service:       ${enquiry.serviceRequired}
Status:        ${enquiry.status}

Client Message / Specific Requirements:
------------------------------------------------------
${enquiry.message}

======================================================
This notification was automatically dispatched by Apex Corporate Secretary Intelligence via connected Gmail & Google Sheets Integration.
  `.trim();

  // Create standard RFC 2822 email format
  const rawMessage = [
    `To: ${recipientEmail}`,
    `Subject: =?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    'Content-Type: text/plain; charset="UTF-8"',
    'MIME-Version: 1.0',
    '',
    emailBody,
  ].join('\r\n');

  // Base64URL encode the message
  const encodedMessage = btoa(unescape(encodeURIComponent(rawMessage)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const sendRes = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw: encodedMessage,
    }),
  });

  if (!sendRes.ok) {
    const err = await sendRes.json();
    console.warn('Gmail notification error:', err);
    // Don't completely fail submission if email fails, but return false
    return false;
  }

  return true;
};
