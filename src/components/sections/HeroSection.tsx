'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/sousstech.png"
        alt="Smart Home Technology"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 h-full w-full"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white mb-9"
        >
          Le Futur de la Maison Connectée
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-200 font-medium max-w-3xl mx-auto mb-12"
        >
          Transformez votre maison grâce à nos solutions intelligentes pour un quotidien plus sûr, plus efficace et plus confortable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/services" className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}>
            Découvrir nos Service
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;