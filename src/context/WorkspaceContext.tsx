import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import {
  initAuth,
  googleSignIn,
  logout,
  getAccessToken,
  getCurrentUser,
  appendEnquiryToSheet,
  sendEnquiryEmailNotification,
  EnquirySubmission,
} from '../services/googleWorkspace';

interface SubmitLeadParams {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  serviceRequired: string;
  message?: string;
}

export interface SubmitResult {
  success: boolean;
  submissionId: string;
  timestamp: string;
  savedToSheet: boolean;
  emailSent: boolean;
  sheetLink?: string;
  error?: string;
}

interface WorkspaceContextType {
  user: User | null;
  accessToken: string | null;
  isConnecting: boolean;
  authError: string | null;
  connectedSheetLink: string | null;
  notificationEmail: string;
  setNotificationEmail: (email: string) => void;
  signInWithGoogle: () => Promise<boolean>;
  signOutGoogle: () => Promise<void>;
  submitEnquiry: (data: SubmitLeadParams) => Promise<SubmitResult>;
  recentSubmissions: EnquirySubmission[];
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

const NOTIFICATION_TARGET_EMAIL = 'exptsop1@gmail.com';

export const WorkspaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [connectedSheetLink, setConnectedSheetLink] = useState<string | null>(() => {
    return localStorage.getItem('apex_connected_sheet_url');
  });
  const [notificationEmail, setNotificationEmail] = useState<string>(NOTIFICATION_TARGET_EMAIL);
  const [recentSubmissions, setRecentSubmissions] = useState<EnquirySubmission[]>(() => {
    const saved = localStorage.getItem('apex_recent_submissions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    const unsubscribe = initAuth(
      (authUser, token) => {
        setUser(authUser);
        setAccessToken(token);
        setAuthError(null);
      },
      () => {
        setUser(getCurrentUser());
        setAccessToken(getAccessToken());
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async (): Promise<boolean> => {
    setIsConnecting(true);
    setAuthError(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setAccessToken(res.accessToken);
        return true;
      }
      return false;
    } catch (err: any) {
      console.error('Sign-in failure:', err);
      setAuthError(err.message || 'Google authentication was cancelled or interrupted');
      return false;
    } finally {
      setIsConnecting(false);
    }
  };

  const signOutGoogle = async () => {
    await logout();
    setUser(null);
    setAccessToken(null);
  };

  const submitEnquiry = async (data: SubmitLeadParams): Promise<SubmitResult> => {
    const submissionId = `CS-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    const formattedTimestamp = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    }) + ' IST';

    const submission: EnquirySubmission = {
      id: submissionId,
      timestamp: formattedTimestamp,
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      phone: (data.phone || '').trim(),
      companyName: (data.companyName || '').trim(),
      serviceRequired: data.serviceRequired || 'Corporate Secretarial Advisory',
      message: (data.message || '').trim(),
      status: 'Pending Review',
    };

    // Store in local backup list
    const updatedList = [submission, ...recentSubmissions].slice(0, 30);
    setRecentSubmissions(updatedList);
    localStorage.setItem('apex_recent_submissions', JSON.stringify(updatedList));

    let savedToSheet = false;
    let emailSent = false;
    let sheetLink = connectedSheetLink || undefined;

    // Check if we have an active access token
    const token = accessToken || getAccessToken();

    if (token) {
      // 1. Google Sheets sync
      try {
        const sheetRes = await appendEnquiryToSheet(token, submission);
        savedToSheet = true;
        sheetLink = sheetRes.webViewLink;
        setConnectedSheetLink(sheetRes.webViewLink);
        localStorage.setItem('apex_connected_sheet_url', sheetRes.webViewLink);
      } catch (sheetErr) {
        console.error('Google Sheets sync error:', sheetErr);
      }

      // 2. Gmail notification
      try {
        emailSent = await sendEnquiryEmailNotification(
          token,
          notificationEmail || NOTIFICATION_TARGET_EMAIL,
          submission
        );
      } catch (mailErr) {
        console.error('Gmail notification error:', mailErr);
      }
    }

    return {
      success: true,
      submissionId,
      timestamp: formattedTimestamp,
      savedToSheet,
      emailSent,
      sheetLink,
    };
  };

  return (
    <WorkspaceContext.Provider
      value={{
        user,
        accessToken,
        isConnecting,
        authError,
        connectedSheetLink,
        notificationEmail,
        setNotificationEmail,
        signInWithGoogle,
        signOutGoogle,
        submitEnquiry,
        recentSubmissions,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return ctx;
};
