'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      name: "Certification ISO 27001",
      description: "Système de management de la sécurité de l'information",
      icon: Shield,
      color: "from-blue-500 to-blue-400",
      year: "2023"
    },
    {
      name: "Certification FTTR",
      description: "Spécialiste agréé Fiber to The Room",
      icon: Award,
      color: "from-blue-500 to-blue-400",
      year: "2022"
    },
    {
      name: "Installateur Agréé",
      description: "Certification professionnelle domotique",
      icon: CheckCircle,
      color: "from-blue-600 to-blue-500",
      year: "2021"
    },
    {
      name: "Label Qualité",
      description: "Service après-vente de qualité certifié",
      icon: Star,
      color: "from-blue-700 to-blue-600",
      year: "2023"
    }
  ];

  const partners = [
    {
      name: "Cisco",
      description: "Partenaire réseau premium",
      logo: "🌐",
      category: "Réseaux"
    },
    {
      name: "Hikvision",
      description: "Solutions de surveillance",
      logo: "📹",
      category: "Sécurité"
    },
    {
      name: "Schneider Electric",
      description: "Automatisation et énergie",
      logo: "⚡",
      category: "Domotique"
    },
    {
      name: "Ubiquiti",
      description: "Solutions Wi-Fi professionnelles",
      logo: "📡",
      category: "Connectivité"
    },
    {
      name: "Legrand",
      description: "Installations électriques",
      logo: "🔌",
      category: "Infrastructure"
    },
    {
      name: "Axis",
      description: "Caméras IP intelligentes",
      logo: "👁️",
      category: "Surveillance"
    }
  ];

  const quality = [
    {
      title: "Formation Continue",
      description: "Nos techniciens suivent des formations régulières sur les dernières technologies",
      stat: "40h/an"
    },
    {
      title: "Contrôle Qualité",
      description: "Chaque installation fait l'objet d'un contrôle qualité approfondi",
      stat: "100%"
    },
    {
      title: "Satisfaction Client",
      description: "Taux de satisfaction client basé sur les enquêtes post-installation",
      stat: "98%"
    },
    {
      title: "Résolution Incidents",
      description: "Temps moyen de résolution des incidents techniques",
      stat: "< 4h"
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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Certifications
            <span className="block text-blue-500">
              & Partenariats
            </span>
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Notre expertise reconnue par les plus grandes marques et organismes 
            de certification du secteur technologique.
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
              <div className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
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
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-poppins">
            Nos Partenaires Technologiques
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-2">{partner.logo}</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{partner.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{partner.description}</p>
                <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  {partner.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-blue-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              Garantie Qualité & Excellence
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Des standards de qualité élevés et un engagement constant 
              vers l'amélioration de nos services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quality.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;