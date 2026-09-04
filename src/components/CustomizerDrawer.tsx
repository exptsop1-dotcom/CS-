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
      accentColor: 'blue'
    });
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setIsCustomizerOpen(!isCustomizerOpen)}
          className="group flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 shadow-md text-xs font-semibold transition-all cursor-pointer rounded-full"
          title="Customize Prototype Placeholders"
        >
          <Settings className="w-4 h-4 text-sky-700 group-hover:rotate-45 transition-transform" />
          <span>Edit Brand Details</span>
        </button>
      </div>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isCustomizerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden text-left">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCustomizerOpen(false)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            />

            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.25 }}
                className="w-screen max-w-md bg-white border-r border-slate-200 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-sky-700" />
                      <h3 className="font-bold text-slate-900 text-base">Prototype Brand Settings</h3>
                    </div>
                    <button
                      onClick={() => setIsCustomizerOpen(false)}
                      className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg border border-slate-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    Test live modifications to the template. Change your firm name, phone number, and location to immediately preview this site customized for your practice.
                  </p>

                  {/* Preset Buttons */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={applySampleProfile}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-sky-700" />
                      Sample Firm Data
                    </button>
                    <button
                      onClick={resetConfig}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Reset Defaults
                    </button>
                  </div>

                  {/* Form fields */}
                  <div className="mt-5 space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-sky-700" />
                        Company / Firm Name
                      </label>
                      <input
                        type="text"
                        value={config.companyName}
                        onChange={(e) => updateConfig({ companyName: e.target.value })}
                        placeholder="[YOUR COMPANY NAME]"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-sky-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Tagline / Brand Value Proposition
                      </label>
                      <input
                        type="text"
                        value={config.tagline}
                        onChange={(e) => updateConfig({ tagline: e.target.value })}
                        placeholder="Corporate Compliance. Simplified."
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-sky-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-sky-700" />
                        Telephone / WhatsApp
                      </label>
                      <input
                        type="text"
                        value={config.phone}
                        onChange={(e) => updateConfig({ phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-sky-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-sky-700" />
                        Official Email
                      </label>
                      <input
                        type="text"
                        value={config.email}
                        onChange={(e) => updateConfig({ email: e.target.value })}
                        placeholder="hello@yourcompany.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-sky-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-700" />
                        Head Office Location
                      </label>
                      <input
                        type="text"
                        value={config.location || `${config.city}, ${config.state}`}
                        onChange={(e) => updateConfig({ location: e.target.value })}
                        placeholder="Belgaum, Karnataka"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-sky-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Practicing CS Credential Tag
                      </label>
                      <input
                        type="text"
                        value={config.regNumber}
                        onChange={(e) => updateConfig({ regNumber: e.target.value })}
                        placeholder="ICSI-PCS-XXXXX"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-sky-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900">Live Preview:</strong> Modifications instantly re-render across the entire website and intake forms.
                  </div>
                  <button
                    onClick={() => setIsCustomizerOpen(false)}
                    className="w-full py-2.5 rounded-xl btn-primary-navy text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Check className="w-4 h-4" />
                    Save & Close
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
