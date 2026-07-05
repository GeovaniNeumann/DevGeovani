/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LaserField from "./components/LaserField";
import LaserDivider from "./components/LaserDivider";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ContactModal from "./components/ContactModal";

// Lazy loading para componentes pesados
const Terminal = lazy(() => import("./components/Terminal"));
const Services = lazy(() => import("./components/Services"));
const Process = lazy(() => import("./components/Process"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

// Componente de fallback
const Loader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setTimeout(() => setSelectedPlan(null), 300);
  }, []);

  const handleMenuToggle = useCallback((isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-500 selection:text-white antialiased overflow-x-hidden">
      <LaserField />

      <Header 
        onOpenContact={handleOpenGeneralContact}
        onMenuToggle={handleMenuToggle}
      />

      <Hero onOpenContact={handleOpenGeneralContact} />

      <LaserDivider />

      <Suspense fallback={<Loader />}>
        <Terminal />
      </Suspense>

      <LaserDivider />

      <Suspense fallback={<Loader />}>
        <Services />
      </Suspense>

      <LaserDivider />

      <Suspense fallback={<Loader />}>
        <Process />
      </Suspense>

      <LaserDivider />
      <LaserDivider />

      <Suspense fallback={<Loader />}>
        <Pricing onSelectPlan={handleOpenContactWithPlan} />
      </Suspense>

      <LaserDivider />

      <Suspense fallback={<Loader />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Footer onOpenContact={handleOpenGeneralContact} />
      </Suspense>

      <WhatsAppFloat isMenuOpen={isMenuOpen} />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={handleCloseContact}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}