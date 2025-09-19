'use client';

import Layout from '@/components/layout/Layout';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactMethods from '@/components/contact/ContactMethods';
import MapSection from '@/components/contact/MapSection';
import FAQSection from '@/components/contact/FAQSection';

export default function ContactPage() {
  return (
    <Layout>
      <div className="mt-20">
        <ContactHero />
        <ContactForm />
        <ContactMethods />
        <MapSection />
        <FAQSection />
      </div>
    </Layout>
  );
}