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
    <footer className="relative bg-[#0A2540] text-slate-300 pt-16 pb-12 overflow-hidden text-left border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-wide">
                {config.companyName}
              </span>
            </div>

            <p className="text-sky-300 text-xs uppercase tracking-wider font-semibold">
              "{config.tagline}"
            </p>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Practicing Company Secretary firm delivering corporate compliance intelligence, secretarial audits, board governance, and statutory filings for modern enterprises.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setIsCustomizerOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Customizer & Prototype Settings</span>
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs text-white uppercase font-bold tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Practice Areas</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">Compliance Journey</a>
              </li>
              <li>
                <a href="#dashboard-preview" className="hover:text-white transition-colors">Client Portal</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">Insights & Articles</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Services */}
          <div>
            <h4 className="text-xs text-white uppercase font-bold tracking-wider mb-4">
              Practicing Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Company Registration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">GST Filing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Annual Compliance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">ROC Filing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Trademark Registration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Legal Advisory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tax Filing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Audit Support</a></li>
            </ul>
          </div>

          {/* Col 5: Statutory Credentials */}
          <div>
            <h4 className="text-xs text-white uppercase font-bold tracking-wider mb-4">
              Firm Credentials
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-slate-400 text-[10px] uppercase font-medium">CS REGISTRATION NO:</div>
                <div className="text-white font-bold mt-0.5">{config.regNumber}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-slate-400 text-[10px] uppercase font-medium">ESTABLISHED:</div>
                <div className="text-white font-bold mt-0.5">{config.yearEstablished} ({config.firmType})</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-slate-400 text-[10px] uppercase font-medium">HEAD OFFICE:</div>
                <div className="text-white mt-0.5">{config.city}, {config.state}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-b border-slate-700/60 text-xs text-slate-400 leading-relaxed">
          <p>
            STATUTORY NOTICE & DISCLAIMER: This website is an executive demonstration platform for professional Company Secretary (CS) and corporate governance practices. The contents are intended for corporate information and do not constitute an advertisement or solicitation in violation of the ICSI Code of Professional Conduct. All client consultations and records are maintained under attorney-client confidentiality.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            © 2026 <span className="text-white font-semibold">{config.companyName}</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white text-slate-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-7 shadow-xl text-left border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {legalModal === 'privacy' ? 'Client Confidentiality & Privacy Policy' : 'Terms of Statutory Engagement'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-slate-400 hover:text-slate-800 rounded-lg border border-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed max-h-80 overflow-y-auto">
              <p>
                <strong className="text-slate-900">1. Confidentiality:</strong> All statutory records, director KYC credentials, capitalization data, and draft board minutes received by {config.companyName} are treated with privileged fiduciary confidentiality.
              </p>
              <p>
                <strong className="text-slate-900">2. Data Security:</strong> Secretarial records, Digital Signature Certificates (DSC tokens), and MCA portal credentials are kept under high-security safeguards.
              </p>
              <p>
                <strong className="text-slate-900">3. ICSI Standards:</strong> All professional secretarial assignments strictly adhere to the standards and ethics formulated by the Institute of Company Secretaries of India (ICSI).
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="btn-primary-navy px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
