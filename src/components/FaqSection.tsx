import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/placeholderData';
import { useCustomizer } from '../context/CustomizerContext';

export const FaqSection: React.FC = () => {
  const { setIsConsultationOpen } = useCustomizer();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-sky-700" />
            <span>STATUTORY & PRACTICE CLARITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Everything corporate promoters, directors, and executives need to know about engaging our Company Secretary practice.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-slate-300 shadow-sm'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-sky-700">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1 rounded-lg border transition-transform ${
                    isOpen
                      ? 'bg-[#0A2540] border-[#0A2540] text-white rotate-180'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                        <div className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider mb-1.5">
                          Practice Advisory • {faq.category}
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Have a specific corporate secretarial inquiry?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our practicing CS partners are available for confidential consultations.
            </p>
          </div>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="btn-primary-navy px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>Ask a Company Secretary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
