import React from 'react';
import { motion } from 'motion/react';
import { 
  Crosshair, 
  Radar, 
  Award, 
  Eye, 
  Cpu, 
  UserCheck, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const FEATURES = [
  {
    icon: Crosshair,
    title: 'Precision',
    highlight: 'Every detail matters.',
    description: 'Corporate resolutions and statutory forms pre-vetted with double-check protocols, ensuring zero clerical rejection on the MCA-21 portal.',
    accent: 'cyan'
  },
  {
    icon: Radar,
    title: 'Proactive Compliance',
    highlight: 'Stay ahead of important deadlines.',
    description: 'Automated statutory tracking models alert your board 45 days ahead of AGMs, KYC deadlines, and balance sheet filings, preventing late fees.',
    accent: 'indigo'
  },
  {
    icon: Award,
    title: 'Expertise',
    highlight: 'Professional knowledge & practical guidance.',
    description: 'Fellow & Associate Practicing Company Secretaries with extensive courtroom, board advisory, and compounding track records.',
    accent: 'sky'
  },
  {
    icon: Eye,
    title: 'Transparency',
    highlight: 'Clear communication & straightforward processes.',
    description: 'Upfront statutory fee breakdowns, real-time SRN tracking, and zero hidden overheads throughout your corporate lifecycle.',
    accent: 'emerald'
  },
  {
    icon: Cpu,
    title: 'Technology-Driven',
    highlight: 'Modern tools for a smoother experience.',
    description: 'Cloud document vaults, automated meeting reminder sequences, digital register maintenance, and live status dashboards.',
    accent: 'violet'
  },
  {
    icon: UserCheck,
    title: 'Client-Focused',
    highlight: 'Solutions tailored to business requirements.',
    description: 'Dedicated senior CS partner assigned to every corporate account for responsive, strategic, and confidential counsel.',
    accent: 'blue'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE APEX ADVANTAGE // CORE CRITERIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Why Modern Businesses Choose Us.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            We reject obsolete, paper-bound practices. We engineer modern governance systems that blend legal defensibility with agile corporate momentum.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-6 rounded-none bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 border-l-2 border-l-[#00D4FF] backdrop-blur-sm transition-all duration-200 hover:bg-white/10 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:border-[#00D4FF]/50 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">
                      ADV_0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-mono uppercase tracking-wide text-white mt-4 group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-[11px] font-semibold text-[#00D4FF] font-mono mt-1 uppercase tracking-wider">
                    {item.highlight}
                  </div>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00D4FF]" />
                    <span>SYS.STANDARD</span>
                  </span>
                  <span className="text-emerald-400">OPERATIONAL</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
