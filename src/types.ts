export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Formation' | 'Compliance' | 'Governance' | 'Audits' | 'Advisory';
  forms: string[];
  deliverables: string[];
  keyBenefits: string[];
  timeline: string;
}

export interface JourneyStage {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  milestones: string[];
  filingsRequired: string[];
  csRole: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  turnaround: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  complianceFocus: string[];
  keyRegulations: string;
  riskMitigation: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
  industry: string;
  rating: number;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  contentSnippet: string;
  keyTakeaways: string[];
}

export interface ComplianceFiling {
  id: string;
  formCode: string;
  title: string;
  dueDate: string;
  daysRemaining: number;
  status: 'Completed' | 'Pending' | 'In Review' | 'Upcoming';
  regulatoryBody: string;
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface PrototypeConfig {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  regNumber: string;
  accentColor: 'cyan' | 'violet' | 'emerald';
}
