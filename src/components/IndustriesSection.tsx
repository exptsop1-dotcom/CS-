import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Laptop, 
  Factory, 
  ShoppingCart, 
  Landmark, 
  Activity, 
  Building, 
  Briefcase, 
  TrendingUp, 
  Network, 
  ShieldCheck 
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/placeholderData';
import { IndustryItem } from '../types';

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  startups: Rocket,
  tech: Laptop,
  manufacturing: Factory,
  ecommerce: ShoppingCart,
  fintech: Landmark,
  healthcare: Activity,
  'real-estate': Building,
  'professional-services': Briefcase,
  enterprises: TrendingUp
};

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_SERVED[0]);

  return (
    <section className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <Network className="w-3.5 h-3.5 text-sky-700" />
            <span>CROSS-SECTOR STATUTORY JURISDICTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Tailored Governance for High-Growth Sectors.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Every sector faces distinct statutory challenges—from RBI guidelines for fintechs to FDI reporting for SaaS and SEBI Secretarial Standards for growth enterprises.
          </p>
        </div>

        {/* Connected Grid: Left 9 Nodes + Right Deep-Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 9 Interactive Industry Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {INDUSTRIES_SERVED.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.id] || Building;
              const isSelected = selectedIndustry.id === ind.id;

              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-sky-600 shadow-sm ring-1 ring-sky-600/20'
                      : 'bg-[#F8F6F1] border-[#E8E4DA] hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#0A2540] text-white'
                        : 'bg-white border border-slate-200 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                      Sector
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mt-3">
                    {ind.name}
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {ind.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Industry Deep-Dive Panel */}
          <div className="lg:col-span-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] text-[#0A2540] flex items-center justify-center shadow-xs">
                      {React.createElement(INDUSTRY_ICONS[selectedIndustry.id] || Building, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
                        Sector Focus
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {selectedIndustry.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm mt-3.5 leading-relaxed">
                  {selectedIndustry.description}
                </p>

                {/* Specific Compliance Focus */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Statutory Compliance Priorities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedIndustry.complianceFocus.map((focus, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-sky-700 rounded-full shrink-0" />
                        <span className="truncate">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statutory Regulatory Sphere */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">Key Statutory Framework</div>
                  <div className="text-slate-900 font-bold text-xs">{selectedIndustry.keyRegulations}</div>
                </div>

                {/* Risk Mitigation */}
                <div className="mt-3 p-3.5 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA] text-xs space-y-1">
                  <div className="text-slate-900 text-xs font-bold flex items-center gap-1.5 tracking-wider uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
                    Board Risk Insulation
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {selectedIndustry.riskMitigation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
