'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  Rocket, 
  Headphones, 
  CheckCircle,
  Clock,
  Star,
  Award
} from 'lucide-react';
import Image from 'next/image';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Rapidité ⚡",
      description: "Installation ultra-rapide sans interruption",
      details: "Nos équipes d'experts réalisent vos installations en un temps record, avec un minimum de dérangement pour votre quotidien.",
      stats: "Installation en 24h"
    },
    {
      icon: Shield,
      title: "Sécurité 🔒",
      description: "Technologies de pointe et normes strictes",
      details: "Toutes nos solutions respectent les normes de sécurité les plus strictes avec des composants certifiés et une maintenance préventive.",
      stats: "Norme ISO 27001"
    },
    {
      icon: Rocket,
      title: "Innovation 🚀",
      description: "Solutions d'avant-garde et technologies émergentes",
      details: "Nous intégrons les dernières innovations technologiques pour vous offrir des solutions futureproof et évolutives.",
      stats: "Technologie Wi-Fi 7"
    },
    {
      icon: Headphones,
      title: "Support 24/7 📞",
      description: "Assistance technique disponible en permanence",
      details: "Notre équipe de support technique est disponible 24h/24 et 7j/7 pour résoudre vos problèmes et répondre à vos questions.",
      stats: "Temps de réponse < 2min"
    }
  ];

  const advantages = [
    {
      icon: Star,
      title: "Satisfaction Garantie",
      description: "98% de nos clients recommandent nos services",
      stat: "98%"
    },
    {
      icon: Award,
      title: "Expertise Certifiée",
      description: "Techniciens certifiés et formation continue",
      stat: "5+ ans"
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Délai d'intervention garanti sous 4h",
      stat: "< 4h"
    },
    {
      icon: CheckCircle,
      title: "Garantie Étendue",
      description: "Garantie constructeur + garantie installation",
      stat: "10 ans"
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
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-center">
            Nos Valeurs
            <span className="block gradient-text">
              & Engagements
            </span>
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Ce qui nous distingue : un engagement total envers l'excellence, 
            l'innovation et la satisfaction de nos clients.
          </motion.p>
        </motion.div>

        <Image
          src="/images/jiji/jeune-femme-utilisant-la-technologie-domestique.jpg"
          alt="Young woman using smart home technology"
          width={1200}
          height={675}
          className="rounded-xl shadow-lg mb-16 w-full h-[400px] object-cover"
        />

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-medium hover:shadow-large transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins text-center">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-gray-800 font-medium mb-4 text-center">
                  {feature.description}
                </p>

                <p className="text-gray-500 text-sm mb-4 text-center">
                  {feature.details}
                </p>

                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center">
                  {feature.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 text-center group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{advantage.stat}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{advantage.title}</h4>
              <p className="text-gray-600 text-sm text-center">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;