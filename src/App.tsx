import React from 'react';
import { CustomizerProvider } from './context/CustomizerContext';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { JourneyExplorer } from './components/JourneyExplorer';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { IndustriesSection } from './components/IndustriesSection';
import { ComplianceDashboardPreview } from './components/ComplianceDashboardPreview';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CustomizerDrawer } from './components/CustomizerDrawer';

export default function App() {
  return (
    <CustomizerProvider>
      <div className="relative min-h-screen bg-[#020408] text-slate-100 font-sans selection:bg-[#00D4FF]/30 selection:text-[#00D4FF]">
        {/* Subtle Cyber Grid & Ambient Canvas */}
        <CyberBackground />

        {/* Global Floating Modals & Customizers */}
        <ConsultationModal />
        <CustomizerDrawer />

        {/* Sticky Glassmorphic Navigation */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="relative z-10">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Trust / Statistics Section */}
          <StatsSection />

          {/* 3. About Section */}
          <AboutSection />

          {/* 4. Services Section */}
          <ServicesSection />

          {/* 5. Interactive Services Explorer (Compliance Journey) */}
          <JourneyExplorer />

          {/* 6. Why Choose Us */}
          <WhyChooseUs />

          {/* 7. How It Works (Process Timeline) */}
          <ProcessTimeline />

          {/* 8. Industries Served */}
          <IndustriesSection />

          {/* 9. Compliance Dashboard Preview (Prototype) */}
          <ComplianceDashboardPreview />

          {/* 10. Testimonials */}
          <TestimonialsSection />

          {/* 11. FAQ Section */}
          <FaqSection />

          {/* 12. Insights / Resources Section */}
          <InsightsSection />

          {/* 13. Contact Section */}
          <ContactSection />
        </main>

        {/* 14. Footer */}
        <Footer />
      </div>
    </CustomizerProvider>
  );
}
