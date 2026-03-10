/**
 * HomePage Component
 * Главная страница лендинга
 */

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ExcludedSection } from "@/components/sections/ExcludedSection";
import { FormSection } from "@/components/sections/FormSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DiscountSection } from "@/components/sections/DiscountSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AuditSection } from "@/components/sections/AuditSection";
import { ContactSection } from "@/components/sections/ContactSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PurposeSection />
      <CaseStudySection />
      <WhyUsSection />
      <ExcludedSection />
      <FormSection />
      <BenefitsSection />
      <ServicesSection />
      <DiscountSection />
      <PortfolioSection />
      <FAQSection />
      <PartnersSection />
      <ReviewsSection />
      <AuditSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
