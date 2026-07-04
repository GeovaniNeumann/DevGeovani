/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LaserField from "./components/LaserField";
import LaserDivider from "./components/LaserDivider";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ContactModal from "./components/ContactModal";

// Lazy loading para componentes pesados (opcional)
// const ContactModal = lazy(() => import("./components/ContactModal"));

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Memoizar callbacks para evitar re-renders desnecessários
  const handleOpenContactWithPlan = useCallback((planName: string) => {
    setSelectedPlan(planName);
    setIsContactOpen(true);
  }, []);

  const handleOpenGeneralContact = useCallback(() => {
    setSelectedPlan(null);
    setIsContactOpen(true);
  }, []);

  const handleCloseContact = useCallback(() => {
    setIsContactOpen(false);
    // Pequeno delay para limpar o estado após o fechamento da modal
    setTimeout(() => setSelectedPlan(null), 300);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-dark text-ink font-sans selection:bg-red-brand selection:text-ink antialiased overflow-x-hidden">
      {/* Background Animated Laser Field */}
      <LaserField />

      {/* Floating Navbar Overlaying Hero */}
      <Header onOpenContact={handleOpenGeneralContact} />

      {/* Hero Section with Full Screen Background Image */}
      <Hero onOpenContact={handleOpenGeneralContact} />

      {/* Laser-guided divider pulse */}
      <LaserDivider />

      {/* Interactive Typewriter Live Terminal Section */}
      <Terminal />

      <LaserDivider />

      {/* Services Section */}
      <Services />

      <LaserDivider />

      {/* Development Process step-by-step Timeline */}
      <Process />

      <LaserDivider />

      <LaserDivider />

      {/* Pricing and quotations cards */}
      <Pricing onSelectPlan={handleOpenContactWithPlan} />

      <LaserDivider />

      {/* Accordion FAQ Section */}
      <FAQ />

      {/* Final Call to Action and Footer */}
      <Footer onOpenContact={handleOpenGeneralContact} />

      {/* Pulsing Quick WhatsApp Float Trigger */}
      <WhatsAppFloat />

      {/* Contact Form Popup Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={handleCloseContact}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}