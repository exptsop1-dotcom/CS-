import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Shield, Calendar, Clock, ArrowRight, FileSpreadsheet, AlertCircle, ExternalLink } from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';
import { useWorkspace } from '../context/WorkspaceContext';
import { INITIAL_SERVICES } from '../data/placeholderData';

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, setIsConsultationOpen, consultationPreselect, config } = useCustomizer();
  const { submitEnquiry, user, connectedSheetLink, isConnecting, signInWithGoogle } = useWorkspace();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [meetingType, setMeetingType] = useState<'phone' | 'in-person'>('phone');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSubmissionDetails, setLastSubmissionDetails] = useState<{
    submissionId: string;
    sheetsUpdated: boolean;
    gmailSent: boolean;
  } | null>(null);

  useEffect(() => {
    if (consultationPreselect) {
      setSelectedService(consultationPreselect);
    } else if (INITIAL_SERVICES.length > 0) {
      setSelectedService(INITIAL_SERVICES[0].name);
    }
  }, [consultationPreselect]);

  const validatePhone = (p: string) => {
    const cleaned = p.replace(/[^\d+]/g, '');
    return cleaned.length >= 7;
  };

  const validateEmail = (e: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid corporate email address.');
      return;
    }

    if (!validatePhone(phone)) {
      setErrorMessage('Please enter a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const modeLabel = meetingType === 'phone' ? 'Phone Consultation' : 'In-Person Office Visit';
      const detailedMessage = `[Consultation Mode: ${modeLabel}] [Preferred Date: ${preferredDate || 'Earliest Available'}] \nRequirement: ${notes.trim() || 'Direct consultation requested'}`;

      const result = await submitEnquiry({
        formType: 'Book a Consultation',
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        companyName: companyName.trim() || 'Not Specified',
        serviceRequired: selectedService,
        message: detailedMessage,
      });

      setLastSubmissionDetails({
        submissionId: result.submissionId,
        sheetsUpdated: result.sheetsUpdated,
        gmailSent: result.gmailSent,
      });

      setIsSuccess(true);
    } catch (err: any) {
      console.error('Consultation submission error:', err);
      setErrorMessage(err.message || 'An error occurred while submitting your consultation request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsConsultationOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setErrorMessage(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-xl z-10 my-8 border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4F1EA] text-slate-700 text-[11px] font-semibold">
                  <Shield className="w-3 h-3 text-sky-700" />
                  <span>CONFIDENTIAL STATUTORY CONSULTATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Book an Executive CS Consultation
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Connect directly with practicing Company Secretaries at {config.companyName}.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h4 className="text-xl font-bold text-slate-900">
                  Thank you! Your enquiry has been received.
                </h4>

                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  We will get back to you soon.
                </p>

                {/* Live Google Sheets & Gmail details */}
                <div className="p-4 bg-[#F8F6F1] rounded-xl border border-[#E8E4DA] max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Session Mode:</span>
                    <span className="font-semibold text-slate-800">
                      {meetingType === 'phone' ? 'PHONE CONSULTATION' : 'OFFICE VISIT'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Submission ID:</span>
                    <span className="font-mono font-bold text-slate-800">{lastSubmissionDetails?.submissionId}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Google Sheet Sync:</span>
                    <span className={`font-semibold ${lastSubmissionDetails?.sheetsUpdated ? 'text-emerald-700' : 'text-slate-600'}`}>
                      {lastSubmissionDetails?.sheetsUpdated ? '✓ Stored in Google Sheets' : '✓ Logged to Registry'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Gmail Notification:</span>
                    <span className={`font-semibold ${lastSubmissionDetails?.gmailSent ? 'text-emerald-700' : 'text-slate-600'}`}>
                      {lastSubmissionDetails?.gmailSent ? '✓ Sent to connected Gmail' : '✓ Queued for Dispatch'}
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

                <div className="pt-2">
                  <button
                    onClick={handleClose}
                    className="btn-primary-navy px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
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
                      placeholder="e.g. Vikram Singhania"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Entity Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Singhania Logistics Pvt Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 8762813071"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-all"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Consultation Mode</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setMeetingType('phone')}
                        className={`py-2 px-2 text-xs rounded-lg border font-medium uppercase tracking-wider transition-all cursor-pointer ${
                          meetingType === 'phone'
                            ? 'bg-[#0A2540] border-[#0A2540] text-white shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        Phone Call
                      </button>
                      <button
                        type="button"
                        onClick={() => setMeetingType('in-person')}
                        className={`py-2 px-2 text-xs rounded-lg border font-medium uppercase tracking-wider transition-all cursor-pointer ${
                          meetingType === 'in-person'
                            ? 'bg-[#0A2540] border-[#0A2540] text-white shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        Office Visit
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Requirement <span className="text-red-500">*</span></label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly tell us how we can help you. Please do not include highly sensitive personal, financial, or identification information."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white transition-all resize-none"
                  />
                </div>

                {!user && (
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-sky-900">
                      <FileSpreadsheet className="w-4 h-4 text-sky-700 shrink-0" />
                      <span>Sync consultations automatically to live Google Sheets & Gmail.</span>
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

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Statutory Attorney-Client Privilege</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-navy px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Confirming...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
