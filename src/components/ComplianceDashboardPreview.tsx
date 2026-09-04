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
  ArrowUpRight,
  Sparkles,
  Building
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

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const complianceDates = [5, 12, 18, 25, 30];

  return (
    <section id="dashboard-preview" className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 text-xs font-semibold">
              <LayoutDashboard className="w-3.5 h-3.5 text-sky-700" />
              <span>EXECUTIVE COMPLIANCE CONSOLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Your Corporate Compliance. At a Glance.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Experience our client-facing governance command portal. Monitor statutory filings, upcoming MCA deadlines, director KYC standings, and board governance health in real time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 shadow-xs">
              Demonstration Client: <strong className="text-slate-900 font-semibold">Apex Enterprise Holdings Ltd</strong>
            </div>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="btn-primary-navy px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Access Client Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* The Dashboard Main Container */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#F4F1EA] text-[#0A2540] flex items-center justify-center shadow-xs">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>{config.companyName} Client Workspace</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                    100% Compliant
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  CIN: U72200DL2018PTC334981 • MCA V3 Portal: Synchronized & Verified
                </div>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="flex items-center gap-2.5 text-xs">
              <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Active Directors: <strong className="text-slate-900">04/04</strong>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                FY Audit Status: <strong className="text-emerald-700">Clean Report</strong>
              </div>
            </div>
          </div>

          {/* Top 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            
            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA] flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Compliance Index</span>
                <div className="text-2xl font-bold text-slate-900 mt-1">
                  98.5%
                </div>
                <span className="text-xs text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-3 h-3" /> +2.4% vs last quarter
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-700 flex items-center justify-center font-bold text-xs shadow-xs">
                98%
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA]">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Upcoming Filings</span>
              <div className="text-2xl font-bold text-slate-900 mt-1">
                02 <span className="text-xs text-amber-600 font-normal">due in &lt;60 days</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 truncate">
                Form AOC-4 (Accounts) & Form MGT-7
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA]">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Filings Cleared</span>
              <div className="text-2xl font-bold text-slate-900 mt-1">
                14 <span className="text-xs text-emerald-700 font-normal">This Fiscal Year</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 truncate">
                Zero Rejections • 100% First-Pass
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA]">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Governance Health</span>
              <div className="text-2xl font-bold text-emerald-700 mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5" />
                <span>EXEMPLARY</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 truncate">
                Secretarial Standards SS-1 & SS-2 Verified
              </p>
            </div>

          </div>

          {/* Main Body Grid: Filings Table (Left 7) + Calendar & Alerts (Right 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 cols: Filings Feed with Filter */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-700" />
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Statutory Filings Radar (MCA / ROC)
                  </h4>
                </div>

                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
                  {(['All', 'Completed', 'Upcoming', 'Pending'] as const).map(status => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-2.5 py-0.5 rounded-md transition-all cursor-pointer ${
                        filterStatus === status
                          ? 'bg-white text-slate-900 font-semibold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filings List */}
              <div className="space-y-2.5">
                {filteredFilings.map((filing) => (
                  <div
                    key={filing.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-sky-800 font-mono font-bold text-[11px] shadow-xs">
                          {filing.formCode}
                        </span>
                        <span className="font-semibold text-slate-900 text-sm">
                          {filing.title}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Regulator: {filing.regulatoryBody} • Due: {filing.dueDate}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        filing.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : filing.status === 'Pending'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : filing.status === 'In Review'
                          ? 'bg-sky-50 text-sky-700 border border-sky-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {filing.status}
                      </span>

                      {filing.daysRemaining > 0 && (
                        <span className="text-xs text-slate-500 font-medium">
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
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <CalendarIcon className="w-4 h-4 text-sky-700" />
                    <span>Compliance Radar — Sep 2026</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700">MCA-21 Synchronized</span>
                </div>

                {/* Mini Calendar Grid */}
                <div className="mt-3">
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-400 pb-1">
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {daysInMonth.map((day) => {
                      const isComplianceDay = complianceDates.includes(day);
                      const isSelected = selectedDay === day;

                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`p-1.5 rounded-lg transition-all relative cursor-pointer ${
                            isSelected
                              ? 'bg-[#0A2540] text-white font-bold shadow-xs'
                              : isComplianceDay
                              ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                              : 'text-slate-600 hover:bg-slate-200/70'
                          }`}
                        >
                          {day}
                          {isComplianceDay && !isSelected && (
                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-700" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-xs">
                  <strong className="text-slate-900">Sep {selectedDay}: </strong>
                  {selectedDay === 18 ? 'Board Meeting Notice Circulation for Q2 Audited Financial Statements' :
                   selectedDay === 30 ? 'Final Statutory Deadline: Director Annual Web KYC (DIR-3 KYC)' :
                   selectedDay === 5  ? 'Audit Committee Review of Related Party Transactions' :
                   selectedDay === 12 ? 'Deposit of Tax Deducted at Source (TDS) & ROC Reconciliation' :
                   selectedDay === 25 ? 'Secretarial Audit preliminary report review session' :
                   'No mandatory statutory deadline on this date.'}
                </div>
              </div>

              {/* Regulatory Alerts */}
              <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA] space-y-2">
                <div className="text-xs text-slate-900 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Active Regulatory Watchdog Alerts
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-xs">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">ALERT #MCA-V3-491</div>
                  <p className="mt-0.5 leading-relaxed">
                    MCA has issued mandatory pre-scrutiny advisory for Form MGT-14 filings concerning private placements and debenture allotments.
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
