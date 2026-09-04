import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GitBranch, 
  MessageSquare, 
  Search, 
  Lightbulb, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/placeholderData';
import { useCustomizer } from '../context/CustomizerContext';

const STEP_ICONS = [MessageSquare, Search, Lightbulb, CheckCircle, ShieldCheck];

export const ProcessTimeline: React.FC = () => {
  const { setIsConsultationOpen } = useCustomizer();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[#020408]/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <GitBranch className="w-3.5 h-3.5" />
            <span>OPERATIONAL METHODOLOGY // SEQUENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Simple Process. Serious Expertise.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            From initial intake to continuous statutory radar, our 5-phase execution model guarantees complete compliance transparency and boardroom confidence.
          </p>
        </div>

        {/* Horizontal Stepper Navigation */}
        <div className="relative pb-10">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-white/10 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-[#00D4FF] transition-all duration-300"
              style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx] || ShieldCheck;
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-none border text-left transition-all duration-200 backdrop-blur-sm cursor-pointer ${
                    isActive
                      ? 'bg-white/10 border-[#00D4FF] border-t-2 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                      : isPast
                      ? 'bg-white/5 border-white/20 text-slate-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isActive ? 'text-[#00D4FF]' : isPast ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      PHASE 0{step.stepNumber}
                    </span>
                    <div className={`w-6 h-6 rounded-none border flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#00D4FF] text-black border-[#00D4FF]' : 'bg-white/5 border-white/10 text-slate-400'
                    }`}>
                      <Icon className="w-3 h-3" />
                    </div>
                  </div>

                  <h3 className="text-xs font-mono font-bold uppercase tracking-wide text-white mt-3">
                    {step.title}
                  </h3>
                  <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5 uppercase">
                    {step.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed View Card */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 rounded-none bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden font-mono"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#00D4FF] uppercase tracking-wider">
                <span>PHASE #0{PROCESS_STEPS[activeStepIndex].stepNumber}</span>
                <span>•</span>
                <span className="text-slate-400">ESTIMATED TIMELINE: {PROCESS_STEPS[activeStepIndex].turnaround}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                {PROCESS_STEPS[activeStepIndex].title} — {PROCESS_STEPS[activeStepIndex].subtitle}
              </h4>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#00D4FF] hover:text-[#00E5FF] transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>Initiate Phase 0{PROCESS_STEPS[activeStepIndex].stepNumber} Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Deliverables in this Step */}
            <div className="lg:col-span-5 p-5 rounded-none bg-white/5 border border-white/10 space-y-3">
              <div className="text-[10px] font-mono text-[#00D4FF] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" />
                Key Deliverables & Documentation
              </div>

              <div className="space-y-2">
                {PROCESS_STEPS[activeStepIndex].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-none bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2.5 font-sans"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00D4FF] rounded-none shadow-[0_0_6px_#00D4FF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
