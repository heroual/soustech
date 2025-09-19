'use client';

import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Testimonials from '@/components/about/Testimonials';
import Certifications from '@/components/about/Certifications';
import TeamSection from '@/components/about/TeamSection';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <Layout>
      <div className="mt-20">
        <AboutHero />
        <WhyChooseUs />
        <Testimonials />
        <Certifications />
        <TeamSection />
        <AboutCTA />
      </div>
    </Layout>
  );
}