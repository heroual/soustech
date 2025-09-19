'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Wifi, Eye, Gauge, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const FTTRSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Gauge,
      title: "Vitesse Ultra-Rapide",
      description: "Jusqu'à 10 Gbit/s symétrique pour tous vos appareils",
      stat: "10x plus rapide"
    },
    {
      icon: Eye,
      title: "Installation Invisible",
      description: "Câblage esthétique sans perçage ni goulotte apparente",
      stat: "0 perçage"
    },
    {
      icon: Wifi,
      title: "Couverture Totale",
      description: "Signal optimal dans toutes les pièces de votre habitation",
      stat: "100% couverture"
    },
    {
      icon: CheckCircle,
      title: "Latence Minimale",
      description: "Performance optimale pour gaming et télétravail",
      stat: "< 1ms latence"
    }
  ];

  const features = [
    "Débit symétrique jusqu'à 10 Gbit/s",
    "Installation sans perçage ni dégradation",
    "Câblage invisible et esthétique",
    "Compatible avec tous les opérateurs",
    "Évolutif et modulaire",
    "Garantie 10 ans sur l'installation",
    "Support technique inclus",
    "Certification professionnelle"
  ];

  return (
    <section id="fttr" ref={ref} className="bg-gray-50 min-h-screen">
      <div className="container-padding max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6 text-center">
            Internet Ultra-Rapide – FTTR (Fiber to The Room)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            La nouvelle génération de connectivité au Maroc : la fibre optique dans chaque pièce, sans perçage et sans câbles visibles.

Pourquoi choisir FTTR plutôt qu’un câblage classique ?Pourquoi Choisir FTTR plutôt qu’un câblage classique ?
          </p>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional vs FTTR */}
            <div className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Câblage Traditionnel</h3>
              <ul className="space-y-3">
                {
                  [
                    "Perçage et goulotte visibles",
                    "Débit limité par le cuivre",
                    "Perte de signal sur distance",
                    "Installation complexe et salissante"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Notre Solution FTTR</h3>
              <ul className="space-y-3">
                {
                  [
                    "Installation invisible et sans perçage",
                    "Débit fibre jusqu’à 10 Gbit/s symétriques",
                    "Signal parfait dans chaque pièce",
                    "Installation propre et rapide",
                    "Garantie 10 ans + support inclus"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3" />
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 flex justify-center">
            <Link
              href="/contact"
              className="btn-futuristic-primary" style={{ backgroundColor: 'white', color: 'black' }}
            >
              Demander un devis gratuit
            </Link>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{advantage.stat}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">{advantage.title}</h4>
              <p className="text-gray-600 text-sm text-center">{advantage.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-[#070908] p-8 md:p-12"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-6 font-poppins text-center text-white">
              Pourquoi Choisir Notre FTTR ?
            </h3>
            <p className="text-xl text-gray-200 font-medium mb-6 text-center">
              Notre technologie FTTR représente l'avenir de la connectivité résidentielle. 
              Plus besoin de compromis entre esthétique et performance !
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="btn-futuristic-primary" style={{ background: 'white', color: '#070908' }}
              >
                Demander un Devis
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-200 mr-3 flex-shrink-0" />
                <span className="text-blue-100">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FTTRSection;