import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  FileCheck2, 
  AlertCircle, 
  CheckCircle2, 
  Calendar, 
  PieChart as PieIcon,
  Activity,
  Layers, 
  Clock,
  Sparkles,
  ChevronRight,
  Lock,
  Building2,
  HelpCircle,
  RefreshCw
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

interface DataPoint {
  month: string;
  score: number;
  filings: number;
  note: string;
}

const TREND_DATA: DataPoint[] = [
  { month: 'Nov', score: 96.4, filings: 28, note: 'Pre-AGM statutory clearance complete. Zero MCA queries raised.' },
  { month: 'Dec', score: 97.2, filings: 34, note: 'Financial statement XBRL tagging (AOC-4) finalized with ROC.' },
  { month: 'Jan', score: 98.6, filings: 41, note: 'Director KYC (DIR-3) verification completed across 12 board members.' },
  { month: 'Feb', score: 99.1, filings: 39, note: 'Secretarial audit scope under Section 204 approved by Audit Committee.' },
  { month: 'Mar', score: 99.7, filings: 52, note: 'Full year statutory registers audited & reconciled with depository records.' },
];

interface ServiceSlice {
  name: string;
  percent: number;
  color: string;
  detail: string;
  regulations: string;
}

const SERVICES_PIE: ServiceSlice[] = [
  { 
    name: 'Secretarial Audit & Standards', 
    percent: 36, 
    color: '#0A2540', 
    detail: 'Mandatory statutory audit under Section 204 of Companies Act 2013 & SEBI LODR Reg 24A.',
    regulations: 'ICSI SS-1 & SS-2'
  },
  { 
    name: 'Annual MCA & ROC Filings', 
    percent: 28, 
    color: '#0284C7', 
    detail: 'Complete preparation, vetting, and certification of AOC-4, MGT-7, and statutory returns.',
    regulations: 'Companies Act 2013'
  },
  { 
    name: 'Corporate Restructuring & M&A', 
    percent: 20, 
    color: '#0F766E', 
    detail: 'Legal due diligence, NCLT merger petitions, share capital alteration, and rights issues.',
    regulations: 'NCLT & SEBI Rules'
  },
  { 
    name: 'FEMA, RBI & Cross-Border Advisory', 
    percent: 16, 
    color: '#C5A059', 
    detail: 'FDI reporting, FC-GPR/FC-TRS filings, FLA annual returns, and compounding advisory.',
    regulations: 'RBI FEMA 1999'
  },
];

interface NewsSnippet {
  id: string;
  tag: string;
  headline: string;
  source: string;
  timeAgo: string;
  impact: 'High' | 'Medium' | 'Informational';
  explanation: string;
}

const NEWS_SNIPPETS: NewsSnippet[] = [
  {
    id: 'n1',
    tag: 'MCA V3 MANDATE',
    headline: 'Audit Trail & Edit Log certification guidelines issued for statutory secretarial filings',
    source: 'Ministry of Corporate Affairs',
    timeAgo: '14m ago',
    impact: 'High',
    explanation: 'Independent CS must verify automated audit trail software compliance under Companies (Accounts) Rules.'
  },
  {
    id: 'n2',
    tag: 'SEBI LODR',
    headline: 'Secretarial Compliance Report deadline aligned for top 1000 listed entities',
    source: 'Securities and Exchange Board of India',
    timeAgo: '1h ago',
    impact: 'Medium',
    explanation: 'Enhanced disclosures required for related party transactions approved by board resolution.'
  },
  {
    id: 'n3',
    tag: 'RBI FEMA',
    headline: 'Single Master Form (SMF) portal updates for inbound FDI reporting',
    source: 'Reserve Bank of India',
    timeAgo: '3h ago',
    impact: 'Informational',
    explanation: 'Streamlined approval queue for foreign investment inward remittance certification.'
  }
];

