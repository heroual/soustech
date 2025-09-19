'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, Star, Award, Zap, Users, CheckCircle, Target, ArrowUpRight, Shield, Eye, ThumbsUp } from 'lucide-react';

const ClientResults = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    {
      icon: TrendingUp,
      title: "Amélioration Performance",
      value: "950%",
      description: "Augmentation moyenne de débit",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Clock,
      title: "Temps d'Installation",
      value: "24h",
      description: "Délai moyen de réalisation",
      color: "from-blue-600 to-blue-500"
    },
    {
      icon: Star,
      title: "Satisfaction Client",
      value: "98%",
      description: "Taux de recommandation",
      color: "from-blue-700 to-blue-600"
    },
    {
      icon: Award,
      title: "Projets Réussis",
      value: "500+",
      description: "Installations sans incident",
      color: "from-blue-800 to-blue-700"
    }
  ];

  const testimonialStats = [
    {
      client: "Villa Smart Home",
      result: "30% d'économie d'énergie",
      detail: "Réduction facture électrique mensuelle",
      icon: Zap,
      color: "bg-blue-100 text-blue-800"
    },
    {
      client: "Bureau FTTR",
      result: "10x plus rapide",
      detail: "Vitesse internet multipliée",
      icon: ArrowUpRight,
      color: "bg-blue-100 text-blue-800"
    },
    {
      client: "Restaurant Sécurisé",
      result: "0 incident",
      detail: "Depuis l'installation",
      icon: Shield,
      color: "bg-blue-100 text-blue-800"
    },
    {
      client: "Café Connecté",
      result: "+40% satisfaction",
      detail: "Amélioration expérience client",
      icon: ThumbsUp,
      color: "bg-blue-100 text-blue-800"
    },
    {
      client: "Appartement FTTR",
      result: "100% invisible",
      detail: "Installation sans perçage",
      icon: Eye,
      color: "bg-blue-100 text-blue-800"
    },
    {
      client: "Maison Complète",
      result: "Autonomie totale",
      detail: "Gestion énergétique optimisée",
      icon: Star,
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Performance Garantie",
      description: "Résultats mesurables et durables",
      examples: ["Débit multiplié par 10", "Latence réduite de 90%", "Disponibilité 99.9%"]
    },
    {
      icon: Users,
      title: "Satisfaction Client",
      description: "Service personnalisé et suivi qualité",
      examples: ["Accompagnement dédié", "Formation incluse", "Support 24/7"]
    },
    {
      icon: CheckCircle,
      title: "Qualité d'Installation",
      description: "Standards professionnels élevés",
      examples: ["Certification ISO", "Garantie 10 ans", "Contrôle qualité"]
    },
    {
      icon: Target,
      title: "Objectifs Atteints",
      description: "Réponse précise aux besoins",
      examples: ["Cahier des charges respecté", "Délais tenus", "Budget maîtrisé"]}
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
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6"
          >
            Résultats Clients
            <span className="block text-blue-500">
              & Impact Mesurable
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-800 font-medium max-w-3xl mx-auto"
          >
            Des chiffres qui parlent : découvrez l'impact concret de nos solutions 
            sur la performance et le quotidien de nos clients.
          </motion.p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r from-blue-600 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h4>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {testimonialStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3"><stat.icon className="h-6 w-6 text-blue-500" /></span>
                <h4 className="font-bold text-gray-900">{stat.client}</h4>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.result}</div>
              <p className="text-gray-600">{stat.detail}</p>
              <span className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800`}>
                Résultat vérifié
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Breakdown */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              Pourquoi nos Clients Nous Choisissent
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Des résultats concrets et durables qui font la différence au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-300 mb-4 text-sm">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.examples.map((example, exIndex) => (
                    <div key={exIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-300 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientResults;