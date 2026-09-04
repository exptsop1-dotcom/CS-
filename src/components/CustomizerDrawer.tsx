import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X, RefreshCw, Sparkles, Check, Building, Mail, Phone, MapPin } from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

export const CustomizerDrawer: React.FC = () => {
  const { config, updateConfig, resetConfig, isCustomizerOpen, setIsCustomizerOpen } = useCustomizer();

  const applySampleProfile = () => {
    updateConfig({
      companyName: 'Apex Corporate Governance & Secretarial Advisory',
      tagline: 'Precision Compliance. Investor-Grade Governance.',
      email: 'partners@apexcs.legal',
      phone: '+91 11 4982 7700',
      location: 'Connaught Place, New Delhi & BKC, Mumbai, India',
      regNumber: 'ICSI Peer Reviewed Practicing CS Firm #8849',
      accentColor: 'cyan'
    });
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-5 left-5 z-40 font-mono">
        <button
          onClick={() => setIsCustomizerOpen(!isCustomizerOpen)}
          className="group flex items-center gap-2.5 px-4 py-2 bg-[#020408] hover:bg-black border border-white/20 hover:border-[#00D4FF] text-white shadow-xl text-xs transition-all cursor-pointer rounded-none uppercase tracking-wider"
          title="Customize Prototype Placeholders"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#00D4FF] opacity-75"></span>
            <span className="relative inline-flex rounded-none h-2 w-2 bg-[#00D4FF]"></span>
          </span>
          <Settings className="w-3.5 h-3.5 text-[#00D4FF] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline text-slate-200">CONFIG HUD</span>
          <span className="px-1.5 py-0.5 text-[9px] bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 font-bold">
            EDIT PLACEHOLDERS
          </span>
        </button>
      </div>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isCustomizerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden font-mono">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCustomizerOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.25 }}
                className="w-screen max-w-md bg-[#020408] border-r border-white/10 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-[#00D4FF]" />
                      <h3 className="font-bold text-white text-base uppercase tracking-wider">Prototype Config HUD</h3>
                    </div>
                    <button
                      onClick={() => setIsCustomizerOpen(false)}
                      className="p-1.5 text-slate-400 hover:text-white rounded-none border border-white/10 hover:border-white/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed font-sans">
                    Test live modifications to the template. Change your firm name, phone number, and location to immediately preview this site customized for your practice.
                  </p>

                  {/* Preset Buttons */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={applySampleProfile}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-none bg-white/5 hover:bg-[#00D4FF]/10 border border-white/10 hover:border-[#00D4FF] text-[#00D4FF] text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3" />
                      Apply Sample CS
                    </button>
                    <button
                      onClick={resetConfig}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-none bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-[11px] uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Reset Defaults
                    </button>
                  </div>

                  {/* Form fields */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
                        <Building className="w-3 h-3 text-[#00D4FF]" />
                        COMPANY / FIRM NAME
                      </label>
                      <input
                        type="text"
                        value={config.companyName}
                        onChange={(e) => updateConfig({ companyName: e.target.value })}
                        placeholder="[YOUR COMPANY NAME]"
                        className="w-full px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-white text-xs focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1 uppercase tracking-wider">
                        TAGLINE / BRAND PHRASE
                      </label>
                      <input
                        type="text"
                        value={config.tagline}
                        onChange={(e) => updateConfig({ tagline: e.target.value })}
                        placeholder="Corporate Compliance. Simplified."
                        className="w-full px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-white text-xs focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
                        <Phone className="w-3 h-3 text-[#00D4FF]" />
                        TELEPHONE / MOBILE
                      </label>
                      <input
                        type="text"
                        value={config.phone}
                        onChange={(e) => updateConfig({ phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-white text-xs focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
                        <Mail className="w-3 h-3 text-[#00D4FF]" />
                        OFFICIAL EMAIL
                      </label>
                      <input
                        type="text"
                        value={config.email}
                        onChange={(e) => updateConfig({ email: e.target.value })}
                        placeholder="hello@yourcompany.com"
                        className="w-full px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-white text-xs focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
                        <MapPin className="w-3 h-3 text-[#00D4FF]" />
                        LOCATION / JURISDICTION
                      </label>
                      <input
                        type="text"
                        value={config.location}
                        onChange={(e) => updateConfig({ location: e.target.value })}
                        placeholder="India"
                        className="w-full px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-white text-xs focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1 uppercase tracking-wider">
                        PRACTICING CS CREDENTIAL TAG
                      </label>
                      <input
                        type="text"
                        value={config.regNumber}
                        onChange={(e) => updateConfig({ regNumber: e.target.value })}
                        placeholder="ICSI-PCS-XXXXX"
                        className="w-full px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-white text-xs focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                  <div className="p-3 bg-white/5 rounded-none border border-white/10 text-xs text-slate-300">
                    <span className="font-bold text-[#00D4FF]">LIVE HUD ACTIVE:</span> Changes immediately re-render across the entire compliance dashboard and website.
                  </div>
                  <button
                    onClick={() => setIsCustomizerOpen(false)}
                    className="w-full py-2.5 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                  >
                    <Check className="w-4 h-4" />
                    Save & Close HUD
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
