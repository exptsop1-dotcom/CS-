import React from 'react';
import { motion } from 'motion/react';
import { 
  Crosshair, 
  Radar, 
  Award, 
  Eye, 
  Cpu, 
  UserCheck, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const FEATURES = [
  {
    icon: Crosshair,
    title: 'Statutory Precision',
    highlight: 'Zero-tolerance for clerical errors.',
    description: 'Corporate resolutions, register updates, and statutory returns pre-vetted with double-check protocols, ensuring zero clerical rejection on the MCA-21 portal.',
  },
  {
    icon: Radar,
    title: 'Proactive Compliance Advisory',
    highlight: 'Stay ahead of critical regulatory deadlines.',
    description: 'Automated compliance tracking protocols alert your board 45 days ahead of AGMs, director KYC deadlines, and financial statement filings, preventing compounding fines.',
  },
  {
    icon: Award,
    title: 'Peer-Reviewed CS Expertise',
    highlight: 'Senior practicing company secretaries.',
    description: 'Fellow & Associate Practicing Company Secretaries (ICSI) with extensive tribunal (NCLT), compounding, and boardroom governance experience.',
  },
  {
    icon: Eye,
    title: 'Transparent Execution',
    highlight: 'Straightforward processes & clear accountability.',
    description: 'Upfront statutory fee breakdowns, real-time Service Request Number (SRN) tracking, and zero hidden overheads throughout your corporate engagements.',
  },
  {
    icon: Cpu,
    title: 'Modern Digital Infrastructure',
    highlight: 'Technology-enabled governance & security.',
    description: 'Secure cloud document vaults, automated meeting notice sequences, digital register maintenance, and direct integration with business tools.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Partner Engagement',
    highlight: 'Senior counsel tailored to your enterprise.',
    description: 'A designated senior CS partner assigned to every client account ensures responsive, strategic, and confidential board counsel at all times.',
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>THE EXECUTIVE ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why High-Growth Enterprises Trust Us.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            We reject obsolete, paper-bound practices. We engineer modern governance systems that blend legal defensibility with agile corporate momentum.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] text-[#0A2540] flex items-center justify-center group-hover:bg-[#0A2540] group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Standard 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mt-4 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-sky-700 mt-1">
                    {item.highlight}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Statutory Rigor</span>
                  </span>
                  <span className="text-slate-400 text-[11px]">Guaranteed Quality</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
