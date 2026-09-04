import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { INSIGHTS } from '../data/placeholderData';
import { InsightArticle } from '../types';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 font-mono">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>REGULATORY THOUGHT LEADERSHIP // REPO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
              Corporate Intelligence.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Curated legal analyses, MCA notification updates, and secretarial governance playbooks authored by our practicing CS partners.
            </p>
          </div>

          <div className="text-[10px] font-mono text-[#00D4FF] flex items-center gap-2 uppercase tracking-widest">
            <span>PUBLIC STATUTORY REPOSITORY</span>
          </div>
        </div>

        {/* 3 Featured Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
          {INSIGHTS.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="group p-6 rounded-none bg-white/5 border border-white/10 border-t-2 border-t-[#00D4FF] hover:border-[#00D4FF]/60 backdrop-blur-sm flex flex-col justify-between transition-all duration-200 hover:bg-white/10 shadow-md"
            >
              <div>
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-3 border-b border-white/10">
                  <span className="px-2 py-0.5 rounded-none bg-white/10 text-[#00D4FF] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono mt-3 uppercase tracking-wider">
                  {article.date}
                </div>

                <h3 className="text-base font-bold text-white uppercase tracking-wide mt-2 group-hover:text-[#00D4FF] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                  {article.subtitle}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-2 px-3 rounded-none bg-white/5 group-hover:bg-[#00D4FF] text-xs font-bold text-slate-200 group-hover:text-black border border-white/10 group-hover:border-[#00D4FF] flex items-center justify-between transition-all cursor-pointer uppercase tracking-wider"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-mono">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                className="relative w-full max-w-2xl bg-[#020408] border border-white/10 rounded-none p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
              >
                <div className="flex items-start justify-between pb-4 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#00D4FF] uppercase font-bold tracking-widest">
                      {selectedArticle.category} • {selectedArticle.date}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                      {selectedArticle.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-none border border-white/10 hover:border-white/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {selectedArticle.summary}
                  </p>

                  <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF] text-xs text-slate-300 leading-relaxed italic font-sans">
                    "{selectedArticle.contentSnippet}"
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono text-[#00D4FF] font-bold uppercase tracking-widest mb-2">
                      Key Takeaways for Directors & Promoters:
                    </h4>
                    <div className="space-y-2 font-sans">
                      {selectedArticle.keyTakeaways.map((takeaway, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] mt-0.5 shrink-0" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-sans">
                    Need tailored advisory on this matter?
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
