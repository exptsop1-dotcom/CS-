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
    <section id="journey" className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-sky-700" />
            <span>INTERACTIVE COMPLIANCE PATHWAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Navigate Your Corporate Compliance Lifecycle.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Corporate growth is a continuous statutory progression. Click through each enterprise lifecycle stage to explore critical statutory checkpoints, required MCA e-forms, and our specialized secretarial orchestration.
          </p>
        </div>

        {/* 5-Stage Stage Pathway Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pb-8">
          {JOURNEY_STAGES.map((stage) => {
            const Icon = STAGE_ICONS[stage.icon] || Compass;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-white border-sky-600 shadow-sm ring-1 ring-sky-600/20'
                    : 'bg-[#F8F6F1] border-[#E8E4DA] hover:bg-white hover:border-slate-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeJourneyBar"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#0A2540]"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider font-mono">
                    Phase 0{stage.stageNumber}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#0A2540] text-white' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-sm font-bold text-slate-900 leading-snug">
                    {stage.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">
                    {stage.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden text-left"
          >
            {/* Top Bar with Stage details */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] text-[#0A2540] flex items-center justify-center shrink-0 shadow-xs">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-sky-700 uppercase tracking-wider">
                      Stage 0{activeStage.stageNumber} Protocol
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">{activeStage.subtitle}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => openConsultationWithService(`Compliance Stage ${activeStage.stageNumber}: ${activeStage.title}`)}
                className="btn-primary-navy px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs self-start md:self-auto"
              >
                <span>Consult on Stage 0{activeStage.stageNumber}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-slate-600 text-sm mt-5 leading-relaxed">
              {activeStage.description}
            </p>

            {/* Grid with Milestones & Filings */}
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left 7 cols: Key Statutory Milestones */}
              <div className="lg:col-span-7 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Key Statutory Milestones & Checkpoints
                </h4>

                <div className="space-y-2.5">
                  {activeStage.milestones.map((milestone, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-white text-slate-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5 border border-slate-200">
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
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-sky-700" />
                    Statutory E-Forms & Registrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStage.filingsRequired.map((form) => (
                      <span
                        key={form}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-sky-800 text-xs font-medium shadow-xs"
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company Secretary Role Note */}
                <div className="p-5 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA]">
                  <div className="text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Company Secretary Fiduciary Responsibility</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
