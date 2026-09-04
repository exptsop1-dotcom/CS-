import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  Activity, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

export const Navbar: React.FC = () => {
  const { config, setIsConsultationOpen, setIsCustomizerOpen } = useCustomizer();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#journey' },
    { name: 'Dashboard', href: '#dashboard-preview' },
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
      {/* Top Telemetry Status Bar */}
      <div className="w-full bg-[#020408]/95 border-b border-white/10 py-1.5 px-4 sm:px-8 text-[11px] font-mono text-slate-400 flex items-center justify-between z-50 relative backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#00D4FF]">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF] animate-pulse"></span>
            <span className="font-bold tracking-[0.15em] text-[10px] uppercase">MCA-21 V3 ENGINE:</span>
            <span className="text-white text-[10px] tracking-wider">ACTIVE & SYNCED</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-400 border-l border-white/10 pl-4 text-[10px] tracking-widest font-mono">
            <Activity className="w-3 h-3 text-[#00D4FF]" />
            <span className="opacity-70">STATUTORY RADAR:</span>
            <span className="text-white font-bold">0 CRITICAL FLAGS</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-[#00D4FF] transition-colors text-[10px] bg-white/5 px-2.5 py-1 border border-white/10 rounded-none cursor-pointer tracking-wider uppercase font-mono"
          >
            <Sparkles className="w-2.5 h-2.5 text-[#00D4FF]" />
            <span>PLACEHOLDER CONFIG</span>
          </button>
          <span className="text-white/20">|</span>
          <span className="text-slate-400 font-mono text-[10px] tracking-wider">{config.regNumber}</span>
        </div>
      </div>

      {/* Main Technical Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 border-b border-white/10 ${
          isScrolled
            ? 'bg-[#020408]/90 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-[#020408]/60 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3.5 cursor-pointer"
          >
            {/* High-tech Diamond Logo Emblem */}
            <div className="relative w-8 h-8 border border-[#00D4FF] rounded-none rotate-45 flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-300 bg-[#00D4FF]/5 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <div className="w-3 h-3 bg-[#00D4FF]" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg tracking-[0.15em] uppercase text-white group-hover:text-[#00D4FF] transition-colors">
                  {config.companyName}
                </span>
                <span className="text-[#00D4FF] font-mono font-black text-sm">.CS</span>
              </div>
              <p className="text-[9px] text-slate-400 tracking-[0.25em] uppercase font-mono -mt-0.5">
                CORPORATE GOVERNANCE DATA GRID
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-slate-300 hover:text-[#00D4FF] hover:bg-white/5 transition-all rounded-none relative group font-mono"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00D4FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="tech-btn-outline-cyan px-5 py-2 text-xs font-bold tracking-[0.18em] uppercase cursor-pointer flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]"
            >
              <span>Book Consultation</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-3 py-1.5 bg-[#00D4FF] text-black font-bold text-[11px] uppercase tracking-wider rounded-none sm:hidden"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-[#00D4FF] rounded-none bg-white/5 border border-white/10"
              aria-label="Toggle menu"
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
              className="lg:hidden border-b border-white/10 bg-[#020408]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3"
            >
              <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="p-2.5 rounded-none border border-white/5 text-xs uppercase tracking-widest font-mono text-slate-200 hover:text-[#00D4FF] hover:bg-white/5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsConsultationOpen(true);
                  }}
                  className="w-full py-3 bg-[#00D4FF] text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.3)] rounded-none"
                >
                  <span>Book a Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCustomizerOpen(true);
                  }}
                  className="w-full py-2.5 bg-transparent border border-white/20 text-slate-300 font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 rounded-none hover:border-[#00D4FF]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>Customize Placeholders & Firm Name</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
