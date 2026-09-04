import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Calendar as CalendarIcon, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight,
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';
import { DEMO_FILINGS } from '../data/placeholderData';
import { useCustomizer } from '../context/CustomizerContext';

export const ComplianceDashboardPreview: React.FC = () => {
  const { config, setIsConsultationOpen } = useCustomizer();
  const [filterStatus, setFilterStatus] = useState<'All' | 'Completed' | 'Upcoming' | 'Pending'>('All');
  const [selectedDay, setSelectedDay] = useState<number>(18);

  const filteredFilings = filterStatus === 'All'
    ? DEMO_FILINGS
    : DEMO_FILINGS.filter(f => f.status === filterStatus);

  // Calendar days generation
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const complianceDates = [5, 12, 18, 25, 30];

  return (
    <section id="dashboard-preview" className="relative py-20 sm:py-28 border-t border-white/10 bg-[#020408]/95 overflow-hidden font-mono">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid-dense opacity-40 pointer-events-none" />
      
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold tracking-[0.3em] uppercase bg-[#00D4FF]/5 rounded-none font-mono">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>LIVE PROTOTYPE INTERFACE // HUD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-display">
              Your Compliance. At a Glance.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Experience the client-facing command center. Monitor statutory filings, upcoming MCA deadlines, director KYC standings, and board governance health in real time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              DEMO CLIENT: <span className="text-[#00D4FF] font-bold">SYNTHEX HOLDINGS LTD</span>
            </div>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-5 py-2 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all cursor-pointer"
            >
              <span>Experience Smarter Compliance</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Prototype Disclaimer Banner */}
        <div className="mb-6 p-3 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF] text-xs text-slate-300 flex items-center justify-between font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider">INTERACTIVE PROTOTYPE DEMONSTRATION — Bespoke Compliance Command Portal for Clients</span>
          </div>
          <span className="hidden sm:inline text-slate-400 text-[10px] uppercase">VERSION 4.2-CS</span>
        </div>

        {/* The Big Futuristic Dashboard Panel */}
        <div className="rounded-none bg-black/90 border border-white/10 shadow-2xl backdrop-blur-md p-5 sm:p-7 overflow-hidden">
          
          {/* Dashboard HUD Topbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 text-[#00D4FF] flex items-center justify-center font-bold">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span>{config.companyName}</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-none bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    ALL GREEN
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                  CIN: U72200DL2018PTC334981 • MCA V3 STATUS: SYNCHRONIZED
                </div>
              </div>
            </div>

            {/* Quick Metrics Pills */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                ACTIVE DIRECTORS: <span className="text-white font-bold">04/04</span>
              </div>
              <div className="px-3 py-1.5 rounded-none bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                FY AUDIT: <span className="text-emerald-400 font-bold">CLEAN</span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Top 4 metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            
            {/* Card 1: Compliance Score */}
            <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF] flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Compliance Index</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-mono flex items-baseline gap-1">
                  <span className="text-[#00D4FF]">98%</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-3 h-3" /> +2.4% vs Q3
                </span>
              </div>
              <div className="w-10 h-10 rounded-none border border-[#00D4FF]/40 bg-[#00D4FF]/10 flex items-center justify-center text-xs font-bold text-[#00D4FF] font-mono">
                98%
              </div>
            </div>

            {/* Card 2: Upcoming Deadlines */}
            <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-amber-400">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Upcoming Filings</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-mono">
                02 <span className="text-xs text-amber-400 font-mono font-normal">&lt;60 Days</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 truncate uppercase">
                Form AOC-4 (Financials) & MGT-7
              </p>
            </div>

            {/* Card 3: Recent Filings */}
            <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-[#00D4FF]">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Filings Cleared</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-mono">
                14 <span className="text-xs text-emerald-400 font-mono font-normal">This Fiscal</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 truncate uppercase">
                Zero Rejections • 100% SRN Approved
              </p>
            </div>

            {/* Card 4: Governance Status */}
            <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-emerald-400">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Governance Health</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5" />
                <span>FLAWLESS</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 truncate uppercase">
                Secretarial Standard SS-1 & SS-2 Verified
              </p>
            </div>

          </div>

          {/* Main Body Grid: Filings Table (Left 7) + Calendar & Alerts (Right 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 cols: Filings Feed with Filter */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#00D4FF]" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Statutory Filings Radar (MCA / ROC)
                  </h4>
                </div>

                {/* Filter tabs */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-none border border-white/10 text-[10px] font-mono">
                  {(['All', 'Completed', 'Upcoming', 'Pending'] as const).map(status => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-2 py-0.5 rounded-none uppercase transition-all ${
                        filterStatus === status
                          ? 'bg-[#00D4FF] text-black font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filings List */}
              <div className="space-y-2">
                {filteredFilings.map((filing) => (
                  <div
                    key={filing.id}
                    className="p-3 rounded-none bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded-none bg-white/10 border border-white/20 text-[#00D4FF] font-mono font-bold text-[10px]">
                          {filing.formCode}
                        </span>
                        <span className="font-semibold text-white font-sans">
                          {filing.title}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono uppercase">
                        REGULATOR: {filing.regulatoryBody} • DUE: {filing.dueDate}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span className={`px-2 py-0.5 rounded-none text-[9px] font-mono font-bold uppercase tracking-wider ${
                        filing.status === 'Completed'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : filing.status === 'Pending'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : filing.status === 'In Review'
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                          : 'bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30'
                      }`}>
                        {filing.status.toUpperCase()}
                      </span>

                      {filing.daysRemaining > 0 && (
                        <span className="text-[10px] font-mono text-slate-400">
                          {filing.daysRemaining}d left
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Monthly Compliance Calendar & Alerts */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Compliance Calendar Box */}
              <div className="p-4 rounded-none bg-white/5 border border-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2 font-bold text-white uppercase tracking-wider">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>Compliance Radar — Sep 2026</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#00D4FF] uppercase tracking-wider">MCA-21 ALIGNED</span>
                </div>

                {/* Mini Calendar Grid */}
                <div className="mt-3">
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono text-slate-500 pb-1">
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-mono">
                    {daysInMonth.map((day) => {
                      const isComplianceDay = complianceDates.includes(day);
                      const isSelected = selectedDay === day;

                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`p-1 rounded-none transition-all relative ${
                            isSelected
                              ? 'bg-[#00D4FF] text-black font-bold'
                              : isComplianceDay
                              ? 'bg-[#00D4FF]/10 text-[#00D4FF] font-bold border border-[#00D4FF]/40'
                              : 'text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {day}
                          {isComplianceDay && !isSelected && (
                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-none bg-[#00D4FF]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-none bg-black/40 border border-white/10 text-[10px] font-mono text-slate-300">
                  <span className="text-[#00D4FF] font-bold">SEP {selectedDay}: </span>
                  {selectedDay === 18 ? 'Board Meeting Notice Circulation for Q2 Audited Accounts' :
                   selectedDay === 30 ? 'Final Statutory Due Date: Annual Director Web KYC (DIR-3 KYC)' :
                   selectedDay === 5  ? 'Audit Committee Review of Related Party Transactions' :
                   selectedDay === 12 ? 'Deposit of Tax Deducted at Source (TDS) & ROC Reconciliation' :
                   selectedDay === 25 ? 'Secretarial Audit preliminary report review session' :
                   'No mandatory statutory deadline on this date.'}
                </div>
              </div>

              {/* Real-time Alerts Ticker */}
              <div className="p-4 rounded-none bg-white/5 border border-white/10 border-l-2 border-l-amber-400 space-y-2">
                <div className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Active Regulatory Watchdog Alerts
                </div>

                <div className="p-2.5 rounded-none bg-black/40 border border-white/10 text-xs text-slate-300 space-y-1">
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">ALERT #MCA-V3-491</div>
                  <p className="leading-snug text-[11px] font-sans">
                    MCA has issued mandatory pre-scrutiny advisory for Form MGT-14 filings concerning private placements.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
