import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  CalendarCheck, 
  ShieldCheck, 
  FileSpreadsheet, 
  Users, 
  FileCheck2, 
  Shuffle, 
  Scale, 
  ChevronRight, 
  X, 
  Check, 
  Clock, 
  FileCode,
  ArrowRight
} from 'lucide-react';
import { INITIAL_SERVICES } from '../data/placeholderData';
import { ServiceItem } from '../types';
import { useCustomizer } from '../context/CustomizerContext';

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  incorporation: Building,
  'annual-compliance': CalendarCheck,
  'corporate-governance': ShieldCheck,
  'roc-mca-filings': FileSpreadsheet,
  'board-general-meetings': Users,
  'secretarial-audit': FileCheck2,
  'business-restructuring': Shuffle,
  'legal-regulatory-advisory': Scale
};

export const ServicesSection: React.FC = () => {
  const { openConsultationWithService } = useCustomizer();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Formation', 'Compliance', 'Governance', 'Audits', 'Advisory'];

  const filteredServices = activeCategory === 'All'
    ? INITIAL_SERVICES
    : INITIAL_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
              <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-none" />
              <span>STATUTORY COMPLIANCE SUITE // REPO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
              Our Expertise. Your Advantage.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Institutional-grade secretarial practices engineered to simplify corporate law, satisfy statutory regulators, and safeguard your enterprise.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-none bg-white/5 border border-white/10 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-none transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00D4FF] text-black font-black shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Technical Dashboard Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[service.id] || ShieldCheck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-none bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 border-t-2 border-t-[#00D4FF] p-5 flex flex-col justify-between backdrop-blur-sm transition-all duration-200 hover:bg-white/10 shadow-md"
              >
                <div>
                  {/* Card Top: Number & Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-lg font-black font-mono text-[#00D4FF] tracking-wider">
                      {service.number}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-none bg-white/5 text-slate-400 border border-white/10 uppercase tracking-widest">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:border-[#00D4FF]/50 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Service Name & Description */}
                  <h3 className="text-base font-bold font-mono uppercase tracking-wide text-white mt-4 group-hover:text-[#00D4FF] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                    {service.shortDescription}
                  </p>

                  {/* Statutory Form Tags */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1 font-mono">
                    {service.forms.slice(0, 2).map((form) => (
                      <span
                        key={form}
                        className="text-[9px] px-1.5 py-0.5 rounded-none bg-white/5 border border-white/10 text-slate-300"
                      >
                        {form}
                      </span>
                    ))}
                    {service.forms.length > 2 && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-none bg-white/5 border border-white/10 text-slate-500">
                        +{service.forms.length - 2} forms
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action: Learn More */}
                <div className="mt-5 pt-3 border-t border-white/10">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2 px-3 rounded-none bg-white/5 hover:bg-[#00D4FF] text-slate-300 hover:text-black text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10 hover:border-[#00D4FF] flex items-center justify-between transition-all cursor-pointer"
                  >
                    <span>View Deliverables</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learn More Modal Dialog */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                className="relative w-full max-w-2xl bg-[#020408] border border-[#00D4FF]/40 rounded-none p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden font-mono"
              >
                <div className="flex items-start justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-[#00D4FF]">
                      {selectedService.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-white uppercase tracking-wide">
                        {selectedService.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">
                        <span>CATEGORY: {selectedService.category}</span>
                        <span>•</span>
                        <span className="text-[#00D4FF]">TURNAROUND: {selectedService.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-none border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {selectedService.fullDescription}
                  </p>

                  {/* Statutory Deliverables */}
                  <div>
                    <h4 className="text-[11px] text-[#00D4FF] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                      Statutory Deliverables & Records
                    </h4>
                    <div className="space-y-1.5">
                      {selectedService.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-[#00D4FF] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applicable MCA E-Forms */}
                  <div>
                    <h4 className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                      Applicable Statutory Forms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.forms.map((form) => (
                        <span
                          key={form}
                          className="px-2.5 py-1 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono"
                        >
                          {form}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Strategic Benefits */}
                  <div className="p-4 rounded-none bg-white/5 border border-white/10">
                    <h4 className="text-[11px] text-slate-300 font-bold uppercase tracking-wider mb-2">
                      Strategic Practice Advantages:
                    </h4>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside font-sans">
                      {selectedService.keyBenefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA in Modal */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>TIMELINE: {selectedService.timeline}</span>
                  </div>

                  <button
                    onClick={() => {
                      const sName = selectedService.name;
                      setSelectedService(null);
                      openConsultationWithService(sName);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,212,255,0.3)] cursor-pointer"
                  >
                    <span>Inquire About {selectedService.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
