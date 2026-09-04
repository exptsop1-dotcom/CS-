import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Building2, Award, HeartHandshake, FileCheck, Shield, Sparkles } from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const STATS: StatItem[] = [
  {
    id: 'companies',
    target: 500,
    suffix: '+',
    label: 'Companies Supported',
    sublabel: 'Pvt Ltd, LLPs, Section 8 & Multinationals',
    icon: Building2,
    accent: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'years',
    target: 10,
    suffix: '+',
    label: 'Years of Expertise',
    sublabel: 'Senior Practicing Company Secretaries',
    icon: Award,
    accent: 'from-indigo-500/20 to-purple-500/10'
  },
  {
    id: 'satisfaction',
    target: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    sublabel: 'Retained Corporate Governance Clients',
    icon: HeartHandshake,
    accent: 'from-sky-500/20 to-cyan-500/10'
  },
  {
    id: 'filings',
    target: 1000,
    suffix: '+',
    label: 'Compliance Filings',
    sublabel: 'Zero-Rejection First-Pass Clearance',
    icon: FileCheck,
    accent: 'from-cyan-500/20 to-emerald-500/10'
  }
];

const AnimatedCounter: React.FC<{ target: number; suffix: string; inView: boolean }> = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="relative py-12 border-y border-white/10 bg-[#020408]/90 backdrop-blur-md">
      {/* Technical Data Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top telemetry tag */}
        <div className="flex items-center justify-between pb-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00D4FF] rounded-none shadow-[0_0_8px_#00D4FF]" />
            <span className="text-white font-bold tracking-[0.2em] text-[10px] uppercase">
              STATUTORY BENCHMARK // TELEMETRY
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-widest opacity-50 font-mono hidden sm:inline">
            MCA-21 VERIFIED DATA REPOSITORY
          </span>
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-5 rounded-none bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 border-l-2 border-l-[#00D4FF] transition-all duration-200 backdrop-blur-sm shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:border-[#00D4FF]/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest group-hover:text-[#00D4FF] transition-colors">
                    SYS.METRIC_0{idx + 1}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <div className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <div className="text-xs uppercase tracking-widest font-mono font-bold text-slate-200 pt-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-snug">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Bottom technical hairline indicator */}
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-400 opacity-60">
                  <span>CONFIRMATION: 100%</span>
                  <span className="text-emerald-400">● VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
