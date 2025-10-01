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
      details: "Nos experts réalisent vos installations en un temps record, avec un minimum d’impact sur votre quotidien.",
      stats: "Installation sous 24h"
    },
    {
      icon: Shield,
      title: "Sécurité 🔒",
      description: "Technologies fiables et normes strictes",
      details: "Toutes nos solutions respectent les standards les plus élevés, avec des composants certifiés et une maintenance préventive.",
      stats: "Conforme à la norme ISO 27001"
    },
    {
      icon: Rocket,
      title: "Innovation 🚀",
      description: "Technologies de pointe et solutions évolutives",
      details: "Nous intégrons les dernières innovations pour garantir des systèmes performants, durables et prêts pour l’avenir.",
      stats: "Technologie Wi-Fi 7 intégrée"
    },
    {
      icon: Headphones,
      title: "Support 24/7 📞",
      description: "Assistance technique continue",
      details: "Notre équipe reste disponible 24h/24 et 7j/7 pour répondre à vos questions et résoudre tout incident rapidement.",
      stats: "Temps de réponse < 2 min"
    }
  ];

  const advantages = [
    {
      icon: Star,
      title: "Recommandée par nos clients",
      description: "La qualité de nos services est prouvée : 98 % de nos clients nous recommandent.",
      stat: "Satisfaction Garantie – 98%"
    },
    {
      icon: Award,
      title: "Compétences reconnues",
      description: "Des techniciens qualifiés, formés en continu pour garantir un haut niveau d’expertise.",
      stat: "Expertise\nCertifiée – 5+ ans"
    },
    {
      icon: Clock,
      title: "Assistance sur site garantie",
      description: "Nos équipes interviennent en moins de 4 heures en cas de besoin.",
      stat: "Intervention\nRapide – < 4h"
    },
    {
      icon: CheckCircle,
      title: "Fiabilité sur le long terme",
      description: "Bénéficiez d’une garantie constructeur complétée par notre garantie d’installation.",
      stat: "Garantie\nÉtendue – 10 ans"
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
    <section ref={ref} className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-center text-[#2B3A8A]">
            Nos Valeurs & Engagements
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Nous croyons que chaque espace, qu’il soit résidentiel ou professionnel, mérite d’être connecté, sécurisé et optimisé.
            Notre approche repose sur trois principes essentiels : excellence technique, innovation continue et satisfaction client.
            <br /><br />
            Avec des solutions fiables et évolutives, nous accompagnons chaque projet pour garantir performance, confort et tranquillité d’esprit.
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
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

                <div className="text-center">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {feature.stats}
                  </div>
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
              <div className="text-2xl font-bold text-gray-900 mb-2 whitespace-pre-line">{advantage.stat}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{advantage.title}</h4>              <p className="text-gray-600 text-sm text-center">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;