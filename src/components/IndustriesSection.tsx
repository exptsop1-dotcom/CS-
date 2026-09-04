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
  ShieldCheck, 
  ChevronRight,
  Sparkles
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
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <Network className="w-3.5 h-3.5" />
            <span>CROSS-SECTOR STATUTORY EXPERTISE // MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Supporting Businesses Across Industries.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Every sector faces distinct statutory challenges—from RBI guidelines for fintechs to FDI reporting for SaaS and SEBI Secretarial Standards for growth enterprises.
          </p>
        </div>

        {/* Connected Network Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 9 Interactive Industry Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {INDUSTRIES_SERVED.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.id] || Building;
              const isSelected = selectedIndustry.id === ind.id;

              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`p-4 rounded-none border text-left transition-all duration-200 backdrop-blur-sm relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-[#00D4FF] border-l-2 border-l-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.15)]'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#00D4FF] text-black border-[#00D4FF]'
                        : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 group-hover:text-[#00D4FF] uppercase tracking-wider">
                      NODE
                    </span>
                  </div>

                  <h3 className="text-xs font-mono font-bold uppercase tracking-wide text-white mt-3 group-hover:text-[#00D4FF] transition-colors">
                    {ind.name}
                  </h3>
                  <div className="text-[9px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                    {ind.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Industry Deep-Dive Telemetry Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-none bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden font-mono"
              >
                {/* Scanline */}
                <div className="scanline-effect" />

                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] flex items-center justify-center">
                      {React.createElement(INDUSTRY_ICONS[selectedIndustry.id] || Building, { className: 'w-4 h-4' })}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-[#00D4FF] uppercase font-bold tracking-widest block">
                        SECTOR BLUEPRINT
                      </span>
                      <h3 className="text-base font-bold text-white uppercase tracking-wide">
                        {selectedIndustry.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-xs mt-3.5 leading-relaxed font-sans">
                  {selectedIndustry.description}
                </p>

                {/* Specific Compliance Focus */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-[10px] font-mono text-[#00D4FF] font-bold uppercase tracking-widest">
                    Critical Compliance Protocols:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedIndustry.complianceFocus.map((focus, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-none bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2 font-sans"
                      >
                        <span className="w-1.5 h-1.5 bg-[#00D4FF] rounded-none shrink-0" />
                        <span className="truncate">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statutory Regulatory Sphere */}
                <div className="mt-4 p-3 rounded-none bg-white/5 border border-white/10 text-xs font-mono space-y-0.5">
                  <div className="text-slate-400 text-[9px] uppercase tracking-wider">STATUTORY FRAMEWORK</div>
                  <div className="text-[#00D4FF] font-bold text-xs">{selectedIndustry.keyRegulations}</div>
                </div>

                {/* Risk Mitigation */}
                <div className="mt-3 p-3 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF] text-xs space-y-1">
                  <div className="text-[#00D4FF] font-mono text-[9px] uppercase font-bold flex items-center gap-1.5 tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    RISK INSULATION
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
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
