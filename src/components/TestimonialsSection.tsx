import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/placeholderData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXECUTIVE ENDORSEMENTS // AUDIT FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Client Confidence. Proven Governance.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Read how corporate boards, institutional founders, and multinational enterprises rely on our Company Secretary team for unassailable compliance.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-7 sm:p-10 rounded-none bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden font-mono">
            
            {/* Top Bar of Testimonial Card */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <span className="text-[10px] font-mono text-slate-400 ml-2 uppercase tracking-wider">
                  5.0 / 5.0 VERIFIED AUDIT
                </span>
              </div>

              <div className="px-3 py-1 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] text-[10px] font-mono font-bold uppercase tracking-wider">
                {current.highlight}
              </div>
            </div>

            {/* Testimonial Quote with Animation */}
            <div className="min-h-[160px] flex items-center py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed italic font-sans">
                    "{current.quote}"
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-none bg-white/5 border border-[#00D4FF]/40 p-0.5 flex items-center justify-center font-bold text-[#00D4FF] font-mono text-xs">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide">
                        {current.name}
                      </h4>
                      <div className="text-xs text-slate-400 font-sans">
                        {current.designation} • <span className="text-[#00D4FF] font-medium">{current.company}</span>
                      </div>
                      <div className="text-[9px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">
                        INDUSTRY: {current.industry.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Footer with Navigation */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 rounded-none transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-6 bg-[#00D4FF]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-none bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-[#00D4FF] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-none bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-[#00D4FF] transition-colors cursor-pointer"
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
