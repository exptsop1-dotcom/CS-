import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Shield, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';
import { INITIAL_SERVICES } from '../data/placeholderData';

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, setIsConsultationOpen, consultationPreselect, config } = useCustomizer();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [meetingType, setMeetingType] = useState<'video' | 'in-person' | 'phone'>('video');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (consultationPreselect) {
      setSelectedService(consultationPreselect);
    } else if (INITIAL_SERVICES.length > 0) {
      setSelectedService(INITIAL_SERVICES[0].name);
    }
  }, [consultationPreselect]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleClose = () => {
    setIsConsultationOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-[#020408] border border-white/10 rounded-none p-6 sm:p-8 shadow-2xl z-10 my-8 backdrop-blur-xl overflow-hidden font-mono"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between pb-5 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono mb-2">
                  <Shield className="w-3.5 h-3.5" />
                  CONFIDENTIAL ADVISORY SESSION // PRIORITY
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                  Book a Priority CS Consultation
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-sans">
                  Connect directly with practicing Company Secretaries at {config.companyName}.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-none border border-white/10 hover:border-white/30 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4 font-mono"
              >
                <div className="w-14 h-14 bg-white/5 text-[#00D4FF] rounded-none flex items-center justify-center mx-auto border border-[#00D4FF]/50 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-wide">Consultation Request Confirmed</h4>
                <p className="text-slate-300 max-w-md mx-auto text-xs leading-relaxed font-sans">
                  Thank you, <span className="text-[#00D4FF] font-bold">{fullName || 'Partner'}</span>. Our senior compliance partner will review your corporate requirements ({companyName || 'your company'}) and confirm meeting credentials within 4 business hours.
                </p>
                <div className="p-4 bg-white/5 rounded-none border border-white/10 max-w-sm mx-auto text-left text-xs font-mono text-slate-400 space-y-1">
                  <div className="text-white font-bold mb-1 uppercase tracking-wider">PROTOTYPE SIMULATION NOTICE:</div>
                  <div>• Session Type: {meetingType.toUpperCase()} BRIEFING</div>
                  <div>• Service Domain: {selectedService}</div>
                  <div>• Dispatch Node: {config.email}</div>
                </div>
                <div className="pt-3">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                  >
                    Return to Portal
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-none bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] text-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">CORPORATE EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-none bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] text-xs transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">COMPANY / ENTITY NAME</label>
                    <input
                      type="text"
                      placeholder="e.g. Singhania Logistics Pvt Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-none bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] text-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">CONTACT PHONE *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-none bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] text-xs transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">PRIMARY COMPLIANCE DOMAIN</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-none bg-black/90 border border-white/10 text-white focus:outline-none focus:border-[#00D4FF] text-xs transition-all"
                  >
                    {INITIAL_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.name} className="bg-black text-white">
                        {srv.number} — {srv.name} ({srv.category})
                      </option>
                    ))}
                    <option value="General Secretarial Advisory" className="bg-black text-white">
                      General Secretarial Advisory & Compounding
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">CONSULTATION MODE</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['video', 'phone', 'in-person'] as const).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setMeetingType(mode)}
                          className={`py-1.5 px-1 text-[11px] rounded-none border uppercase font-mono transition-all cursor-pointer ${
                            meetingType === mode
                              ? 'bg-[#00D4FF] border-[#00D4FF] text-black font-bold'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">PREFERRED DATE</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-1.5 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00D4FF] text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">BRIEF OVERVIEW / SPECIFIC QUESTIONS</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on pending MCA filings, upcoming board meetings, restructuring, or incorporation plans..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-none bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] text-xs transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                    Strict 100% Client-Attorney Privilege
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Confirm Consultation
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
