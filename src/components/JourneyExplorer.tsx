import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  FileCode2, 
  ArrowRight,
  Compass,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { JOURNEY_STAGES } from '../data/placeholderData';
import { useCustomizer } from '../context/CustomizerContext';

const STAGE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Layers,
  ShieldCheck,
  TrendingUp,
  Building2
};

export const JourneyExplorer: React.FC = () => {
  const { openConsultationWithService } = useCustomizer();
  const [activeStageId, setActiveStageId] = useState<string>('stage-1');

  const activeStage = JOURNEY_STAGES.find(s => s.id === activeStageId) || JOURNEY_STAGES[0];
  const ActiveIcon = STAGE_ICONS[activeStage.icon] || Compass;

  return (
    <section id="journey" className="relative py-20 sm:py-28 border-t border-white/10 bg-[#020408]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMPLIANCE PATHWAY // HUD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Navigate Your Compliance Journey.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Corporate growth is a continuous statutory progression. Click through each lifecycle node to explore critical regulatory milestones, MCA e-forms, and our specialized secretarial orchestration.
          </p>
        </div>

        {/* 5-Stage Futuristic Stage Pathway Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-8">
          {JOURNEY_STAGES.map((stage) => {
            const Icon = STAGE_ICONS[stage.icon] || Compass;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative p-4 rounded-none border text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-white/10 border-[#00D4FF] border-t-2 shadow-[0_0_15px_rgba(0,212,255,0.15)]'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeJourneyBar"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#00D4FF]"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00D4FF] uppercase tracking-wider">
                    PHASE 0{stage.stageNumber}
                  </span>
                  <div className={`w-7 h-7 rounded-none border flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#00D4FF] text-black border-[#00D4FF]' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wide text-white">
                    {stage.title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5 truncate uppercase">
                    {stage.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Command Center Telemetry Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-8 rounded-none bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden font-mono"
          >
            {/* Top Bar with Stage details */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] flex items-center justify-center shrink-0">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#00D4FF] font-bold tracking-widest uppercase">
                      PROTOCOL // STAGE 0{activeStage.stageNumber}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[10px] uppercase text-slate-400">{activeStage.subtitle}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mt-0.5">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => openConsultationWithService(`Journey Stage ${activeStage.stageNumber}: ${activeStage.title}`)}
                className="px-4 py-2 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_0_10px_rgba(0,212,255,0.3)] cursor-pointer self-start md:self-auto"
              >
                <span>Engage Stage 0{activeStage.stageNumber}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm mt-5 leading-relaxed font-sans">
              {activeStage.description}
            </p>

            {/* Grid with Milestones & Filings */}
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left 7 cols: Key Statutory Milestones */}
              <div className="lg:col-span-7 space-y-3">
                <h4 className="text-[11px] text-[#00D4FF] uppercase font-bold tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                  Key Statutory Milestones & Checkpoints
                </h4>

                <div className="space-y-2">
                  {activeStage.milestones.map((milestone, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-none bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-slate-300 font-sans"
                    >
                      <div className="w-5 h-5 rounded-none bg-white/5 text-[#00D4FF] font-mono font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5 border border-white/10">
                        {i + 1}
                      </div>
                      <span className="leading-relaxed">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 5 cols: Filings & Role */}
              <div className="lg:col-span-5 space-y-4">
                {/* Filings Required */}
                <div className="p-4 rounded-none bg-white/5 border border-white/10">
                  <h4 className="text-[10px] text-slate-300 uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                    Statutory E-Forms & Registrations
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStage.filingsRequired.map((form) => (
                      <span
                        key={form}
                        className="px-2 py-1 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono font-medium"
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company Secretary Role Note */}
                <div className="p-4 rounded-none bg-white/5 border border-[#00D4FF]/20 border-l-2 border-l-[#00D4FF]">
                  <div className="flex items-center gap-2 text-[10px] text-[#00D4FF] font-bold mb-1 uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    CS Fiduciary Role
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {activeStage.csRole}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
