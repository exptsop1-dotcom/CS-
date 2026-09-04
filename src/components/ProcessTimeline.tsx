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
    <section className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <GitBranch className="w-3.5 h-3.5 text-sky-700" />
            <span>STRUCTURED PRACTICE METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Simple Process. Rigorous Statutory Oversight.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            From initial intake to continuous statutory radar, our 5-phase execution model guarantees complete compliance transparency and boardroom confidence.
          </p>
        </div>

        {/* Horizontal Stepper Navigation */}
        <div className="relative pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx] || ShieldCheck;
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-sky-600 shadow-sm ring-1 ring-sky-600/20'
                      : isPast
                      ? 'bg-[#F8F6F1] border-[#E8E4DA] text-slate-700'
                      : 'bg-[#F8F6F1] border-[#E8E4DA] text-slate-500 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider font-mono ${
                      isActive ? 'text-sky-700' : 'text-slate-500'
                    }`}>
                      Phase 0{step.stepNumber}
                    </span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#0A2540] text-white' : 'bg-white border border-slate-200 text-slate-500'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mt-3 leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-xs text-slate-500 truncate mt-0.5">
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden text-left"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
                <span>Phase #0{PROCESS_STEPS[activeStepIndex].stepNumber}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">Timeline: {PROCESS_STEPS[activeStepIndex].turnaround}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                {PROCESS_STEPS[activeStepIndex].title} — {PROCESS_STEPS[activeStepIndex].subtitle}
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="btn-primary-navy px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Initiate Phase 0{PROCESS_STEPS[activeStepIndex].stepNumber} Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Deliverables in this Step */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                Key Deliverables & Documentation
              </div>

              <div className="space-y-2">
                {PROCESS_STEPS[activeStepIndex].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2.5 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
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
