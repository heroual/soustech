'use client';

import Layout from '@/components/layout/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import FTTRSection from '@/components/services/FTTRSection';
import SmartHomeSection from '@/components/services/SmartHomeSection';
import SecuritySection from '@/components/services/SecuritySection';
import NetworkSection from '@/components/services/NetworkSection';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <Layout>
      <div className="mt-20">
        <ServiceHero />
        <FTTRSection />
        <SmartHomeSection />
        <SecuritySection />
        <NetworkSection />
        <ServicesCTA />
      </div>
    </Layout>
  );
}