import { 
  ServiceItem, 
  JourneyStage, 
  ProcessStep, 
  IndustryItem, 
  TestimonialItem, 
  FaqItem, 
  InsightArticle, 
  ComplianceFiling 
} from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'company-registration',
    number: '01',
    name: 'Company Registration',
    shortDescription: 'Complete end-to-end incorporation of Private Limited, Public Limited, OPC, and LLP entities.',
    fullDescription: 'Comprehensive secretarial guidance and execution for incorporating Private Limited Companies, LLPs, One Person Companies (OPC), Section 8 Non-Profit Companies, and Producer Companies with unassailable statutory purity.',
    category: 'Formation',
    forms: ['SPICe+ (INC-32)', 'INC-33 (MOA)', 'INC-34 (AOA)', 'AGILE-PRO-S', 'INC-20A'],
    deliverables: [
      'RUN Name Reservation & Corporate Identification Number (CIN)',
      'Digital Signature Certificates (DSC) & Director Identification Numbers (DIN)',
      'Certificate of Incorporation (COI), PAN, TAN, and EPFO/ESIC/GST Registrations',
      'Statutory Declaration for Commencement of Business (INC-20A)',
      'Customized Memorandum & Articles of Association aligned with investor terms'
    ],
    keyBenefits: [
      'Zero-rejection drafting protocol',
      'Bank account & regulatory registrations pre-configured',
      'Statutory registers and initial share certificates issued seamlessly'
    ],
    timeline: '3 to 5 Business Days'
  },
  {
    id: 'gst-filing',
    number: '02',
    name: 'GST Filing',
    shortDescription: 'Seamless GST registration, monthly and quarterly return filings, and input tax credit reconciliation.',
    fullDescription: 'Proactive management of Goods and Services Tax compliance, including state registrations, monthly GSTR-1 and GSTR-3B filings, annual GSTR-9 reconciliation, and responding to departmental notices.',
    category: 'Compliance',
    forms: ['REG-01', 'GSTR-1', 'GSTR-3B', 'GSTR-9 / 9C', 'CMP-08'],
    deliverables: [
      'New GST Registration, Amendment, and Multi-State Expansion',
      'Monthly & Quarterly Return Preparation and Filing (GSTR-1, GSTR-3B)',
      'Rigorous Input Tax Credit (ITC) Reconciliation with GSTR-2B',
      'Preparation and Certification of Annual GST Returns (GSTR-9 & 9C)',
      'Drafting Replies to GST Show Cause Notices and Scrutiny Queries'
    ],
    keyBenefits: [
      'Maximized Input Tax Credit without mismatch risks',
      '100% on-time submission eliminating compounding late fees',
      'Audit-ready documentation and reconciliation statements'
    ],
    timeline: 'Monthly & Quarterly Cycles'
  },
  {
    id: 'annual-compliance',
    number: '03',
    name: 'Annual Compliance',
    shortDescription: 'Manage mandatory statutory filings, returns, records, and annual corporate compliance requirements.',
    fullDescription: 'Proactive management of statutory annual requirements to maintain active status with the Registrar of Companies (ROC), preventing director disqualification, penal interest, and corporate strikes.',
    category: 'Compliance',
    forms: ['AOC-4 / AOC-4 XBRL', 'MGT-7 / MGT-7A', 'DIR-3 KYC', 'DPT-3', 'MSME-1'],
    deliverables: [
      'Preparation & filing of Financial Statements (AOC-4) with Director’s Report',
      'Annual Return filing (MGT-7) with complete shareholding disclosure',
      'Annual Director KYC verification (Web KYC / DIR-3 KYC)',
      'Filing of return of deposits / non-deposit liabilities (DPT-3)',
      'Maintenance of mandatory digital and physical statutory registers'
    ],
    keyBenefits: [
      '100% on-time guarantee eliminating compounding late fees',
      'XBRL tagging for qualifying private & public companies',
      'Annual Compliance Health Certificate issued by practicing CS'
    ],
    timeline: 'Continuous monitoring & annual cycles'
  },
  {
    id: 'roc-filing',
    number: '04',
    name: 'ROC Filing',
    shortDescription: 'Support with event-based regulatory filings, corporate documentation, and MCA-21 submissions.',
    fullDescription: 'Comprehensive management of all event-based MCA-21 v3 portal filings, ensuring timely submission of corporate alterations, charges, share allotments, and registered office changes.',
    category: 'Compliance',
    forms: ['DIR-12', 'PAS-3', 'SH-7', 'CHG-1 / CHG-4', 'INC-22'],
    deliverables: [
      'Director appointment, resignation, and regularization filings (DIR-12)',
      'Allotment of shares, private placement, and rights issue filings (PAS-3)',
      'Increase in Authorized Capital and Alteration of Capital Clause (SH-7)',
      'Creation, modification, and satisfaction of security charges (CHG-1/4)',
      'Change in Registered Office within city, state, or interstate (INC-22 / INC-23)'
    ],
    keyBenefits: [
      'Rapid V3 MCA portal troubleshooting and pre-scrutiny checks',
      'Affidavit, stamp duty, and statutory declaration preparation',
      'Real-time SRN tracking and MCA clearance certificates'
    ],
    timeline: 'Within 24 to 48 Hours of event approval'
  },
  {
    id: 'trademark-registration',
    number: '05',
    name: 'Trademark Registration',
    shortDescription: 'Protect brand identity, corporate logos, and intellectual property with statutory trademark filing.',
    fullDescription: 'End-to-end trademark prosecution and intellectual property advisory under the Trade Marks Act, safeguarding your business goodwill, logos, slogans, and corporate brand assets from infringement.',
    category: 'Advisory',
    forms: ['TM-A', 'TM-M', 'TM-O', 'TM-R'],
    deliverables: [
      'Comprehensive IP India Trademark Search & Nice Classification Analysis',
      'Drafting, Class Selection, and E-Filing of Form TM-A',
      'Preparation of Written Responses to Examination Reports (Objections)',
      'Representation at Trademark Registry Hearings across jurisdictions',
      'Procurement of Trademark Registration Certificate & Renewal Filings'
    ],
    keyBenefits: [
      'Nationwide legal monopoly over your trade name and brand logo',
      'Statutory defense against brand passing-off and commercial infringement',
      'Creation of a valuable intangible asset for investment and valuation'
    ],
    timeline: 'Filing within 24 Hours, active lifecycle tracking'
  },
  {
    id: 'legal-advisory',
    number: '06',
    name: 'Legal Advisory',
    shortDescription: 'Strategic legal and secretarial counsel on corporate structuring, contracts, and regulatory governance.',
    fullDescription: 'High-level retained and project-based advisory on Companies Act, corporate agreements, board governance, FEMA regulations, and compounding of statutory offenses.',
    category: 'Advisory',
    forms: ['DIR-12', 'MGT-14', 'Compounding Petitions', 'Commercial Agreements'],
    deliverables: [
      'Drafting & Vetting Founders Agreements, Commercial Contracts, and MoUs',
      'Board Charter and Corporate Governance advisory aligned with ICSI Standards',
      'Legal opinions on director liabilities, inter-corporate loans, and deposits',
      'Preparation of Compounding Applications for procedural delays or defaults',
      'Corporate restructuring, shareholder dispute mitigation, and advisory'
    ],
    keyBenefits: [
      'Mitigation of personal director liability and regulatory risks',
      'Flawless legal defensibility of corporate contracts and resolutions',
      'Authoritative opinions backed by judicial precedents and legal clarity'
    ],
    timeline: 'On-demand advisory & dedicated retainers'
  },
  {
    id: 'tax-filing',
    number: '07',
    name: 'Tax Filing',
    shortDescription: 'Comprehensive corporate and business income tax returns, TDS compliance, and statutory tax filings.',
    fullDescription: 'Accurate and timely direct tax filings for corporate entities, LLPs, partnerships, and proprietors, ensuring full alignment between statutory financial statements and tax computations.',
    category: 'Compliance',
    forms: ['ITR-5', 'ITR-6', 'Form 26Q / 24Q', 'Form 15CA / 15CB'],
    deliverables: [
      'Corporate and Firm Income Tax Return Preparation and E-Filing (ITR-5, ITR-6)',
      'Quarterly TDS / TCS Computation, Deposit, and Return Filings (24Q, 26Q)',
      'Issuance of Form 16 / 16A and TDS Reconciliation with Form 26AS / AIS',
      'Foreign Remittance Certifications (Form 15CB) and 15CA Filings',
      'Assistance with Income Tax Scrutiny, Rectifications, and Refund Follow-ups'
    ],
    keyBenefits: [
      'Complete statutory synchronization with audited financial statements',
      'Zero penalty risk through strict adherence to filing calendars',
      'Proactive identification of applicable deductions and tax credits'
    ],
    timeline: 'Quarterly & Annual Deadlines'
  },
  {
    id: 'audit-support',
    number: '08',
    name: 'Audit Support',
    shortDescription: 'Secretarial audit, statutory compliance diligence, and independent verification of corporate records.',
    fullDescription: 'Mandatory and voluntary secretarial audits under Section 204 of the Companies Act, 2013 and allied regulations. Comprehensive verification of statutory registers, minutes, and corporate compliances.',
    category: 'Audits',
    forms: ['Form MR-3', 'Secretarial Compliance Report', 'Due Diligence Certificate'],
    deliverables: [
      'Issuance of formal Secretarial Audit Report in Form MR-3',
      'Comprehensive verification of corporate acts against applicable corporate laws',
      'Identification of statutory non-compliances and remedial compounding avenues',
      'Secretarial Compliance Report for qualifying corporate entities',
      'Corporate Governance Due Diligence certification for lenders and investors'
    ],
    keyBenefits: [
      'Detects latent non-compliance before regulatory notices occur',
      'Essential reassurance for Board of Directors and Institutional Investors',
      'Provides actionable roadmap to remediate governance gaps'
    ],
    timeline: '2 to 3 Weeks Comprehensive Review'
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'stage-1',
    stageNumber: '01',
    title: 'Start a Business',
    subtitle: 'Foundation & Genesis',
    description: 'Translating visionary ideas into a compliant legal entity with uncompromised statutory purity.',
    icon: 'Rocket',
    milestones: [
      'Entity Selection Analysis (Pvt Ltd, LLP, Section 8, OPC)',
      'Name Approval via RUN / SPICe+ Part A with trademark clearance',
      'DSC Procurement & Director Identification Number (DIN) allotment',
      'Drafting customized MOA & AOA with bespoke share capital classes',
      'Execution of AGILE-PRO-S for PAN, TAN, GST, and Bank Integration'
    ],
    filingsRequired: ['SPICe+ Part A & B', 'INC-33', 'INC-34', 'INC-9', 'AGILE-PRO-S', 'INC-20A'],
    csRole: 'Your founding architect ensuring that your initial capital structure, promoter covenants, and statutory registrations are built without defects.'
  },
  {
    id: 'stage-2',
    stageNumber: '02',
    title: 'Build Structure',
    subtitle: 'Governance & Capital Setup',
    description: 'Organizing board committees, initial share allotments, capitalization, and foundational governance.',
    icon: 'Layers',
    milestones: [
      'First Board Meeting within 30 days of incorporation (SS-1)',
      'Statutory Auditor Appointment (Form ADT-1 within 15 days of AGM)',
      'Opening statutory bank account & capital subscription deposit',
      'Issuing stamped Physical/Demat Share Certificates to subscribers',
      'Filing Declaration of Commencement of Business (Form INC-20A)'
    ],
    filingsRequired: ['ADT-1', 'INC-20A', 'PAS-3', 'DIR-12', 'MGT-14'],
    csRole: 'Ensuring your statutory registers (MGT-1, MGT-2) are initialized and the first board resolutions comply with statutory timing.'
  },
  {
    id: 'stage-3',
    stageNumber: '03',
    title: 'Maintain Compliance',
    subtitle: 'Operational Equilibrium',
    description: 'Sustaining flawless annual cycles, regulatory disclosures, and risk-free statutory posture.',
    icon: 'ShieldCheck',
    milestones: [
      'Mandatory minimum 4 Board Meetings per year (gap < 120 days)',
      'Preparation of Board’s Report with statutory disclosures and annexures',
      'Holding Annual General Meeting (AGM) within 6 months of fiscal end',
      'Filing Audited Financials in Form AOC-4 / AOC-4 XBRL',
      'Filing Annual Return in Form MGT-7 / MGT-7A with shareholding lists'
    ],
    filingsRequired: ['AOC-4', 'MGT-7', 'DIR-3 KYC', 'DPT-3', 'MSME-1', 'DIR-8 / MBP-1'],
    csRole: 'Acting as your continuous compliance vanguard, monitoring statutory deadlines across the MCA calendar to eliminate late fees.'
  },
  {
    id: 'stage-4',
    stageNumber: '04',
    title: 'Scale the Business',
    subtitle: 'Expansion & Capital Influx',
    description: 'Managing private placements, venture capital rounds, ESOP issuances, and FDI compliance.',
    icon: 'TrendingUp',
    milestones: [
      'Increasing Authorized Share Capital via EGM resolution (Form SH-7)',
      'Private Placement Offer Letter drafting & filing (Form PAS-4 / PAS-5)',
      'Allotment of Equity / CCPS to investors and filing Form PAS-3',
      'FEMA / RBI compliance via FIRMS portal (Form FC-GPR) for foreign capital',
      'Structuring and administering Employee Stock Option Plans (ESOPs)'
    ],
    filingsRequired: ['SH-7', 'MGT-14', 'PAS-3', 'FC-GPR', 'DIR-12', 'CHG-1'],
    csRole: 'Bridging investor terms, shareholder agreements (SHA), and statutory compliance to safeguard founder control and regulatory speed.'
  },
  {
    id: 'stage-5',
    stageNumber: '05',
    title: 'Manage Governance',
    subtitle: 'Institutional Stewardship',
    description: 'Preparing for board evaluations, ESG disclosures, secretarial audits, and public listing readiness.',
    icon: 'Building2',
    milestones: [
      'Constitution of Audit Committee, NRC, and CSR Committee',
      'Conducting comprehensive annual Secretarial Audit in Form MR-3',
      'Dematerialization of securities (ISIN setup) for unlisted public/private firms',
      'Significant Beneficial Ownership disclosures under Section 90 (Form BEN-2)',
      'Implementation of robust Insider Trading and POSH compliance codes'
    ],
    filingsRequired: ['MR-3', 'BEN-2', 'PAS-6', 'MGT-14', 'DIR-12', 'CSR-2'],
    csRole: 'Transforming corporate governance from a cost center into a strategic premium that attracts institutional valuations and global partners.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Connect',
    subtitle: 'Discovery & Requirement Intake',
    description: 'We begin with an encrypted exploratory discussion to decode your corporate architecture, pending statutory matters, and strategic goals.',
    deliverables: ['Confidentiality NDA', 'Compliance Intake Questionnaire', 'Initial Scope Blueprint'],
    turnaround: 'Day 1'
  },
  {
    stepNumber: '02',
    title: 'Analyse',
    subtitle: 'Corporate & MCA Audit',
    description: 'Our senior CS specialists run an audit on MCA records, statutory registers, filing histories, and corporate documents to identify discrepancies.',
    deliverables: ['Statutory Gap Analysis Report', 'Risk Matrix', 'Past Non-Compliance Tally'],
    turnaround: 'Days 2–3'
  },
  {
    stepNumber: '03',
    title: 'Strategise',
    subtitle: 'Tailored Compliance Roadmap',
    description: 'We construct a customized secretarial roadmap featuring clear regulatory filing dates, board schedules, resolution templates, and cost plans.',
    deliverables: ['Annual Compliance Calendar', 'Filing Strategy Matrix', 'Statutory Cost Model'],
    turnaround: 'Days 4–5'
  },
  {
    stepNumber: '04',
    title: 'Execute',
    subtitle: 'Precision Drafting & Filing',
    description: 'We draft legally fortified notices, minutes, resolutions, and petition documents, followed by verified submission on the MCA-21 portal.',
    deliverables: ['Certified Resolutions & Minutes', 'Form SRN Acknowledgments', 'MCA Approval Orders'],
    turnaround: 'Execution Phase'
  },
  {
    stepNumber: '05',
    title: 'Stay Compliant',
    subtitle: 'Proactive Telemetry & Advisory',
    description: 'Enjoy automated statutory radar monitoring, quarterly board governance briefings, and direct access to practicing CS partners.',
    deliverables: ['Live Compliance Dashboard Access', 'Quarterly CS Briefings', 'Regulatory Alert Bulletins'],
    turnaround: 'Ongoing Partnership'
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'startups',
    name: 'Startups & Ventures',
    category: 'High Growth',
    description: 'Agile secretarial support for fast-moving founders handling funding rounds, ESOP pools, and rapid cap-table changes.',
    complianceFocus: ['Cap Table Restructuring', 'Investor Due Diligence', 'ESOP Schemes', 'Section 42 Private Placements'],
    keyRegulations: 'Companies Act Sec 42 & 62, Startup India Recognitions',
    riskMitigation: 'Protecting founder equity and preventing cap table mess before Series A/B.'
  },
  {
    id: 'tech',
    name: 'Technology & SaaS',
    category: 'Digital Innovation',
    description: 'Cross-border secretarial governance for SaaS and software companies navigating foreign inward remittances and IP holding setups.',
    complianceFocus: ['FDI & FLA Reporting', 'Cross-border Subsidiaries', 'Transfer Pricing Secretarial Minutes', 'Digital Contracts'],
    keyRegulations: 'FEMA 1999, RBI Master Directions, FDI Policy',
    riskMitigation: 'Ensuring flawless foreign remittance filing (FC-GPR) to avoid heavy RBI compounding.'
  },
  {
    id: 'fintech',
    name: 'Financial Services & Fintech',
    category: 'Regulated Finance',
    description: 'Rigorous secretarial assistance for NBFCs, payment gateways, micro-lenders, and fintech firms balancing MCA with RBI guidelines.',
    complianceFocus: ['NBFC Secretarial Compliance', 'Fit & Proper Director KYC', 'Fair Practices Code', 'Board Oversight Committees'],
    keyRegulations: 'RBI Act 1934, Companies Act 2013, Prevention of Money Laundering Act',
    riskMitigation: 'Preventing regulatory show-cause notices through proactive board documentation.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    category: 'Industrial',
    description: 'Handling heavy capital expenditure compliance, charge registrations, factory premises secretarial approvals, and environmental CSR.',
    complianceFocus: ['Charge Creation & Satisfaction (CHG-1)', 'Industrial Land Leasing Disclosures', 'CSR Committee Governance', 'Inter-corporate Loans'],
    keyRegulations: 'Companies Act Sec 77 & 186, Factories Act, State Industrial Policies',
    riskMitigation: 'Securing clean bank charge satisfaction certificates to release pledged assets.'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    category: 'Consumer Digital',
    description: 'Consumer protection compliance, marketplace inventory norms, multi-state branch office secretarial filings, and vendor agreements.',
    complianceFocus: ['FDI E-Commerce Guidelines', 'Consumer Protection Rules', 'Statutory Audits', 'Trademark & IP Alignment'],
    keyRegulations: 'Consumer Protection (E-Commerce) Rules, FDI Consolidated Circular',
    riskMitigation: 'Structuring marketplace operations compliant with 100% FDI automatic route constraints.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    category: 'Medical & Bio',
    description: 'Secretarial diligence for hospital chains, medical device makers, and clinical diagnostic firms navigating medical governance.',
    complianceFocus: ['Hospital Board Committees', 'Medical Equipment Leasing Charges', 'CSR Health Initiatives', 'Related Party Transactions'],
    keyRegulations: 'Clinical Establishments Act, Companies Act Sec 188, Drugs & Cosmetics Rules',
    riskMitigation: 'Ensuring related-party doctor and trustee transactions withstand scrutiny.'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Infrastructure',
    category: 'Property & Infra',
    description: 'Joint venture structuring, SPV incorporations, project finance charges, and corporate restructuring for developers.',
    complianceFocus: ['Project SPV Secretarial Setup', 'Debenture Issuances (PAS-3)', 'RERA & MCA Alignment', 'Charge Filings on Land Parcells'],
    keyRegulations: 'RERA 2016, Companies Act Sec 71, Transfer of Property Act',
    riskMitigation: 'Clear statutory asset records for institutional lenders and private equity funds.'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    category: 'Consultancies',
    description: 'Structuring management consultancies, architecture firms, and tech design agencies into optimal corporate vehicles.',
    complianceFocus: ['LLP Agreement Alterations', 'Partner Induction & Exits', 'Capital Contribution Filings', 'Statutory Tax Disclosures'],
    keyRegulations: 'Limited Liability Partnership Act 2008, Companies Act',
    riskMitigation: 'Preserving limited liability protection through unassailable annual disclosures.'
  },
  {
    id: 'enterprises',
    name: 'Growing Enterprises',
    category: 'Mid-Market',
    description: 'Preparing family-run and mid-market organizations for corporate professionalization, independent director inducting, and IPO readiness.',
    complianceFocus: ['Board Professionalization', 'Dematerialization of Shares', 'Independent Directors', 'Secretarial Audit Form MR-3'],
    keyRegulations: 'ICSI Secretarial Standards, Companies Act Sec 149 & 178',
    riskMitigation: 'Eliminating legacy informal practices before institutional investment.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Their futuristic approach to corporate secretarial practice transformed our entire compliance posture. For our Series A fundraising, the investors’ legal team specifically praised the cleanliness of our secretarial registers and ROC records.',
    name: 'Rajesh Kumar',
    designation: 'Founder & Managing Director',
    company: 'NexVenture Technologies',
    industry: 'Enterprise SaaS',
    rating: 5,
    highlight: 'Flawless Due Diligence'
  },
  {
    id: 'test-2',
    quote: 'As a regulated health-tech company, missing an MCA or ROC deadline is not an option. Their proactive statutory calendar and automated reminders have kept our board governance 100% compliant for over 4 years.',
    name: 'Priya Sharma',
    designation: 'Whole-Time Director',
    company: 'AuraBio Healthcare Solutions',
    industry: 'Medical Devices',
    rating: 5,
    highlight: 'Zero Late Penalties'
  },
  {
    id: 'test-3',
    quote: 'Executing our corporate restructuring and fast-track merger required deep technical expertise under Section 233. The team drafted every resolution, handled regional director representations, and completed the amalgamation ahead of schedule.',
    name: 'Arjun Mehta',
    designation: 'Chief Executive Officer',
    company: 'Stratos Industrial Group',
    industry: 'Manufacturing & Engineering',
    rating: 5,
    highlight: 'Restructuring Mastery'
  },
  {
    id: 'test-4',
    quote: 'The level of responsiveness and technical mastery they bring to the table is unmatched. They do not just file forms—they act as strategic boardroom advisors who protect our directors from unforeseen liabilities.',
    name: 'Ananya Iyer',
    designation: 'Chief Legal Officer & Director',
    company: 'FinPulse Mobility Solutions',
    industry: 'Electric Mobility & Fintech',
    rating: 5,
    highlight: 'Strategic Board Advisory'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Fundamentals',
    question: 'What does a Company Secretary (CS) do?',
    answer: 'A Company Secretary is a recognized governance professional and Key Managerial Personnel (KMP) under corporate law. A CS serves as the primary liaison between a company, its Board of Directors, shareholders, and government regulatory bodies like the Ministry of Corporate Affairs (MCA) and Registrar of Companies (ROC). Key responsibilities include ensuring statutory compliance, executing board and shareholder meetings, maintaining statutory registers, certifying annual returns, and providing strategic corporate governance advisory.'
  },
  {
    id: 'faq-2',
    category: 'Eligibility',
    question: 'Which businesses require Company Secretary services?',
    answer: 'Under Section 203 of the Companies Act, every listed company and every public company with paid-up share capital of ₹10 Crores or more is legally required to appoint a whole-time Company Secretary. Furthermore, companies with paid-up capital of ₹50 Crores or turnover of ₹250 Crores must undergo a mandatory Secretarial Audit. For all other private limited companies and LLPs, engaging a practicing Company Secretary firm is vital to manage mandatory annual filings, board resolutions, capital alterations, and prevent severe compounding penalties.'
  },
  {
    id: 'faq-3',
    category: 'Operations',
    question: 'How can you help with annual compliance?',
    answer: 'Our firm handles the entire annual compliance cycle: drafting the Director’s Report, organizing the Annual General Meeting (AGM) notices and minutes, preparing and tagging Financial Statements in Form AOC-4 (including XBRL where mandated), filing Annual Return Form MGT-7, processing Director KYC (DIR-3 KYC), filing deposit returns (DPT-3), and maintaining updated digital statutory registers.'
  },
  {
    id: 'faq-4',
    category: 'Startups',
    question: 'Do you assist startups and early-stage companies?',
    answer: 'Yes, extensively. We offer specialized Startup Acceleration Secretarial Packages. We assist startups from the incorporation stage through angel and venture funding rounds. This includes founder agreements, drafting vesting schedules, issuing share certificates, increasing authorized capital, drafting Private Placement Offer Letters (PAS-4), filing allotment returns (PAS-3), and managing foreign remittance compliance (FC-GPR) with the Reserve Bank of India.'
  },
  {
    id: 'faq-5',
    category: 'Filings',
    question: 'Can you help with pending ROC filings and compounding of offenses?',
    answer: 'Absolutely. If your company has lapsed in filings or received notices under Section 248 or other provisions, our practicing CS team conducts a comprehensive statutory audit. We file overdue forms, compute accurate statutory fees, prepare compounding applications under Section 441 of the Act, and represent the company before the Regional Director (RD) or National Company Law Tribunal (NCLT) to restore active and compliant standing.'
  },
  {
    id: 'faq-6',
    category: 'Engagement',
    question: 'How do I book a consultation and initiate services?',
    answer: 'You can book a priority consultation through the "Book a Consultation" button on this portal. Select your desired service domain (Incorporation, Annual Retainer, Secretarial Audit, or Advisory). Our senior compliance counsel will arrange an encrypted discovery call within 24 business hours to evaluate your requirements and provide a clear, transparent engagement roadmap.'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'insight-1',
    title: 'Understanding Annual Corporate Compliance: The 2026 Executive Playbook',
    subtitle: 'A systematic guide to keeping private and public entities in prime statutory standing without surprise penalties.',
    category: 'Statutory Guide',
    readTime: '6 min read',
    date: 'August 28, 2026',
    summary: 'Corporate non-compliance is no longer treated with minor fees. In recent years, automated scrutiny algorithms on the MCA-21 v3 portal have heightened penalties for delays. This comprehensive guide outlines the annual compliance calendar and critical milestones.',
    contentSnippet: 'Under the revised regulatory posture, directors face immediate DIN deactivation upon failure to file annual returns within statutory deadlines. Crucial forms like AOC-4, MGT-7, and DPT-3 require coordinated sign-offs between statutory auditors and practicing company secretaries.',
    keyTakeaways: [
      'Stricter automated MCA-21 v3 pre-scrutiny checks for all balance sheet attachments',
      'Daily compounding late fees of ₹100 per day per form with no upper cap',
      'Importance of reconciling MSME supplier dues in half-yearly Form MSME-1'
    ]
  },
  {
    id: 'insight-2',
    title: 'Corporate Governance in a Changing World: Secretarial Standards Demystified',
    subtitle: 'Key principles modern boards must implement to safeguard against director liability and shareholder disputes.',
    category: 'Board Governance',
    readTime: '8 min read',
    date: 'August 14, 2026',
    summary: 'Secretarial Standards SS-1 (Meetings of the Board of Directors) and SS-2 (General Meetings) are not mere guidelines—they carry statutory backing under Section 118(10) of the Companies Act, 2013.',
    contentSnippet: 'Disputes over quorum, electronic voting validity, and shorter notice validity can invalidate key board resolutions. Our analysis highlights how digital minutes preservation and cryptographic timestamps provide unassailable defense during litigation or audits.',
    keyTakeaways: [
      'Preserving draft and final minutes with mandatory 7-day circulation protocols',
      'Handling interested directors and related party transaction disclosure norms',
      'Implementing independent director review mechanisms for mid-market firms'
    ]
  },
  {
    id: 'insight-3',
    title: 'Starting a Company: Key Compliance Considerations Beyond Incorporation',
    subtitle: 'What founders overlook in the first 180 days that causes regulatory distress during institutional fundraising.',
    category: 'Venture & Scale',
    readTime: '5 min read',
    date: 'July 29, 2026',
    summary: 'Obtaining a Certificate of Incorporation is merely day zero. The critical window between incorporation and commencement of business dictates whether an enterprise is legally permitted to transact.',
    contentSnippet: 'Many founders mistakenly commence operations without filing Form INC-20A (Commencement of Business) within 180 days, triggering heavy penalties and disqualifications. This article maps the indispensable post-incorporation checklist.',
    keyTakeaways: [
      'Mandatory physical verification of registered office under Rule 25B',
      'Timely issuance and stamp duty payment on share certificates within 60 days',
      'First board meeting documentation and formal auditor appointment in Form ADT-1'
    ]
  }
];

