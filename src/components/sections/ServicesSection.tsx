'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Zap, 
  Home, 
  Shield, 
  Network, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 'fttr',
      title: 'FTTR – Fiber to The Room',
      description: 'Connexion ultra-rapide et invisible, directement dans chaque pièce.',
      icon: Zap,
      image: '/images/technican-install-smart.jpg',
      features: [
        'Débit jusqu’à 10 Gbit/s',
        'Installation sans perçage',
        'Latence minimale'
      ]
    },
    {
      id: 'smart-home',
      title: 'Smart Home – Domotique',
      description: 'Contrôlez toute votre maison depuis votre smartphone ou par la voix.',
      icon: Home,
      image: '/images/tablet-control.jpg',
      features: [
        'Éclairage, volets, chauffage automatisés',
        'Application intuitive',
        'Économies d’énergie garanties'
      ]
    },
    {
      id: 'security',
      title: 'Caméras & Sécurité',
      description: 'Surveillance intelligente 24/7 avec alertes instantanées et notifications en temps réel.',
      icon: Shield,
      image: '/images/camera-outside.jpg',
      features: [
        'Détection IA avancée',
        'Accès sécurisé à distance',
        'Stockage cloud protégé'
      ]
    },
    {
      id: 'network',
      title: 'Réseaux & IT',
      description: 'Réseaux fiables et performants pour particuliers & entreprises.',
      icon: Network,
      image: '/images/technican-install-control-panel.jpg',
      features: [
        'Solutions IoT personnalisées',
        'Support technique 24/7',
        'Maintenance préventive'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section ref={ref} className="section-padding-top bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center section-title-spacing"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#2B3A8A] mb-8 font-poppins"
          >
            Nos Solutions Intelligentes
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Des technologies de pointe, adaptées&nbsp;à&nbsp;vos&nbsp;besoins.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 section-spacing"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 group relative overflow-hidden card-hover-effect border border-gray-100"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/60 to-transparent z-0"></div>
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-cover opacity-5 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                {/* Standardized Service Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="image-service"
                  />
                  <div className="absolute top-4 left-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="bg-gradient-to-br from-primary to-primary-light w-12 h-12 rounded-lg flex items-center justify-center shadow-medium shadow-primary/20 group-hover:scale-110 transition-all duration-300"
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-poppins text-center relative group-hover:text-primary transition-colors duration-300 text-high-contrast" data-text={service.title}>
                  {service.title}
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2 mx-auto group-hover:w-24 transition-all duration-500 opacity-80"></div>
                </h3>
                
                <p className="text-gray-800 mb-6 leading-relaxed text-lg text-center font-medium text-contrast-high">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-center group-hover:translate-x-1 transition-all duration-300 animate-text-pulse" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                      <span className="text-primary flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-900 font-medium text-base text-contrast-high">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href={`/services#${service.id}`}
                    className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
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
            Prêt à transformer votre maison ou votre entreprise au Maroc ?
          </h3>
          <p className="text-xl text-gray-200 font-medium mb-12 mx-auto text-center" style={{ maxWidth: '1230px' }}>
            Nos experts vous accompagnent de la conception à l’installation de vos solutions connectées : FTTR, domotique, caméras de sécurité et réseaux intelligents.
            Demandez dès maintenant votre devis gratuit et personnalisé.
          </p>
          <div className="flex justify-center mb-12">
            <Link
              href="/contact"
              className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;