'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Zap, Target, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "500+", label: "Projets Réalisés", icon: Target },
    { number: "98%", label: "Clients Satisfaits", icon: Users },
    { number: "5+", label: "Années d'Expérience", icon: Award },
    { number: "24/7", label: "Support Technique", icon: Zap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section ref={ref} className="section-padding-bottom bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center section-title-spacing"
        >
          <motion.h2
            variants={itemVariants}
            className="mt-[100px] text-4xl md:text-5xl font-bold font-poppins text-[#293786] mb-6"
          >
            Votre partenaire en domotique et sécurité
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-800 font-medium max-w-3xl mx-auto"
          >
            Depuis plus de 5 ans, SoussTech accompagne particuliers et entreprises dans leur transformation numérique et l’installation de solutions connectées. Notre expertise en FTTR, domotique et sécurité intelligente fait de nous un leader des solutions connectées au Maroc.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 section-spacing"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-medium hover:shadow-large transition-all duration-300 group"
            >
              <div className="bg-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Notre Mission et Expertise Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mt-16 lg:mt-20 bg-[#070908] rounded-none overflow-hidden shadow-2xl relative border-y border-white/10 group card-hover-effect"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent z-0"></div>
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse-glow"></div>
        <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse-glow delay-700"></div>
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-cover opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10 p-8 lg:p-12">
          <h3 className="text-4xl md:text-5xl text-white mb-4 mt-8">
            Notre Mission et Expertise
          </h3>
          <p className="text-xl text-gray-200 font-medium mb-12 text-center">
            Chez SoussTech, nous rendons les technologies intelligentes accessibles et fiables pour tous au Maroc. Chaque espace mérite d’être connecté, sécurisé et optimisé, c’est pourquoi nous accompagnons nos clients de la conception à l’installation avec des solutions sur mesure, performantes et durables. Notre équipe d’experts met son savoir-faire au service de chaque projet en garantissant une expertise technique certifiée, des solutions personnalisées, une installation professionnelle ainsi qu’un support client réactif et inclus.
          </p>
          {/* Standardized Image Gallery */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 section-spacing"
          >
            {[
              {
                src: '/images/technican-install-smart.jpg',
                alt: 'Maison connectée'
              },
              {
                src: '/images/phone-control-sound.jpg',
                alt: 'Contrôle mobile'
              },
              {
                src: '/images/modern-smart-home-management-systems.jpg',
                alt: 'Systèmes de gestion'
              },
              {
                src: '/images/wireless-automation-control.jpg',
                alt: 'Automatisation sans fil'
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-large group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={250}
                  height={160}
                  className="image-gallery"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center section-spacing"
          >
            <Link
              href="/contact"
              className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
            >
              Demander un Devis Gratuit
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;