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
    <section id="services" className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
              <span>PRACTICE AREAS & STATUTORY CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our Expertise. Your Corporate Advantage.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Institutional-grade secretarial practices engineered to simplify corporate law, satisfy statutory regulators, and safeguard your enterprise.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/70 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Executive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[service.id] || ShieldCheck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 text-left"
              >
                <div>
                  {/* Card Top: Number & Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-sm font-bold text-sky-700 font-mono">
                      {service.number}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 w-10 h-10 rounded-xl bg-[#F4F1EA] text-[#0A2540] flex items-center justify-center group-hover:bg-[#0A2540] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Service Name & Description */}
                  <h3 className="text-base font-bold text-slate-900 mt-4 group-hover:text-[#0369A1] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Statutory Form Tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {service.forms.slice(0, 2).map((form) => (
                      <span
                        key={form}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-600 font-medium"
                      >
                        {form}
                      </span>
                    ))}
                    {service.forms.length > 2 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-400">
                        +{service.forms.length - 2} forms
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions: View Deliverables & Enquire Now */}
                <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer"
                    >
                      <span>Deliverables</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => openConsultationWithService(service.name)}
                      className="flex-1 py-2 px-3 rounded-lg btn-primary-navy text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer shadow-xs"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deliverables Details Modal Dialog */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                className="relative w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-xl z-10 my-8 overflow-hidden border border-slate-200 text-left"
              >
                <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-sky-700 font-mono">
                      {selectedService.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {selectedService.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <span>Category: {selectedService.category}</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-medium">Turnaround: {selectedService.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedService.fullDescription}
                  </p>

                  {/* Statutory Deliverables */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-sky-700" />
                      Statutory Deliverables & Official Records
                    </h4>
                    <div className="space-y-1.5">
                      {selectedService.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applicable MCA E-Forms */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileCode className="w-4 h-4 text-sky-700" />
                      Applicable Statutory Forms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.forms.map((form) => (
                        <span
                          key={form}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200"
                        >
                          {form}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Strategic Benefits */}
                  <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA]">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Governance & Practice Advantages:
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1 list-disc list-inside">
                      {selectedService.keyBenefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA in Modal */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-sky-700" />
                    <span>Statutory SLA: {selectedService.timeline}</span>
                  </div>

                  <button
                    onClick={() => {
                      const sName = selectedService.name;
                      setSelectedService(null);
                      openConsultationWithService(sName);
                    }}
                    className="w-full sm:w-auto btn-primary-navy px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Enquire About {selectedService.name}</span>
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
