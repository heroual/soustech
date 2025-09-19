'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Home, Zap, Shield } from 'lucide-react';

const PortfolioHero = () => {
  const achievements = [
    { icon: Zap, label: 'FTTR', count: '150+', color: 'text-primary-light' },
    { icon: Home, label: 'Smart Home', count: '200+', color: 'text-primary-light' },
    { icon: Shield, label: 'Sécurité', count: '100+', color: 'text-primary-light' },
    { icon: Camera, label: 'Surveillance', count: '75+', color: 'text-primary-light' },
  ];

  return (
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/portfolio.png"
        alt="Portfolio Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 h-full w-full"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-center" style={{ color: 'white' }}>
            Nos Réalisations
            <span className="block">
              & Projets
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-medium max-w-3xl mx-auto mb-12"
          style={{ color: 'white' }}
        >
          Découvrez nos projets les plus marquants et les transformations 
          technologiques que nous avons réalisées pour nos clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/portfolio" className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}>
            Nos Projets
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;