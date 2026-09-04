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
  Cpu,
  BookOpenCheck,
  Building
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Corporate Compliance',
    desc: 'Navigating Companies Act, 2013 and allied statutory mandates to insulate your board from liabilities.'
  },
  {
    icon: Scale,
    title: 'Legal Requirements',
    desc: 'Translating complex statutory amendments into actionable board resolutions and legally binding agreements.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Regulatory Filings',
    desc: 'Direct integration with MCA-21 v3 portal for timely e-form validation, scrutiny, and approvals.'
  },
  {
    icon: Network,
    title: 'Corporate Governance',
    desc: 'Implementing Secretarial Standards (SS-1 & SS-2), audit committees, and independent director frameworks.'
  },
  {
    icon: BookOpenCheck,
    title: 'Secretarial Practices',
    desc: 'Preserving digital minutes, registers of members, debenture holders, and statutory registers flawlessly.'
  },
  {
    icon: Layers,
    title: 'Business Structuring',
    desc: 'Structuring capital expansions, private placements, ESOPs, and cross-border joint ventures.'
  }
];

export const AboutSection: React.FC = () => {
  const { config, setIsConsultationOpen } = useCustomizer();
  const [activeTab, setActiveTab] = useState<'board' | 'regulators' | 'investors'>('board');

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle glowing backdrop */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL STEWARDSHIP // PROTOCOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Built for the Complexity of Modern Business.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            In today's stringent regulatory landscape, the role of a Company Secretary has evolved from procedural record-keeping into a strategic corporate command center. At <span className="text-[#00D4FF] font-mono font-bold">{config.companyName}</span>, we fuse legal precision with high-tech compliance workflows to empower corporate growth.
          </p>
        </div>

        {/* 2-Column Command Architecture Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 6 Pillar Technical Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 rounded-none bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 border-l-2 border-l-[#00D4FF] backdrop-blur-sm transition-all duration-200 group shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:border-[#00D4FF]/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">
                      MOD_0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mt-3 group-hover:text-[#00D4FF] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Futuristic Governance Architecture Interactive Schematic */}
          <div className="lg:col-span-6 relative">
            <div className="p-6 sm:p-7 rounded-none bg-black/70 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
              {/* Scan line */}
              <div className="scanline-effect" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#00D4FF] uppercase font-bold tracking-[0.2em] block">
                    GOVERNANCE ORCHESTRATION NEXUS
                  </span>
                  <h4 className="text-base font-bold text-white font-mono uppercase tracking-wide mt-0.5">
                    How Company Secretaries Anchor the Enterprise
                  </h4>
                </div>
                <div className="w-2 h-2 bg-[#00D4FF] rounded-none shadow-[0_0_8px_#00D4FF] animate-pulse" />
              </div>

              {/* Interactive Stakeholder Toggle */}
              <div className="mt-4 flex rounded-none bg-white/5 p-1 border border-white/10 text-xs font-mono">
                {(['board', 'regulators', 'investors'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 text-[10px] uppercase tracking-wider rounded-none transition-all ${
                      activeTab === tab
                        ? 'bg-[#00D4FF] text-black font-black shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab === 'board' ? 'Board & Promoters' : tab === 'regulators' ? 'MCA & Regulators' : 'Investors & Funds'}
                  </button>
                ))}
              </div>

              {/* Dynamic Diagram Content */}
              <div className="mt-5 space-y-3 font-mono">
                {activeTab === 'board' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF] text-xs space-y-2">
                      <div className="font-bold text-[#00D4FF] uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#00D4FF]" />
                        Direct Fiduciary Safeguard for Directors
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans text-xs">
                        Protects directors from Section 164 & 167 disqualifications. We draft board notices with clear explanatory statements, ensure accurate quorum under SS-1, and guarantee minutes are digitally stamped and archived.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-none bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider">MINUTES RETENTION</span>
                        <span className="text-emerald-400 font-bold text-[11px]">PERMANENT / SS-1</span>
                      </div>
                      <div className="p-2.5 rounded-none bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider">DIRECTOR DEFENSE</span>
                        <span className="text-[#00D4FF] font-bold text-[11px]">D&O ALIGNED</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'regulators' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF] text-xs space-y-2">
                      <div className="font-bold text-[#00D4FF] uppercase tracking-wider flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#00D4FF]" />
                        Authoritative Liaison with MCA, ROC & RD
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans text-xs">
                        Handling all event-based e-forms, ROC inquiries, show-cause replies, and annual filings (AOC-4, MGT-7, DIR-3 KYC). Our practicing CS digital signature serves as statutory attestation of truth and compliance.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-none bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider">MCA V3 PRE-SCRUTINY</span>
                        <span className="text-[#00D4FF] font-bold text-[11px]">100% VERIFIED</span>
                      </div>
                      <div className="p-2.5 rounded-none bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider">COMPOUNDING FORUM</span>
                        <span className="text-emerald-400 font-bold text-[11px]">RD / NCLT READY</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'investors' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF] text-xs space-y-2">
                      <div className="font-bold text-[#00D4FF] uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" />
                        Clean Due Diligence & Investor-Grade Health
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans text-xs">
                        Institutional venture capital and private equity investors require pristine corporate records before cutting cheques. We prepare cap-table certifications, SH-7, PAS-3 returns, and comprehensive Secretarial Audit reports.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-none bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider">SERIES A/B READINESS</span>
                        <span className="text-[#00D4FF] font-bold text-[11px]">AUDIT CERTIFIED</span>
                      </div>
                      <div className="p-2.5 rounded-none bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider">CAP TABLE SANITY</span>
                        <span className="text-emerald-400 font-bold text-[11px]">100% RECONCILED</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Interactive CTA button inside about */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider">Immediate compliance review</span>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D4FF] hover:text-[#00E5FF] transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>Request Statutory Check</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
