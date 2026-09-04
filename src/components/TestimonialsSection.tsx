import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/placeholderData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>CLIENT ASSURANCE & GOVERNANCE FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Client Confidence. Proven Corporate Governance.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Read how corporate boards, institutional founders, and multinational enterprises rely on our Company Secretary team for unassailable compliance.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            
            {/* Top Bar of Testimonial Card */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-semibold text-slate-500 ml-2">
                  5.0 / 5.0 Peer Audit Rating
                </span>
              </div>

              <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                {current.highlight}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[140px] flex items-center py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <p className="text-base sm:text-lg text-slate-800 font-normal leading-relaxed italic">
                    "{current.quote}"
                  </p>

                  <div className="pt-2 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#F4F1EA] text-[#0A2540] flex items-center justify-center font-bold text-xs shadow-xs">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {current.name}
                      </h4>
                      <div className="text-xs text-slate-500">
                        {current.designation} • <strong className="text-slate-800 font-semibold">{current.company}</strong>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Footer with Navigation */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-6 bg-[#0A2540]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
