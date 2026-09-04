import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles, CheckCircle2, ChevronRight, FileText, Bookmark } from 'lucide-react';
import { INSIGHTS } from '../data/placeholderData';
import { InsightArticle } from '../types';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle slow-moving background particle & data line canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle faint corporate intelligence flow lines
    const lineNodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < lineNodes.length; i++) {
        const p1 = lineNodes[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        for (let j = i + 1; j < lineNodes.length; j++) {
          const p2 = lineNodes[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(3, 105, 161, ${(1 - dist / 130) * 0.08})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(10, 37, 64, 0.12)';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Professional article images curated for corporate governance
  const ARTICLE_IMAGES = [
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80', // Legal documents & compliance pen
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', // Boardroom corporate advisory meeting
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Corporate enterprise tower architecture
  ];

  return (
    <section id="insights" className="relative py-20 sm:py-24 overflow-hidden bg-[#FAF9F6] border-t border-slate-200/80">
      
      {/* Subtle Slow-Moving Canvas Animation for Corporate Intelligence Theme */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-sky-700" />
              <span>STATUTORY THOUGHT LEADERSHIP & RESEARCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Corporate Intelligence & Regulatory Insights
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Curated statutory analyses, MCA notifications, and corporate secretarial governance playbooks authored by our practicing CS partners.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Updated with FY 2025-26 Regulatory Amendments</span>
          </div>
        </div>

        {/* 3 Featured Article Cards Grid with Subtle Interactive Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((article, idx) => {
            const articleImage = ARTICLE_IMAGES[idx % ARTICLE_IMAGES.length];

            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div>
                  {/* High Quality Professional Business Visual */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={articleImage} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Animated Category Chip on Hover */}
                    <div className="absolute bottom-3 left-4">
                      <motion.span 
                        className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/95 text-slate-800 shadow-xs group-hover:bg-[#0A2540] group-hover:text-white transition-colors duration-200"
                        whileHover={{ y: -1 }}
                      >
                        {article.category}
                      </motion.span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    {/* Date & Read Time */}
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                      <span>{article.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Animated Title on Hover */}
                    <h3 className="text-base font-bold text-slate-900 mt-3 group-hover:text-[#0369A1] transition-colors duration-200 leading-snug">
                      <motion.span 
                        className="inline-block"
                        whileHover={{ x: 2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {article.title}
                      </motion.span>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {article.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer with Animated Arrow Icon */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-[#0369A1] transition-colors">
                    <span>Read Advisory Briefing</span>
                    <motion.div
                      className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-sky-50 flex items-center justify-center transition-colors"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 15 }}
                className="relative w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-xl z-10 my-8 overflow-hidden border border-slate-200"
              >
                <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                  <div className="space-y-1 pr-6">
                    <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
                      {selectedArticle.category} • {selectedArticle.date}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {selectedArticle.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedArticle.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA] text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{selectedArticle.contentSnippet}"
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      Key Takeaways for Directors & Promoters:
                    </h4>
                    <div className="space-y-2">
                      {selectedArticle.keyTakeaways.map((takeaway, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Need tailored advisory on this matter?
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="btn-primary-navy px-5 py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    Close Briefing
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
