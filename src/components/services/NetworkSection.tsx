'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Network, 
  Wifi, 
  Server, 
  Settings, 
  Zap, 
  Shield,
  CheckCircle,
  Clock,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const NetworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const networkServices = [
    {
      icon: Network,
      title: "Conception Réseau",
      description: "Architecture réseau optimisée pour vos besoins",
      features: ["Audit infrastructure", "Plan d'architecture", "Optimisation débit", "Évolutivité garantie"]
    },
    {
      icon: Wifi,
      title: "Wi-Fi Professionnel",
      description: "Couverture Wi-Fi haute performance",
      features: ["Wi-Fi 6E/7", "Couverture optimale", "Roaming transparent", "Gestion centralisée"]
    },
    {
      icon: Server,
      title: "Solutions IoT",
      description: "Intégration d'objets connectés",
      features: ["Capteurs intelligents", "Collecte de données", "Automatisation", "Tableau de bord"]
    },
    {
      icon: Settings,
      title: "Maintenance IT",
      description: "Support et maintenance préventive",
      features: ["Surveillance 24/7", "Maintenance préventive", "Mise à jour sécurité", "Support technique"]
    }
  ];

  const iotSolutions = [
    {
      icon: Zap,
      title: "Gestion Énergétique",
      description: "Monitoring et optimisation de la consommation énergétique",
      color: "from-blue-400 to-blue-300"
    },
    {
      icon: Shield,
      title: "Sécurité Connectée",
      description: "Intégration de capteurs de sécurité intelligents",
      color: "from-blue-600 to-blue-500"
    },
    {
      icon: Settings,
      title: "Automatisation",
      description: "Automatisation des processus et équipements",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Network,
      title: "Connectivité",
      description: "Infrastructure réseau pour objets connectés",
      color: "from-blue-700 to-blue-600"
    }
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Assistance technique disponible en permanence",
      stat: "24h/24"
    },
    {
      icon: Headphones,
      title: "Hotline Dédiée",
      description: "Ligne directe avec nos experts techniques",
      stat: "< 2min"
    },
    {
      icon: Settings,
      title: "Maintenance Préventive",
      description: "Surveillance proactive de votre infrastructure",
      stat: "99.9%"
    },
    {
      icon: Zap,
      title: "Intervention Rapide",
      description: "Résolution d'incidents dans les meilleurs délais",
      stat: "< 4h"
    }
  ];

  return (
    <section id="network" ref={ref} className="section-padding bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 p-4 rounded-2xl">
              <Network className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6 text-center">
            Réseaux & IT – Solutions Professionnelles
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            Conception, optimisation et maintenance de réseaux hautes performances pour particuliers et entreprises au Maroc.
          </p>
        </motion.div>

        <Image
          src="/images/jiji/networking-switch.jpg"
          alt="Networking Switch"
          width={1200}
          height={675}
          className="rounded-xl shadow-lg mb-16 w-full h-[400px] object-cover"
        />

        {/* Network Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {networkServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base text-center">{service.description}</p>
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-gray-600 text-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* New Section: Nos services Réseaux & IT (Moved and Modified) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 text-gray-900 mb-12 sm:mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Nos services Réseaux & IT */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-3xl font-bold mb-6 font-poppins text-center">
                Nos services Réseaux & IT :
              </h3>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Conception & audit réseau (architecture optimisée, évolutive)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Wi-Fi professionnel (Wi-Fi 6E/7, couverture complète, roaming fluide)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Solutions IoT (capteurs, automatisation, gestion énergétique)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintenance IT & support 24/7 (surveillance proactive, intervention rapide)</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Engagement qualité */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-3xl font-bold mb-6 font-poppins text-center">
                Engagement qualité :
              </h3>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Support technique disponible 24/7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintenance préventive (99,9% disponibilité)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Intervention en moins de 4h en cas de problème</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Solutions sécurisées et conformes aux normes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
            >
              Demander un audit gratuit
            </Link>
          </div>
        </motion.div>

        {/* IoT Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 font-poppins">
            Solutions IoT & Domotique
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {iotSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className={`bg-gradient-to-r ${solution.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 text-center">{solution.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm text-center">{solution.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {supportFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="bg-blue-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{feature.stat}</div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">{feature.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-600 rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-poppins">
            Optimisez Votre Infrastructure IT
          </h3>
          <p className="text-xl text-blue-100 font-medium mb-6 sm:mb-8 max-w-3xl mx-auto">
            Faites confiance à nos experts pour concevoir, déployer et maintenir 
            votre infrastructure réseau. Solutions sur-mesure et support technique de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
            >
              Audit Gratuit
            </Link>
            <Link
              href="/portfolio"
              className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
            >
              Nos Références
            </Link>
          </div>
        </motion.div>
      
      </div>
    </section>
  );
};

export default NetworkSection;