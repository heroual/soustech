'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Zap, Check, X } from 'lucide-react';

const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeComparison, setActiveComparison] = useState(0);

  const comparisons = [
    {
      title: "Installation FTTR - Appartement Haussmannien",
      category: "FTTR",
      before: {
        title: "Avant : Câblage Traditionnel",
        image: "🏠❌",
        problems: [
          "Câbles apparents et inesthétiques",
          "Débit limité à 100 Mbit/s",
          "Perçages dans les murs historiques",
          "Installation complexe et salissante"
        ],
        color: "from-gray-400 to-gray-300"
      },
      after: {
        title: "Après : Solution FTTR",
        image: "🏠✨",
        benefits: [
          "Installation 100% invisible",
          "Débit fibre 1 Gbit/s partout",
          "Aucun perçage nécessaire",
          "Installation propre en 1 journée"
        ],
        color: "from-blue-500 to-blue-400"
      },
      results: {
        speed: "10x plus rapide",
        satisfaction: "Client ravi",
        time: "1 jour d'installation"
      }
    },
    {
      title: "Transformation Smart Home - Villa Moderne",
      category: "Smart Home",
      before: {
        title: "Avant : Maison Traditionnelle",
        image: "🏘️⚡",
        problems: [
          "Éclairage manuel uniquement",
          "Facture électrique élevée",
          "Pas de programmation possible",
          "Contrôle difficile à distance"
        ],
        color: "from-gray-400 to-gray-300"
      },
      after: {
        title: "Après : Maison Intelligente",
        image: "🏘️🤖",
        benefits: [
          "Éclairage automatisé intelligent",
          "30% d'économie d'énergie",
          "Programmation par scénarios",
          "Contrôle mobile complet"
        ],
        color: "from-blue-500 to-blue-400"
      },
      results: {
        savings: "30% d'économie",
        automation: "50 points automatisés",
        control: "App mobile unifiée"
      }
    },
    {
      title: "Sécurisation Restaurant - Surveillance Intelligente",
      category: "Sécurité",
      before: {
        title: "Avant : Sécurité Basique",
        image: "🍽️👁️",
        problems: [
          "2 caméras anciennes seulement",
          "Qualité d'image médiocre",
          "Pas d'accès distant",
          "Nombreuses fausses alertes"
        ],
        color: "from-gray-400 to-gray-300"
      },
      after: {
        title: "Après : Surveillance IA",
        image: "🍽️🛡️",
        benefits: [
          "12 caméras 4K intelligentes",
          "Qualité Ultra HD jour/nuit",
          "Accès mobile temps réel",
          "IA anti-fausses alertes"
        ],
        color: "from-blue-500 to-blue-400"
      },
      results: {
        coverage: "100% du restaurant",
        quality: "4K Ultra HD",
        alerts: "90% moins de fausses alertes"
      }
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
    <section ref={ref} className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins text-gray-anthracite mb-6"
          >
            Avant / Après
            <span className="block text-blue-500">
              Transformations
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-800 font-medium max-w-3xl mx-auto"
          >
            Découvrez les transformations spectaculaires réalisées chez nos clients. 
            Des solutions qui changent vraiment la donne.
          </motion.p>
        </motion.div>

        {/* Comparison Tabs */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {comparisons.map((comparison, index) => (
            <button
              key={index}
              onClick={() => setActiveComparison(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${ 
                activeComparison === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-gray-100 shadow-md'
              }`}
            >
              {comparison.category}
            </button>
          ))}
        </motion.div>

        {/* Active Comparison */}
        <motion.div
          key={activeComparison}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Title */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">
              {comparisons[activeComparison].title}
            </h3>
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
              {comparisons[activeComparison].category}
            </span>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Before */}
            <div className="p-8 border-r border-gray-100">
              <div className={`bg-gray-100 rounded-2xl p-6 text-gray-800 mb-6`}>
                <div className="text-4xl text-center mb-4">
                  <X className="h-12 w-12 mx-auto text-gray-400" />
                </div>
                <h4 className="text-xl font-bold text-center">
                  {comparisons[activeComparison].before.title}
                </h4>
              </div>

              <div className="space-y-3">
                {comparisons[activeComparison].before.problems.map((problem, index) => (
                  <div key={index} className="flex items-center">
                    <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="p-8">
              <div className={`bg-blue-100 rounded-2xl p-6 text-blue-800 mb-6`}>
                <div className="text-4xl text-center mb-4">
                  <Check className="h-12 w-12 mx-auto text-blue-500" />
                </div>
                <h4 className="text-xl font-bold text-center">
                  {comparisons[activeComparison].after.title}
                </h4>
              </div>

              <div className="space-y-3">
                {comparisons[activeComparison].after.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
            <h4 className="text-xl font-bold text-center mb-6">Résultats Obtenus</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {Object.entries(comparisons[activeComparison].results).map(([key, value], index) => (
                <div key={index}>
                  <div className="text-2xl font-bold mb-1">{value}</div>
                  <div className="text-blue-200 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center items-center mt-8 space-x-4"
        >
          <button
            onClick={() => setActiveComparison((prev) => (prev - 1 + comparisons.length) % comparisons.length)}
            className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5 text-gray-700 transform rotate-180" />
          </button>
          
          <div className="flex space-x-2">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveComparison(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${ 
                  index === activeComparison ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setActiveComparison((prev) => (prev + 1) % comparisons.length)}
            className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;