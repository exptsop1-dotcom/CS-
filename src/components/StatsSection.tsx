import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Building2, Award, HeartHandshake, FileCheck, ShieldCheck } from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STATS: StatItem[] = [
  {
    id: 'companies',
    target: 500,
    suffix: '+',
    label: 'Companies Supported',
    sublabel: 'Pvt Ltd, LLPs, Section 8 & Multinationals',
    icon: Building2,
  },
  {
    id: 'years',
    target: 10,
    suffix: '+',
    label: 'Years of Practice',
    sublabel: 'Advising Corporates Since 2014',
    icon: Award,
  },
  {
    id: 'satisfaction',
    target: 98,
    suffix: '%',
    label: 'Client Retention Rate',
    sublabel: 'Ongoing Corporate Governance Mandates',
    icon: HeartHandshake,
  },
  {
    id: 'filings',
    target: 1000,
    suffix: '+',
    label: 'Statutory Filings Completed',
    sublabel: '100% First-Pass Regulatory Clearance',
    icon: FileCheck,
  }
];

const AnimatedCounter: React.FC<{ target: number; suffix: string; inView: boolean }> = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1600;
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
    <section ref={containerRef} className="relative py-12 bg-white/70 border-y border-slate-200/80 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Tag */}
        <div className="flex items-center justify-between pb-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-slate-800 font-semibold uppercase tracking-wider text-[11px]">
              INSTITUTIONAL TRUST & PROVEN STATUTORY TRACK RECORD
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            MCA-21 & ROC Peer-Reviewed Practice
          </span>
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 rounded-2xl bg-[#F8F6F1] border border-[#E8E4DA] hover:border-slate-300 transition-all duration-200 shadow-xs"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0A2540] flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Metric 0{idx + 1}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider pt-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
