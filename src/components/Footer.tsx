import React, { useState } from 'react';
import { ShieldCheck, Linkedin, Twitter, Globe, ArrowUp, X, Sparkles } from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

export const Footer: React.FC = () => {
  const { config, setIsCustomizerOpen } = useCustomizer();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020408] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 font-mono">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-lg text-white tracking-widest uppercase">
                {config.companyName}
              </span>
            </div>

            <p className="text-[#00D4FF] font-mono text-xs uppercase tracking-wider font-semibold">
              "{config.tagline}"
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Practicing Company Secretary firm delivering corporate compliance intelligence, secretarial audits, board governance, and statutory filings for modern enterprises.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setIsCustomizerOpen(true)}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#00D4FF] hover:text-white bg-white/5 px-3 py-1.5 rounded-none border border-white/10 hover:border-[#00D4FF] transition-colors cursor-pointer uppercase tracking-wider"
              >
                <Sparkles className="w-3 h-3" />
                <span>Edit Prototype Placeholders</span>
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-[10px] font-mono text-white uppercase font-bold tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#home" className="hover:text-[#00D4FF] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00D4FF] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D4FF] transition-colors">Services</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#00D4FF] transition-colors">Compliance Journey</a>
              </li>
              <li>
                <a href="#dashboard-preview" className="hover:text-[#00D4FF] transition-colors">Portal Dashboard</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#00D4FF] transition-colors">Corporate Insights</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00D4FF] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Services */}
          <div>
            <h4 className="text-[10px] font-mono text-white uppercase font-bold tracking-widest mb-4">
              Secretarial Services
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#services" className="hover:text-[#00D4FF] transition-colors">Company Incorporation</a></li>
              <li><a href="#services" className="hover:text-[#00D4FF] transition-colors">Annual MCA Filings</a></li>
              <li><a href="#services" className="hover:text-[#00D4FF] transition-colors">Secretarial Audit (MR-3)</a></li>
              <li><a href="#services" className="hover:text-[#00D4FF] transition-colors">Corporate Restructuring</a></li>
              <li><a href="#services" className="hover:text-[#00D4FF] transition-colors">FEMA & FDI Compliance</a></li>
              <li><a href="#services" className="hover:text-[#00D4FF] transition-colors">Board Meeting Advisory</a></li>
            </ul>
          </div>

          {/* Col 5: Statutory Credentials */}
          <div>
            <h4 className="text-[10px] font-mono text-white uppercase font-bold tracking-widest mb-4">
              Practice Profile
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-3 rounded-none bg-white/5 border border-white/10 text-[10px] font-mono">
                <div className="text-slate-500 uppercase tracking-wider">ICSI COP NUMBER:</div>
                <div className="text-[#00D4FF] font-bold mt-0.5 tracking-wider">{config.regNumber}</div>
              </div>
              <div className="p-3 rounded-none bg-white/5 border border-white/10 text-[10px] font-mono">
                <div className="text-slate-500 uppercase tracking-wider">HEADQUARTERS:</div>
                <div className="text-white mt-0.5 tracking-wider">{config.location}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[10px] text-slate-500 leading-relaxed font-mono">
          <p>
            STATUTORY NOTICE & DISCLAIMER: This website is a modern prototype demonstration platform for professional Company Secretary (CS) and corporate governance practices. The contents are intended purely for institutional governance information and do not constitute an advertisement or solicitation in violation of ICSI Code of Professional Conduct. All client records and advisory briefs are preserved under strict professional confidentiality.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © 2026 <span className="text-white font-bold">{config.companyName}</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#00D4FF] transition-colors cursor-pointer uppercase tracking-wider"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#00D4FF] transition-colors cursor-pointer uppercase tracking-wider"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#00D4FF] text-slate-300 transition-colors cursor-pointer uppercase tracking-wider"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-mono">
          <div className="relative w-full max-w-lg bg-[#020408] border border-white/10 rounded-none p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                {legalModal === 'privacy' ? 'Client Confidentiality & Privacy Policy' : 'Terms & Statutory Engagement'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-slate-400 hover:text-white rounded-none border border-white/10 hover:border-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 text-xs text-slate-300 space-y-3 leading-relaxed max-h-80 overflow-y-auto font-sans">
              <p>
                <strong className="font-mono text-white">1. Confidentiality:</strong> All company documents, director KYC documents, capitalization data, and draft board resolutions received by {config.companyName} are treated with privileged fiduciary confidentiality.
              </p>
              <p>
                <strong className="font-mono text-white">2. Data Encryption:</strong> Secretarial records, Digital Signature Certificates (DSC tokens), and MCA portal credentials are stored using AES-256 equivalent cryptographic protocols.
              </p>
              <p>
                <strong className="font-mono text-white">3. ICSI Standards:</strong> All professional secretarial assignments strictly adhere to the guidelines formulated by the Institute of Company Secretaries of India (ICSI).
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-right font-mono">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-none bg-[#00D4FF] hover:bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
