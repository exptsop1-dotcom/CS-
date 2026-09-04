import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  FileCheck2, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  Layers, 
  Sparkles,
  ChevronRight,
  Fingerprint,
  Lock,
  Cpu
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

const ROTATING_PHRASES = [
  'Governance. Simplified.',
  'Precision in Every Compliance.',
  'Building Stronger Corporate Foundations.',
  'Your Corporate Compliance Command Center.'
];

export const HeroSection: React.FC = () => {
  const { config, setIsConsultationOpen } = useCustomizer();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'status' | 'filings' | 'alerts'>('status');

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-6 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top subtle technical telemetry line */}
        <div className="hidden sm:flex items-center justify-between pb-6 mb-8 border-b border-white/10 text-[10px] uppercase font-mono tracking-[0.25em] text-slate-400">
          <div className="flex items-center gap-4">
            <span className="text-[#00D4FF]">SYS.LOC // ASIA-IN-MCA-V3</span>
            <span className="opacity-40">•</span>
            <span>DATA GRID STABLE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60">NODE: 0x7F8B</span>
            <span className="w-1.5 h-1.5 bg-[#00D4FF] rounded-none"></span>
            <span className="text-[#00D4FF]">ONLINE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#00D4FF]/40 bg-[#00D4FF]/5 rounded-none backdrop-blur-md shadow-[0_0_15px_rgba(0,212,255,0.15)]"
            >
              <div className="w-2 h-2 rounded-none bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] animate-pulse" />
              <span className="text-[10px] font-mono text-[#00D4FF] font-bold tracking-[0.25em] uppercase">
                TRUSTED CORPORATE SECRETARY FIRM
              </span>
              <span className="text-[10px] text-slate-400 border-l border-white/20 pl-2 font-mono">
                EST. 2014
              </span>
            </motion.div>

            {/* Main Headline with Technical Stroke styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]">
                Corporate Compliance,{' '}
                <span className="stroke-text tracking-tighter">
                  Reimagined.
                </span>
              </h1>

              {/* Dynamic Rotating Sub-badge */}
              <div className="h-8 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base font-mono text-[#00D4FF] font-medium flex items-center gap-2 tracking-wide uppercase"
                  >
                    <span className="text-[#00D4FF] font-bold">&gt;&gt;</span>
                    <span>{ROTATING_PHRASES[phraseIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Expert Company Secretary and corporate compliance solutions designed to help businesses stay compliant, confident, and ready for growth.
            </motion.p>

            {/* Technical Value Micro-Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-3 gap-3 py-2 max-w-xl text-xs font-mono"
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-none backdrop-blur-sm border-l-2 border-l-[#00D4FF]">
                <div className="text-slate-400 text-[9px] uppercase tracking-widest">Framework</div>
                <div className="text-white font-bold text-xs sm:text-sm mt-0.5 tracking-wider">COMPANIES ACT 2013</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-none backdrop-blur-sm border-l-2 border-l-[#00D4FF]">
                <div className="text-slate-400 text-[9px] uppercase tracking-widest">Filing Accuracy</div>
                <div className="text-[#00D4FF] font-bold text-xs sm:text-sm mt-0.5 tracking-wider">100% PRE-VETTED</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-none backdrop-blur-sm border-l-2 border-l-[#00D4FF]">
                <div className="text-slate-400 text-[9px] uppercase tracking-widest">MCA Tracking</div>
                <div className="text-emerald-400 font-bold text-xs sm:text-sm mt-0.5 tracking-wider">REAL-TIME RADAR</div>
              </div>
            </motion.div>

            {/* Dual Action High-Contrast CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={scrollToServices}
                className="bg-[#00D4FF] text-black font-black px-7 py-3.5 uppercase tracking-widest text-xs hover:bg-[#00E5FF] shadow-[0_0_20px_rgba(0,212,255,0.3)] rounded-none transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="border border-white/20 text-white font-bold px-7 py-3.5 uppercase tracking-widest text-xs hover:bg-white/5 hover:border-white/40 rounded-none transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Talk to an Expert</span>
                <ChevronRight className="w-4 h-4 text-[#00D4FF]" />
              </button>
            </motion.div>

            {/* Small reassurance tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1 tracking-wider"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>ICSI Secretarial Standards (SS-1 & SS-2)</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>Encrypted Regulatory Vault</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Tech Interactive Data Grid HUD */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Command Center Data Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-black/70 border border-white/10 rounded-none p-5 sm:p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Scanline laser */}
              <div className="scanline-effect" />

              {/* Card Top Telemetry Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#00D4FF]/10 border border-[#00D4FF]/40 rounded-none flex items-center justify-center text-[#00D4FF]">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-[0.15em] uppercase font-mono flex items-center gap-2">
                      COMPLIANCE COMMAND HUD
                      <span className="w-1.5 h-1.5 bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] animate-pulse" />
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                      SYS ID: CS-V3-LIVE-FEED
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="text-[10px] text-[#00D4FF] font-bold bg-[#00D4FF]/10 px-2 py-0.5 border border-[#00D4FF]/30 tracking-wider">
                    MCA-21 SYNCED
                  </div>
                  <div className="text-[9px] text-slate-400 opacity-60 mt-0.5 tracking-wider">LATENCY: 12ms</div>
                </div>
              </div>

              {/* Interactive Dashboard Tabs */}
              <div className="flex items-center gap-1 my-4 p-1 bg-white/5 rounded-none border border-white/10">
                {(['status', 'filings', 'alerts'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 text-[11px] font-mono rounded-none transition-all uppercase tracking-wider ${
                      activeTab === tab
                        ? 'bg-[#00D4FF] text-black font-black shadow-[0_0_10px_rgba(0,212,255,0.4)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab === 'status' ? 'Governance' : tab === 'filings' ? 'Filings' : 'Alerts'}
                  </button>
                ))}
              </div>

              {/* Tab 1: Status & Governance Score */}
              {activeTab === 'status' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3 font-mono"
                >
                  <div className="p-4 bg-white/5 border border-white/10 rounded-none flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                        COMPOSITE COMPLIANCE SCORE
                      </div>
                      <div className="text-3xl font-black text-white mt-1 flex items-baseline gap-1.5">
                        <span className="text-[#00D4FF]">98.4</span>
                        <span className="text-slate-400 opacity-50 text-sm font-normal">/ 100</span>
                      </div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 tracking-wider uppercase">
                        <TrendingUp className="w-3 h-3" />
                        <span>ZERO PENALTY EXPOSURE</span>
                      </div>
                    </div>

                    {/* Circular HUD Ring */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-white/10"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-[#00D4FF]"
                          strokeDasharray="98.4, 100"
                          strokeWidth="3"
                          strokeLinecap="square"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute text-[11px] font-black text-white font-mono">
                        98%
                      </div>
                    </div>
                  </div>

                  {/* 3 Metric Mini Sliders with Left Indicator Line */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] flex items-center justify-between">
                      <span className="text-slate-300">Board Meeting Quorum (SS-1)</span>
                      <span className="text-emerald-400 font-bold text-[11px] tracking-wider">100% COMPLIANT</span>
                    </div>
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] flex items-center justify-between">
                      <span className="text-slate-300">Statutory Registers (MGT-1,2)</span>
                      <span className="text-[#00D4FF] font-bold text-[11px] tracking-wider">UP TO DATE</span>
                    </div>
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] flex items-center justify-between">
                      <span className="text-slate-300">Director KYC Standing (DIR-3)</span>
                      <span className="text-emerald-400 font-bold text-[11px] tracking-wider">ALL ACTIVE</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Upcoming Filings */}
              {activeTab === 'filings' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2.5 font-mono"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Form AOC-4 (Financials)</div>
                      <div className="text-[10px] text-slate-400">Balance sheet & P&L with XBRL tags</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 text-[9px] uppercase tracking-wider font-bold">
                        IN DRAFT
                      </span>
                      <div className="text-[10px] text-slate-400 opacity-60 mt-1">Due: Oct 30</div>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Form MGT-7 (Annual Return)</div>
                      <div className="text-[10px] text-slate-400">Shareholder register & meetings tally</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 bg-amber-400/10 text-amber-300 border border-amber-400/30 text-[9px] uppercase tracking-wider font-bold">
                        SCHEDULED
                      </span>
                      <div className="text-[10px] text-slate-400 opacity-60 mt-1">Due: Nov 29</div>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Form DPT-3 (Deposit Return)</div>
                      <div className="text-[10px] text-slate-400">Outstanding loans & non-deposit liabilities</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 text-[9px] uppercase tracking-wider font-bold">
                        APPROVED
                      </span>
                      <div className="text-[10px] text-emerald-400 mt-1">SRN: AA892104</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Regulatory Alerts */}
              {activeTab === 'alerts' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2.5 font-mono"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] text-xs">
                    <div className="flex items-center gap-1.5 text-[#00D4FF] font-bold">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#00D4FF]" />
                      MCA NOTIFICATION UPDATE
                    </div>
                    <p className="text-slate-300 text-[11px] mt-1 leading-snug font-sans">
                      Mandatory audit trail (edit log) compliance verification active for FY 2025-26 statutory reporting.
                    </p>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#00D4FF] text-xs">
                    <div className="flex items-center gap-1.5 text-[#00D4FF] font-bold">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                      ICSI GUIDELINE REVISION
                    </div>
                    <p className="text-slate-300 text-[11px] mt-1 leading-snug font-sans">
                      Secretarial Standard SS-1 updated protocols on hybrid board meeting video recordings and transcript preservation.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Bottom Quick Action */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase text-[10px] tracking-wider">COMMAND PORTAL PREVIEW</span>
                <a
                  href="#dashboard-preview"
                  className="text-[#00D4FF] hover:text-[#00E5FF] flex items-center gap-1 font-bold uppercase tracking-wider text-[11px] group"
                >
                  <span>Access Data Grid</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Satellite Badge 1 */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#020408]/95 border border-white/10 rounded-none p-2.5 shadow-2xl backdrop-blur-xl items-center gap-3 font-mono"
            >
              <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Fingerprint className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white tracking-wider">DIN & DSC VERIFIED</div>
                <div className="text-[9px] text-slate-400 uppercase">Class 3 Cryptographic Signatures</div>
              </div>
            </motion.div>

            {/* Satellite Badge 2 */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex absolute -top-4 -right-4 bg-[#020408]/95 border border-white/10 rounded-none p-2.5 shadow-2xl backdrop-blur-xl items-center gap-3 font-mono"
            >
              <div className="w-8 h-8 bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white tracking-wider">ZERO PENALTY AUDIT</div>
                <div className="text-[9px] text-slate-400 uppercase">100% Statutory Clearance</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
