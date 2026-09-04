import React from 'react';
import { CustomizerProvider } from './context/CustomizerContext';
import { WorkspaceProvider } from './context/WorkspaceContext';
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
      <WorkspaceProvider>
        <div className="relative min-h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900">
          {/* Subtle architectural canvas */}
          <CyberBackground />

          {/* Global Floating Modals & Customizers */}
          <ConsultationModal />
          <CustomizerDrawer />

          {/* Sticky Navigation */}
          <Navbar />

          {/* Main Content Flow */}
          <main className="relative z-10">
            {/* 1. Hero Section with Real-Time Compliance Feeds & Interactive Charts */}
            <HeroSection />

            {/* 2. Trust / Statistics Section */}
            <StatsSection />

            {/* 3. About Section */}
            <AboutSection />

            {/* 4. Services Section with Direct Enquiry Triggers */}
            <ServicesSection />

            {/* 5. Interactive Services Explorer (Compliance Journey) */}
            <JourneyExplorer />

            {/* 6. Why Choose Us */}
            <WhyChooseUs />

            {/* 7. How It Works (Process Timeline) */}
            <ProcessTimeline />

            {/* 8. Industries Served */}
            <IndustriesSection />

            {/* 9. Compliance Dashboard Preview */}
            <ComplianceDashboardPreview />

            {/* 10. Testimonials */}
            <TestimonialsSection />

            {/* 11. FAQ Section */}
            <FaqSection />

            {/* 12. Insights / Resources Section with Subtle Animations */}
            <InsightsSection />

            {/* 13. Contact Section Connected to Google Sheets & Gmail */}
            <ContactSection />
          </main>

          {/* 14. Footer */}
          <Footer />
        </div>
      </WorkspaceProvider>
    </CustomizerProvider>
  );
}
