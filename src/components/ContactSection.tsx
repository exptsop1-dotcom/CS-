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
  Lock
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';
import { INITIAL_SERVICES } from '../data/placeholderData';

export const ContactSection: React.FC = () => {
  const { config } = useCustomizer();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequired: INITIAL_SERVICES[0].name,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-white/10 bg-[#020408] overflow-hidden font-mono">
      {/* Subtle radial aura */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>SECURE STATUTORY INTAKE // COMMS CONSOLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Let's Build a Stronger Corporate Foundation.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Whether you are starting a new company or managing an established business, let's discuss how we can support your corporate compliance journey.
          </p>
        </div>

        {/* 2-Column Grid: Modern Form (Left 7) + Futuristic Contact HUD (Right 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 Cols: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-none bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl relative font-mono">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 font-mono"
              >
                <div className="w-14 h-14 bg-white/5 text-[#00D4FF] rounded-none flex items-center justify-center mx-auto border border-[#00D4FF]/50 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  Corporate Inquiry Received
                </h3>
                <p className="text-slate-300 max-w-md mx-auto text-xs leading-relaxed font-sans">
                  Thank you, <span className="text-[#00D4FF] font-bold">{formData.fullName}</span>. Your brief regarding <span className="text-white font-medium">{formData.companyName || 'your enterprise'}</span> has been routed to our Senior Company Secretary partners. We will respond within 4 business hours.
                </p>

                <div className="p-4 bg-white/5 rounded-none border border-white/10 max-w-sm mx-auto text-left text-xs font-mono text-slate-400 space-y-1">
                  <div>DISPATCH STATUS: <span className="text-emerald-400">TRANSMITTED</span></div>
                  <div>REFERENCE ID: CS-ENQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div>TARGET NODE: {config.email}</div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-none bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Siddharth Verma"
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/5 border border-white/10 text-white text-xs font-mono focus:border-[#00D4FF] focus:outline-none transition-all placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="siddharth@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/5 border border-white/10 text-white text-xs font-mono focus:border-[#00D4FF] focus:outline-none transition-all placeholder-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                      CONTACT PHONE *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98111 XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/5 border border-white/10 text-white text-xs font-mono focus:border-[#00D4FF] focus:outline-none transition-all placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Quantum Infotech Pvt Ltd"
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/5 border border-white/10 text-white text-xs font-mono focus:border-[#00D4FF] focus:outline-none transition-all placeholder-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                    SERVICE REQUIRED *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-none bg-black/90 border border-white/10 text-white text-xs font-mono focus:border-[#00D4FF] focus:outline-none transition-all"
                  >
                    {INITIAL_SERVICES.map((s) => (
                      <option key={s.id} value={s.name} className="bg-black text-white">
                        {s.number} — {s.name}
                      </option>
                    ))}
                    <option value="General Corporate Governance Advisory" className="bg-black text-white">
                      General Corporate Governance & Secretarial Audit
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                    MESSAGE / COMPLIANCE BRIEF *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current requirements (e.g. Annual filing, incorporation, restructuring, pending ROC queries, Board resolution drafting)..."
                    className="w-full px-3.5 py-2.5 rounded-none bg-white/5 border border-white/10 text-white text-xs font-mono focus:border-[#00D4FF] focus:outline-none transition-all resize-none placeholder-slate-600"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                    <Lock className="w-3 h-3 text-[#00D4FF]" />
                    <span>Statutory Confidentiality & Non-Disclosure Assured</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right 5 Cols: Futuristic Contact Information Panel */}
          <div className="lg:col-span-5 space-y-6 font-mono">
            <div className="p-6 sm:p-7 rounded-none bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden space-y-5">
              
              <div className="pb-4 border-b border-white/10">
                <span className="text-[9px] font-mono text-[#00D4FF] uppercase font-bold tracking-widest block">
                  STATUTORY COMMUNICATIONS CONSOLE
                </span>
                <h3 className="text-base font-bold text-white uppercase tracking-wide mt-0.5">
                  Direct CS Engagement
                </h3>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 text-xs">
                
                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-none bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">OFFICIAL CORRESPONDENCE EMAIL</div>
                    <a href={`mailto:${config.email}`} className="text-white font-bold hover:text-[#00D4FF] transition-colors">
                      {config.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 p-3 rounded-none bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">DIRECT LINE / WHATSAPP ADVISORY</div>
                    <div className="text-white font-bold">
                      {config.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-none bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">HEAD OFFICE JURISDICTION</div>
                    <div className="text-white font-bold">
                      {config.location}
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans mt-0.5">Practicing PAN-India & Cross-Border Advisory</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 p-3 rounded-none bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">STATUTORY RESPONSE TIMELINE</div>
                    <div className="text-white font-bold">
                      Mon to Sat: 09:30 – 19:30 IST
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans mt-0.5">24/7 Priority Hotline for Board Deadlines</div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[9px] font-mono text-slate-400 uppercase mb-2 tracking-wider">
                  OFFICIAL INSTITUTIONAL PROFILES:
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#contact"
                    className="p-2 rounded-none bg-white/5 hover:bg-[#00D4FF] text-slate-300 hover:text-black border border-white/10 hover:border-[#00D4FF] transition-all"
                    title="LinkedIn Corporate Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#contact"
                    className="p-2 rounded-none bg-white/5 hover:bg-[#00D4FF] text-slate-300 hover:text-black border border-white/10 hover:border-[#00D4FF] transition-all"
                    title="Twitter / X Statutory Bulletins"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#contact"
                    className="p-2 rounded-none bg-white/5 hover:bg-[#00D4FF] text-slate-300 hover:text-black border border-white/10 hover:border-[#00D4FF] transition-all"
                    title="MCA-21 Directory Entry"
                  >
                    <Globe className="w-3.5 h-3.5" />
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
