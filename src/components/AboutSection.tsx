import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Scale, 
  FileSpreadsheet, 
  Network, 
  Layers, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  BookOpenCheck,
  Building,
  Check,
  Award,
  UserCheck,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Corporate Compliance',
    desc: 'Navigating the Companies Act 2013 and allied statutory mandates to insulate your board from penal exposure.'
  },
  {
    icon: Scale,
    title: 'Legal & Regulatory Standards',
    desc: 'Translating complex statutory notifications into actionable board resolutions, agreements, and policies.'
  },
  {
    icon: FileSpreadsheet,
    title: 'MCA-21 Regulatory Filings',
    desc: 'Preparation, vetting, pre-scrutiny verification, and digital certification of statutory ROC e-forms.'
  },
  {
    icon: Network,
    title: 'Corporate Governance',
    desc: 'Implementing ICSI Secretarial Standards (SS-1 & SS-2), audit committee charters, and director independence.'
  },
  {
    icon: BookOpenCheck,
    title: 'Statutory Secretarial Practice',
    desc: 'Preserving digital minutes, statutory registers (MGT-1, MGT-2, MBP-1), and compliance audit trails.'
  },
  {
    icon: Layers,
    title: 'Corporate Restructuring',
    desc: 'Advising on equity rights issues, private placements, ESOP governance, and NCLT amalgamations.'
  }
];

export const AboutSection: React.FC = () => {
  const { config, setIsConsultationOpen } = useCustomizer();
  const [activeTab, setActiveTab] = useState<'board' | 'regulators' | 'investors'>('board');

  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>INSTITUTIONAL STEWARDSHIP & PRACTICE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About DMR & ASSOCIATES
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <strong>DMR & ASSOCIATES</strong> is a firm of practicing Company Secretaries engaged in providing corporate compliance, consultancy, and advisory services since 2014. The firm has a wide network of professionals equipped to cater to varied corporate sectors.
          </p>

          {/* Quick Statutory Fact Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">ESTABLISHED</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">{config.yearEstablished}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">FIRM TYPE</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">{config.firmType}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">REGISTRATION NO.</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">{config.regNumber}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">PRACTICE REGION</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">{config.city}, {config.state}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Architecture Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 6 Pillar Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#F4F1EA] text-[#0A2540] flex items-center justify-center shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mt-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Governance Schematic with Corporate Visual */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-left">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
                    GOVERNANCE ORCHESTRATION NEXUS
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">
                    How Practicing CS Anchor the Entire Enterprise
                  </h4>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>

              {/* Stakeholder Tab Switcher */}
              <div className="mt-4 flex rounded-xl bg-slate-100/90 p-1 border border-slate-200/70 text-xs">
                {(['board', 'regulators', 'investors'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-white text-slate-900 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab === 'board' ? 'Board & Promoters' : tab === 'regulators' ? 'MCA & Regulators' : 'Investors & Funds'}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-5 space-y-3.5">
                {activeTab === 'board' && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA] text-xs space-y-2">
                      <div className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-sky-700" />
                        <span>Fiduciary Protection for Board Members</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        Protects directors from Section 164 & 167 disqualifications. We draft board notices with explanatory statements, ensure accurate quorum under SS-1, and guarantee minutes are digitally stamped and preserved.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 block text-[11px] font-medium">MINUTES RETENTION</span>
                        <span className="text-emerald-700 font-bold text-xs mt-0.5 block">Permanent (SS-1 Compliant)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 block text-[11px] font-medium">DIRECTOR DEFENSE</span>
                        <span className="text-sky-700 font-bold text-xs mt-0.5 block">D&O Liability Aligned</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'regulators' && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA] text-xs space-y-2">
                      <div className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-sky-700" />
                        <span>Authoritative Interface with MCA, ROC & RD</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        Handling all event-based e-forms, ROC inquiry notices, compounding petitions, and annual returns. Our digital signatures signify statutory authenticity and pre-scrutiny compliance.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 block text-[11px] font-medium">MCA V3 PRE-SCRUTINY</span>
                        <span className="text-sky-700 font-bold text-xs mt-0.5 block">100% Pre-Vetted</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 block text-[11px] font-medium">COMPOUNDING FORUM</span>
                        <span className="text-emerald-700 font-bold text-xs mt-0.5 block">RD / NCLT Representation</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'investors' && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA] text-xs space-y-2">
                      <div className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-sky-700" />
                        <span>Investor-Grade Due Diligence Readiness</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        Venture capital and private equity investors require impeccable secretarial health prior to funding rounds. We certify cap tables, issue compliance certificates, and reconcile depository data.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 block text-[11px] font-medium">FUNDRAISING AUDIT</span>
                        <span className="text-sky-700 font-bold text-xs mt-0.5 block">Term Sheet Ready</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 block text-[11px] font-medium">CAP TABLE SANITY</span>
                        <span className="text-emerald-700 font-bold text-xs mt-0.5 block">100% Reconciled</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Need immediate statutory assessment?</span>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="text-sky-700 hover:text-sky-900 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Request Governance Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Team / Professional Leadership Section */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="max-w-2xl text-left space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
              <UserCheck className="w-3.5 h-3.5 text-sky-700" />
              <span>PROFESSIONAL LEADERSHIP</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Our Professional Team
            </h3>
            <p className="text-slate-600 text-sm">
              Led by seasoned Company Secretaries with extensive statutory expertise.
            </p>
          </div>

          <div className="max-w-md">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 text-left">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                  YA
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-[11px] font-semibold mb-1">
                    <ShieldCheck className="w-3 h-3 text-sky-700" />
                    <span>Practicing CS</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">CS Yogesh Angadi</h4>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    Senior Associate
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed space-y-2">
                <p>
                  Senior Associate at DMR & ASSOCIATES, specializing in corporate compliance, ROC filings, legal advisory, and board governance.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                    Corporate Compliance
                  </span>
                  <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                    ROC Filings
                  </span>
                  <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                    Legal Advisory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
