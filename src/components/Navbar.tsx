import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2,
  FileSpreadsheet,
  Mail,
  Sparkles,
  ExternalLink,
  LogIn
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';
import { useWorkspace } from '../context/WorkspaceContext';

export const Navbar: React.FC = () => {
  const { config, setIsConsultationOpen, setIsCustomizerOpen } = useCustomizer();
  const { user, signInWithGoogle, isConnecting, connectedSheetLink } = useWorkspace();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#home' },
    { name: 'Practice', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Compliance Journey', href: '#journey' },
    { name: 'Client Portal', href: '#dashboard-preview' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Subtle Executive Status Bar */}
      <div className="w-full bg-[#F5F2EB] border-b border-[#E8E4DA] py-1.5 px-4 sm:px-8 text-xs text-slate-600 flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-[11px] uppercase tracking-wider">MCA-21 & SEBI Compliance:</span>
            <span className="text-[11px] text-emerald-700 font-medium">Real-Time Registry Synced</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 border-l border-[#DFDACF] pl-4 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>Statutory Audit Readiness: <strong className="text-slate-800 font-semibold">100% Verified</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          {/* Google Sheets / Gmail status indicator */}
          {user ? (
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-0.5 rounded-full font-medium">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span className="hidden sm:inline">Google Workspace Connected</span>
              {connectedSheetLink && (
                <a
                  href={connectedSheetLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-emerald-700 hover:text-emerald-900 underline ml-1"
                  title="Open live Google Sheet"
                >
                  <FileSpreadsheet className="w-3 h-3" />
                  <span className="hidden md:inline">Live Sheet</span>
                </a>
              )}
            </div>
          ) : (
            <button
              onClick={() => signInWithGoogle()}
              disabled={isConnecting}
              className="flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-2.5 py-0.5 rounded-full font-medium transition-all shadow-xs cursor-pointer"
              title="Connect your Google Account to sync enquiries directly to Google Sheets & Gmail"
            >
              <LogIn className="w-3 h-3 text-sky-700" />
              <span>{isConnecting ? 'Connecting...' : 'Connect Sheets & Gmail'}</span>
            </button>
          )}

          <span className="text-slate-300 hidden sm:inline">|</span>
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="hidden sm:inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Firm Details</span>
          </button>
        </div>
      </div>

      {/* Main Clean Executive Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] border-slate-200'
            : 'bg-white/80 backdrop-blur-sm py-4 border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0A2540] text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-[#0284C7] transition-colors">
              CS
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-base text-slate-900 tracking-tight group-hover:text-sky-800 transition-colors">
                  {config.companyName}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                {config.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-[#0A2540] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A2540] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="btn-primary-navy px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book Consultation</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-3.5 py-1.5 bg-[#0A2540] text-white font-medium text-xs rounded-md sm:hidden"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-md bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
            >
              <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="p-2.5 rounded-lg text-xs font-medium text-slate-700 hover:text-[#0A2540] hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsConsultationOpen(true);
                  }}
                  className="w-full py-3 bg-[#0A2540] text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book a Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                {!user && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signInWithGoogle();
                    }}
                    className="w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-700 font-medium text-xs rounded-lg flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-3.5 h-3.5 text-sky-700" />
                    <span>Connect Google Sheets & Gmail</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
