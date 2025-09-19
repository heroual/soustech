'use client';

import Layout from '@/components/layout/Layout';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import ProjectsGallery from '@/components/portfolio/ProjectsGallery';
import BeforeAfter from '@/components/portfolio/BeforeAfter';
import ProjectCategories from '@/components/portfolio/ProjectCategories';
import ClientResults from '@/components/portfolio/ClientResults';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="mt-20">
        <PortfolioHero />
        <ProjectCategories />
        <ProjectsGallery />
        <BeforeAfter />
        <ClientResults />
        <PortfolioCTA />
      </div>
    </Layout>
  );
}