'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { } from 'lucide-react';

const AboutHero = () => {
  

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Apropos.png"
        alt="About Us Background"
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
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-9 font-poppins" style={{ color: 'white' }}>
            Pourquoi Choisir
            <span className="block">
              SoussTech ?
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white font-medium max-w-3xl mx-auto mb-12"
          style={{ color: 'white' }}
        >
          Découvrez pourquoi SoussTech est le partenaire idéal pour vos projets de technologies intelligentes et connectées.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/about" className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}>
            En Savoir Plus
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;