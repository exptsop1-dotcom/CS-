import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/placeholderData';
import { useCustomizer } from '../context/CustomizerContext';

export const FaqSection: React.FC = () => {
  const { setIsConsultationOpen } = useCustomizer();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[#020408]/90 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>STATUTORY & PRACTICE CLARITY // FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Questions, Answered.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
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
                className={`rounded-none border transition-all duration-200 overflow-hidden font-mono ${
                  isOpen
                    ? 'bg-white/10 border-white/20 border-l-2 border-l-[#00D4FF] shadow-lg'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#00D4FF]">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1 rounded-none border transition-transform ${
                    isOpen
                      ? 'bg-[#00D4FF] border-[#00D4FF] text-black rotate-180'
                      : 'bg-white/5 border-white/10 text-slate-400'
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
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 mt-1 font-sans">
                        <div className="text-[9px] font-mono text-[#00D4FF] uppercase tracking-widest mb-2 font-bold">
                          PRACTICE ADVISORY // {faq.category.toUpperCase()}
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

        {/* Bottom prompt */}
        <div className="mt-12 p-6 rounded-none bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-mono">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
              Have a specific corporate secretarial inquiry?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5 font-sans">
              Our partners are available for confidential consultations.
            </p>
          </div>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="px-5 py-2 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all cursor-pointer"
          >
            <span>Ask a Company Secretary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