export const HeroSection: React.FC = () => {
  const { config, setIsConsultationOpen } = useCustomizer();
  const [activeTab, setActiveTab] = useState<'trend' | 'services' | 'news'>('trend');
  const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);
  const [hoveredSlice, setHoveredSlice] = useState<ServiceSlice | null>(null);
  const [hoveredNews, setHoveredNews] = useState<NewsSnippet | null>(null);
  
  // Simulated real-time fluctuating score
  const [baseScore, setBaseScore] = useState(99.4);
  const [isLiveSimulating, setIsLiveSimulating] = useState(true);
  const [lastPulse, setLastPulse] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    if (!isLiveSimulating) return;
    const interval = setInterval(() => {
      // Gentle realistic micro-fluctuation between 99.1 and 99.8
      const delta = (Math.random() - 0.5) * 0.2;
      setBaseScore((prev) => {
        const next = Math.min(99.9, Math.max(98.8, +(prev + delta).toFixed(1)));
        return next;
      });
      setLastPulse(new Date().toLocaleTimeString());
    }, 4500);

    return () => clearInterval(interval);
  }, [isLiveSimulating]);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-[#FAF9F6]">
      {/* Soft warm architectural radial background */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-10 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 65% 50% at 50% 15%, rgba(245, 242, 235, 0.9), transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typography, Value Proposition & Trust */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Trust Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E5E0D4] text-slate-700 shadow-xs"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-800">
                {config.tagline.toUpperCase()}
              </span>
              <span className="text-xs text-slate-500 border-l border-slate-300 pl-2">
                ESTD. {config.yearEstablished}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0F172A] tracking-tight leading-[1.12]">
                Corporate Governance & Compliance,{' '}
                <span className="text-[#0369A1]">
                  Delivered with Precision.
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              <strong className="text-slate-900 font-semibold">{config.companyName}</strong> is a firm of practicing Company Secretaries providing corporate compliance, consultancy, and advisory services. Equipped with an expansive professional network to cater to diverse corporate sectors.
            </motion.p>

            {/* Corporate Value Micro-Cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-3 gap-3 max-w-lg"
            >
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Statute</div>
                <div className="text-slate-900 font-bold text-xs sm:text-sm mt-0.5">Companies Act</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Audit Rating</div>
                <div className="text-sky-700 font-bold text-xs sm:text-sm mt-0.5">100% Verified</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Turnaround</div>
                <div className="text-emerald-700 font-bold text-xs sm:text-sm mt-0.5">Zero Delays</div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="btn-primary-navy px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="btn-secondary-light px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer hover:bg-slate-50 transition-all"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </motion.div>

            {/* Institutional Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center gap-4 text-xs text-slate-500 pt-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ICSI Secretarial Standards Compliant</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                <span>MCA-21 V3 Portal Integrated</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Executive Dashboard */}
          <div className="lg:col-span-6 relative">
            
            {/* Dashboard Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative bg-white border border-slate-200/90 rounded-2xl p-6 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.07)]"
            >
              
              {/* Dashboard Header & Simulated Live Telemetry */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center shadow-xs">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                        Corporate Intelligence Console
                      </h3>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs text-slate-500">
                      Corporate Intelligence. Compliance. Precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsLiveSimulating(!isLiveSimulating)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Toggle simulated real-time data feeds"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLiveSimulating ? 'text-sky-600 animate-spin' : 'text-slate-400'}`} style={{ animationDuration: '6s' }} />
                    <span className="text-[11px] hidden sm:inline">{isLiveSimulating ? 'Live Feeds' : 'Paused'}</span>
                  </button>
                </div>
              </div>

              {/* Fluctuating Live Score & Key Metric Bar */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-xl bg-[#F8F6F1] border border-[#E8E4DA]">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Active Compliance Score</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded-md font-medium">Optimal</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mt-1 flex items-baseline gap-1">
                    <span>{baseScore.toFixed(1)}</span>
                    <span className="text-slate-400 text-sm font-normal">/ 100</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Updated {lastPulse}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Filing Velocity & Readiness
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      100%
                    </div>
                    <div className="text-xs text-sky-700 font-medium mt-0.5">
                      192 / 192 Filings Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation for Interactive Feeds & Charts */}
              <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl mb-4 text-xs font-medium text-slate-600">
                <button
                  onClick={() => setActiveTab('trend')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'trend'
                      ? 'bg-white text-slate-900 font-semibold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
                  <span>Compliance Trend</span>
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'services'
                      ? 'bg-white text-slate-900 font-semibold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <PieIcon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Services Utilized</span>
                </button>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'news'
                      ? 'bg-white text-slate-900 font-semibold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Regulatory Feeds</span>
                </button>
              </div>

              {/* TAB 1: Interactive Compliance Trend Line Chart */}
              {activeTab === 'trend' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>5-Month Statutory Audit Clearance History</span>
                    <span className="text-slate-400">Hover points for audit details</span>
                  </div>

                  {/* SVG Line Chart Container */}
                  <div className="relative h-44 bg-slate-50 rounded-xl border border-slate-200/80 p-3 pt-6 flex flex-col justify-end">
                    
                    {/* SVG Line & Curves */}
                    <svg className="w-full h-28 overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                      {/* Grid Guide Lines */}
                      <line x1="0" y1="20" x2="400" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="400" y2="60" stroke="#E2E8F0" strokeDasharray="3 3" />
                      <line x1="0" y1="90" x2="400" y2="90" stroke="#E2E8F0" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path
                        d="M 20 70 L 100 55 L 180 35 L 260 25 L 350 12 L 350 100 L 20 100 Z"
                        fill="rgba(3, 105, 161, 0.08)"
                      />

                      {/* Stroke Line */}
                      <path
                        d="M 20 70 L 100 55 L 180 35 L 260 25 L 350 12"
                        fill="none"
                        stroke="#0369A1"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Interactive Nodes */}
                      {TREND_DATA.map((pt, i) => {
                        const xs = [20, 100, 180, 260, 350];
                        const ys = [70, 55, 35, 25, 12];
                        const isHovered = hoveredPoint?.month === pt.month;

                        return (
                          <g 
                            key={pt.month}
                            onMouseEnter={() => setHoveredPoint(pt)}
                            onMouseLeave={() => setHoveredPoint(null)}
                            className="cursor-pointer"
                          >
                            <circle
                              cx={xs[i]}
                              cy={ys[i]}
                              r={isHovered ? 7 : 5}
                              fill={isHovered ? '#0284C7' : '#FFFFFF'}
                              stroke="#0369A1"
                              strokeWidth={isHovered ? 3 : 2}
                              className="transition-all duration-200"
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* Month Labels below axis */}
                    <div className="flex justify-between px-2 pt-2 text-[11px] font-medium text-slate-500">
                      {TREND_DATA.map((pt) => (
                        <button
                          key={pt.month}
                          onClick={() => setHoveredPoint(pt)}
                          className={`hover:text-sky-700 transition-colors ${hoveredPoint?.month === pt.month ? 'text-sky-700 font-bold' : ''}`}
                        >
                          {pt.month}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contextual Tooltip / Explanatory Card */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-xs min-h-[56px] flex items-center">
                    {hoveredPoint ? (
                      <div>
                        <div className="font-semibold text-slate-900 flex items-center gap-2">
                          <span className="text-sky-700 font-bold">{hoveredPoint.month} Performance: {hoveredPoint.score}%</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-600">{hoveredPoint.filings} Filings Certified</span>
                        </div>
                        <p className="text-slate-600 mt-0.5 leading-snug">{hoveredPoint.note}</p>
                      </div>
                    ) : (
                      <div className="text-slate-500 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Hover over any data point along the trend line to inspect monthly secretarial audit outcomes and filing tallies.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: Interactive Services Utilized Pie / Donut Chart */}
              {activeTab === 'services' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Advisory & Compliance Portfolio Distribution</span>
                    <span className="text-slate-400">Hover slices to view details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    
                    {/* Donut Visualizer */}
                    <div className="sm:col-span-5 flex justify-center">
                      <div className="relative w-32 h-32">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          {/* Slices rendered with strokeDasharray */}
                          {/* Slice 1: 36% (starts at 0) */}
                          <circle
                            cx="18" cy="18" r="15.915"
                            fill="transparent"
                            stroke="#0A2540"
                            strokeWidth="5"
                            strokeDasharray="36 64"
                            strokeDashoffset="0"
                            onMouseEnter={() => setHoveredSlice(SERVICES_PIE[0])}
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                          />
                          {/* Slice 2: 28% (offset 36) */}
                          <circle
                            cx="18" cy="18" r="15.915"
                            fill="transparent"
                            stroke="#0284C7"
                            strokeWidth="5"
                            strokeDasharray="28 72"
                            strokeDashoffset="-36"
                            onMouseEnter={() => setHoveredSlice(SERVICES_PIE[1])}
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                          />
                          {/* Slice 3: 20% (offset 64) */}
                          <circle
                            cx="18" cy="18" r="15.915"
                            fill="transparent"
                            stroke="#0F766E"
                            strokeWidth="5"
                            strokeDasharray="20 80"
                            strokeDashoffset="-64"
                            onMouseEnter={() => setHoveredSlice(SERVICES_PIE[2])}
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                          />
                          {/* Slice 4: 16% (offset 84) */}
                          <circle
                            cx="18" cy="18" r="15.915"
                            fill="transparent"
                            stroke="#C5A059"
                            strokeWidth="5"
                            strokeDasharray="16 84"
                            strokeDashoffset="-84"
                            onMouseEnter={() => setHoveredSlice(SERVICES_PIE[3])}
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                          />
                        </svg>

                        {/* Center metric */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-base font-bold text-slate-900">
                            {hoveredSlice ? `${hoveredSlice.percent}%` : '100%'}
                          </span>
                          <span className="text-[9px] text-slate-500 uppercase tracking-wider">
                            {hoveredSlice ? 'Share' : 'Portfolio'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Legend list */}
                    <div className="sm:col-span-7 space-y-1.5 text-xs">
                      {SERVICES_PIE.map((slice) => (
                        <div
                          key={slice.name}
                          onMouseEnter={() => setHoveredSlice(slice)}
                          onMouseLeave={() => setHoveredSlice(null)}
                          className={`p-2 rounded-lg cursor-pointer transition-all flex items-center justify-between ${
                            hoveredSlice?.name === slice.name
                              ? 'bg-white shadow-xs border border-slate-200'
                              : 'hover:bg-white/60'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-2.5 h-2.5 rounded-full shrink-0" 
                              style={{ backgroundColor: slice.color }} 
                            />
                            <span className="font-medium text-slate-800 text-[11px] truncate max-w-[150px]">
                              {slice.name}
                            </span>
                          </div>
                          <span className="font-bold text-slate-700 text-xs">
                            {slice.percent}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contextual Explanation Tooltip */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-xs min-h-[56px] flex items-center">
                    {hoveredSlice ? (
                      <div>
                        <div className="font-semibold text-slate-900 flex items-center gap-2">
                          <span>{hoveredSlice.name} ({hoveredSlice.percent}%)</span>
                          <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                            {hoveredSlice.regulations}
                          </span>
                        </div>
                        <p className="text-slate-600 mt-0.5 leading-snug">{hoveredSlice.detail}</p>
                      </div>
                    ) : (
                      <div className="text-slate-500 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Hover over any category above to see statutory mandates and advisory deliverables.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: Simulated Real-Time Regulatory News Feeds */}
              {activeTab === 'news' && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live Statutory Bulletins
                    </span>
                    <span className="text-slate-400">Synced via MCA & SEBI Radars</span>
                  </div>

                  <div className="space-y-2">
                    {NEWS_SNIPPETS.map((item) => (
                      <div
                        key={item.id}
                        onMouseEnter={() => setHoveredNews(item)}
                        onMouseLeave={() => setHoveredNews(null)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          hoveredNews?.id === item.id
                            ? 'bg-[#F8F6F1] border-[#E8E4DA] shadow-xs'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100/60'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/60">
                            {item.tag}
                          </span>
                          <span className="text-slate-400 text-[10px]">{item.timeAgo}</span>
                        </div>
                        <h4 className="text-xs font-semibold text-slate-900 leading-snug">
                          {item.headline}
                        </h4>
                        <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                          <span>Source: {item.source}</span>
                          <span className="text-slate-700 font-medium hover:underline flex items-center gap-0.5">
                            Details <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contextual Explanation Tooltip */}
                  {hoveredNews && (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-xs">
                      <span className="font-semibold text-slate-900">Governance Advisory Impact:</span>
                      <p className="text-slate-600 mt-0.5 leading-snug">{hoveredNews.explanation}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Console Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  Client Confidentiality Guaranteed
                </span>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="text-sky-700 hover:text-sky-900 font-semibold flex items-center gap-1"
                >
                  <span>Request Full Audit</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
