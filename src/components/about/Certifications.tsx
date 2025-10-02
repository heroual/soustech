'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import Image from 'next/image';
import { Users, CheckCircle, Star, Zap } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      name: "Certification ISO 27001",
      description: "Système de management de la sécurité de l'information",
      icon: "/images/certif/ISO27001.jpg",
      color: "from-blue-500 to-blue-400",
      year: "2023"
    },
    {
      name: "Certification FTTR",
      description: "Spécialiste agréé Fiber to The Room",
      icon: "/images/certif/FTTR-CERTIF.jpg",
      color: "from-blue-500 to-blue-400",
      year: "2022"
    },
    {
      name: "Installateur Agréé",
      description: "Certification professionnelle domotique",
      icon: "/images/certif/INSTALLATEUR-DOMOTIQUE-AGREER.jpg",
      color: "from-blue-600 to-blue-500",
      year: "2021"
    },
    {
      name: "Label Qualité",
      description: "Service après-vente de qualité certifié",
      icon: "/images/certif/label-qualite.jpg",
      color: "from-blue-700 to-blue-600",
      year: "2023"
    }
  ];

  const partners = [
    {
      name: "Cisco",
      description: "Partenaire réseau premium",
      logo: "/images/partenariats/cisco.jpg",
      category: "Réseaux"
    },
    {
      name: "Hikvision",
      description: "Solutions de surveillance",
      logo: "/images/partenariats/HIKVISION.jpg",
      category: "Sécurité"
    },
    {
      name: "Schneider Electric",
      description: "Automatisation et énergie",
      logo: "/images/partenariats/SCHNEIDER.jpg",
      category: "Domotique"
    },
    {
      name: "Ubiquiti",
      description: "Solutions Wi-Fi professionnelles",
      logo: "/images/partenariats/Ubiquiti_Logo.png",
      category: "Connectivité"
    },
    {
      name: "Legrand",
      description: "Installations électriques",
      logo: "/images/partenariats/LEGRAND.jpg",
      category: "Infrastructure"
    },
    {
      name: "Axis",
      description: "Caméras IP intelligentes",
      logo: "/images/partenariats/AXIS.jpg",
      category: "Surveillance"
    }
  ];

  const quality = [
    {
      icon: Users,
      title: "Formation continue",
      description: "nos techniciens maîtrisent les dernières technologies."
    },
    {
      icon: CheckCircle,
      title: "Contrôle qualité rigoureux",
      description: "chaque installation est vérifiée pour assurer performance et sécurité."
    },
    {
      icon: Star,
      title: "Satisfaction client",
      description: "un suivi personnalisé pour garantir votre entière satisfaction."
    },
    {
      icon: Zap,
      title: "Intervention rapide",
      description: "support technique disponible pour toute assistance."
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
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-[#2B3A8A]">
            Certifications & Partenariats
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed"
          >
            Nos solutions s’appuient sur des technologies certifiées et reconnues par les plus grandes marques du secteur, garantissant fiabilité et performance.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="relative w-16 h-16 mx-auto mb-4"><Image src={cert.icon} alt={`${cert.name} logo`} layout="fill" objectFit="cover" className="rounded-full" /></div>
              <h3 className="text-lg font-bold text-[#2B3A8A] mb-2">{cert.name}</h3>
              <p className="text-gray-900 text-sm mb-3">{cert.description}</p>
              <div className={`inline-block bg-gradient-to-r ${cert.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                {cert.year}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-[#2B3A8A] mb-12 font-poppins">
            Nos Partenaires Technologiques
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="relative h-16 mb-4"><Image src={partner.logo} alt={`${partner.name} logo`} layout="fill" objectFit="contain" /></div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{partner.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{partner.description}</p>
                <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  {partner.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        </div>

        {/* Quality Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#070908] py-20 md:py-32 px-8 md:px-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-poppins text-white">
              Garantie Qualité & Excellence
            </h3>
            <p className="text-xl text-gray-200 font-medium max-w-3xl mx-auto">
              Nous appliquons des standards élevés sur chaque projet et nous engageons à améliorer continuellement nos services pour garantir des installations fiables et durables.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quality.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </section>
  );
};

export default Certifications;