export const DEMO_FILINGS: ComplianceFiling[] = [
  {
    id: 'f-1',
    formCode: 'AOC-4 XBRL',
    title: 'Financial Statements Filing (FY 2025-26)',
    dueDate: 'Oct 30, 2026',
    daysRemaining: 56,
    status: 'Upcoming',
    regulatoryBody: 'MCA / ROC',
    riskLevel: 'High'
  },
  {
    id: 'f-2',
    formCode: 'MGT-7',
    title: 'Annual Return with Shareholding List',
    dueDate: 'Nov 29, 2026',
    daysRemaining: 86,
    status: 'Upcoming',
    regulatoryBody: 'MCA / ROC',
    riskLevel: 'High'
  },
  {
    id: 'f-3',
    formCode: 'DIR-3 KYC',
    title: 'Annual Web KYC for Active Directors',
    dueDate: 'Sep 30, 2026',
    daysRemaining: 26,
    status: 'Pending',
    regulatoryBody: 'MCA Portal',
    riskLevel: 'Medium'
  },
  {
    id: 'f-4',
    formCode: 'DPT-3',
    title: 'Return of Deposits & Unsecured Loans',
    dueDate: 'Completed',
    daysRemaining: 0,
    status: 'Completed',
    regulatoryBody: 'MCA / ROC',
    riskLevel: 'Low'
  },
  {
    id: 'f-5',
    formCode: 'PAS-3',
    title: 'Return of Allotment (Series A Round)',
    dueDate: 'Approved',
    daysRemaining: 0,
    status: 'Completed',
    regulatoryBody: 'ROC Approval',
    riskLevel: 'Low'
  },
  {
    id: 'f-6',
    formCode: 'MSME-1',
    title: 'Half-Yearly Return of Outstanding Dues',
    dueDate: 'Oct 31, 2026',
    daysRemaining: 57,
    status: 'In Review',
    regulatoryBody: 'MCA / MSME',
    riskLevel: 'Medium'
  }
];
