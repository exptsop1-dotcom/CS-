import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Linkedin, 
  Twitter, 
  Globe, 
  Clock,
  Sparkles,
  Lock,
  FileSpreadsheet,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';
import { useWorkspace } from '../context/WorkspaceContext';
import { INITIAL_SERVICES } from '../data/placeholderData';

export const ContactSection: React.FC = () => {
  const { config } = useCustomizer();
  const { submitEnquiry, user, connectedSheetLink, isConnecting, signInWithGoogle } = useWorkspace();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequired: INITIAL_SERVICES[0].name,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSubmissionDetails, setLastSubmissionDetails] = useState<{
    submissionId: string;
    sheetsUpdated: boolean;
    gmailSent: boolean;
  } | null>(null);

  const validatePhone = (phone: string) => {
    // Basic phone validation: at least 7 digits
    const cleaned = phone.replace(/[^\d+]/g, '');
    return cleaned.length >= 7;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Form Validations
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid corporate email address.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage('Please enter a valid phone number with country code (e.g. +91 98111 XXXXX).');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please provide a brief description of your compliance requirement.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitEnquiry({
        formType: 'Contact Us',
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        companyName: formData.companyName.trim() || 'Not Specified',
        serviceRequired: formData.serviceRequired,
        message: formData.message.trim(),
      });

      setLastSubmissionDetails({
        submissionId: result.submissionId,
        sheetsUpdated: result.sheetsUpdated,
        gmailSent: result.gmailSent,
      });

      setSubmissionSuccess(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(err.message || 'An unexpected error occurred while processing your enquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-sky-700" />
            <span>CONFIDENTIAL STATUTORY ENQUIRY & INTAKE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Let's Build a Stronger Corporate Foundation.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Whether you are incorporating an enterprise, planning corporate restructuring, or seeking ongoing secretarial audit compliance, our practicing CS partners are here to assist.
          </p>
        </div>

        {/* 2-Column Grid: Form (Left 7) + Contact Details & Workspace Status (Right 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 7 Cols: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative">
            
            {submissionSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Thank you! Your enquiry has been received.
                </h3>
                
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  We will get back to you soon.
                </p>

                {/* Live Integration Status Breakdown */}
                <div className="p-4 bg-[#F8F6F1] rounded-xl border border-[#E8E4DA] max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Submission Reference ID:</span>
                    <span className="font-mono font-bold text-slate-800">{lastSubmissionDetails?.submissionId}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Google Sheet Sync:</span>
                    <span className={`font-semibold ${lastSubmissionDetails?.sheetsUpdated ? 'text-emerald-700' : 'text-slate-600'}`}>
                      {lastSubmissionDetails?.sheetsUpdated ? '✓ Recorded in Google Sheets' : '✓ Logged to Registry'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Gmail Notification:</span>
                    <span className={`font-semibold ${lastSubmissionDetails?.gmailSent ? 'text-emerald-700' : 'text-slate-600'}`}>
                      {lastSubmissionDetails?.gmailSent ? '✓ Dispatch Sent to Gmail' : '✓ Queued for Dispatch'}
                    </span>
                  </div>

                  {connectedSheetLink && (
                    <div className="pt-2 border-t border-slate-200 mt-2">
                      <a
                        href={connectedSheetLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-700 hover:text-sky-900 font-semibold flex items-center gap-1 text-xs underline"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5" />
                        <span>View record in live Google Sheet</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setSubmissionSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      companyName: '',
                      serviceRequired: 'Company Registration',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold tracking-wide transition-all cursor-pointer mt-2"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Siddharth Verma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-sky-600 focus:bg-white focus:outline-none transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="siddharth@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-sky-600 focus:bg-white focus:outline-none transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8762813071"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-sky-600 focus:bg-white focus:outline-none transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Entity Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Quantum Infotech Pvt Ltd"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-sky-600 focus:bg-white focus:outline-none transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-sky-600 focus:bg-white focus:outline-none transition-all"
                  >
                    <option value="Company Registration">Company Registration</option>
                    <option value="GST Filing">GST Filing</option>
                    <option value="Annual Compliance">Annual Compliance</option>
                    <option value="ROC Filing">ROC Filing</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Legal Advisory">Legal Advisory</option>
                    <option value="Tax Filing">Tax Filing</option>
                    <option value="Audit Support">Audit Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Requirement <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly tell us how we can help you. Please do not include highly sensitive personal, financial, or identification information."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-sky-600 focus:bg-white focus:outline-none transition-all resize-none placeholder-slate-400"
                  />
                </div>

                {/* Google Workspace Connectivity Callout */}
                {!user && (
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-sky-900">
                      <FileSpreadsheet className="w-4 h-4 text-sky-700 shrink-0" />
                      <span>Connect Google account to automatically store form entries in live Google Sheets & send Gmail notifications.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => signInWithGoogle()}
                      disabled={isConnecting}
                      className="text-sky-800 hover:text-sky-950 font-bold underline whitespace-nowrap ml-2 cursor-pointer"
                    >
                      {isConnecting ? 'Connecting...' : 'Connect Now'}
                    </button>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Statutory Confidentiality & Non-Disclosure Assured</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn-primary-navy px-7 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right 5 Cols: Contact Information Panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                  PRACTICING CS CHAMBERS
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Direct Partner Engagement
                </h3>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3.5 text-xs">
                
                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-sky-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">OFFICIAL CORRESPONDENCE</div>
                    <a href={`mailto:${config.email}`} className="text-slate-900 font-bold hover:text-sky-700 transition-colors text-sm">
                      {config.email}
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-sky-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">PHONE & WHATSAPP</div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a href={`tel:${config.phone}`} className="text-slate-900 font-bold text-sm hover:text-sky-700 transition-colors">
                        {config.phone}
                      </a>
                      <a
                        href={`https://wa.me/91${config.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-md transition-colors"
                      >
                        <span>WhatsApp Chat</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-sky-700 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">OFFICE ADDRESS</div>
                    <div className="text-slate-900 font-bold text-sm leading-snug">
                      {config.address}
                    </div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      {config.city}, {config.state}
                    </div>
                    {/* Google Maps link is kept hidden until exact link is provided */}
                    {config.showGoogleMaps && (
                      <div className="mt-1 text-xs text-sky-700 font-medium">
                        Location Link Active
                      </div>
                    )}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-sky-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">WORKING HOURS</div>
                    <div className="text-slate-900 font-bold text-sm">
                      {config.workingHours}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Professional Corporate Consultations</div>
                  </div>
                </div>

                {/* Firm Credentials */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">ESTABLISHED</div>
                    <div className="text-slate-900 font-bold text-xs mt-0.5">{config.yearEstablished}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">CS REG. NUMBER</div>
                    <div className="text-slate-900 font-bold text-xs mt-0.5">{config.regNumber}</div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Institutional Links:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                    title="LinkedIn Corporate Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                    title="Twitter / X Regulatory Updates"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                    title="MCA Directory"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
