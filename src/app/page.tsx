'use client';

import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactCTASection from '@/components/sections/ContactCTASection';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactCTASection />
    </Layout>
  );
}
