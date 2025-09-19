'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Users, Award, Zap, Settings } from 'lucide-react';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Alexandre Dubois",
      role: "Directeur Technique",
      expertise: "FTTR & Réseaux",
      experience: "12 ans",
      description: "Expert en infrastructures réseau et spécialiste FTTR. Ancien ingénieur chez Orange Business.",
      avatar: "AD",
      color: "from-blue-500 to-blue-400"
    },
    {
      name: "Sarah Martin",
      role: "Responsable Domotique",
      expertise: "Smart Home & IoT",
      experience: "8 ans",
      description: "Spécialiste en solutions domotiques et objets connectés. Certifiée KNX et Z-Wave.",
      avatar: "SM",
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "Thomas Laurent",
      role: "Expert Sécurité",
      expertise: "Surveillance & Sécurité",
      experience: "10 ans",
      description: "Expert en systèmes de surveillance intelligente. Formation sécurité électronique CNPP.",
      avatar: "TL",
      color: "from-blue-700 to-blue-600"
    },
    {
      name: "Julie Chen",
      role: "Cheffe de Projet",
      expertise: "Gestion & Coordination",
      experience: "6 ans",
      description: "Coordination des équipes et gestion de projets complexes. Certification PMP.",
      avatar: "JC",
      color: "from-blue-800 to-blue-700"
    }
  ];

  const teamStats = [
    {
      icon: Users,
      title: "Équipe d'Experts",
      description: "Techniciens certifiés et expérimentés",
      stat: "15+"
    },
    {
      icon: Award,
      title: "Années d'Expérience",
      description: "Moyenne d'expérience de l'équipe",
      stat: "8 ans"
    },
    {
      icon: Zap,
      title: "Projets Réalisés",
      description: "Installations réussies à ce jour",
      stat: "500+"
    },
    {
      icon: Settings,
      title: "Technologies Maîtrisées",
      description: "Différentes technologies et protocoles",
      stat: "25+"
    }
  ];

  const values = [
    {
      title: "Expertise Technique",
      description: "Formation continue sur les dernières technologies et certifications professionnelles"
    },
    {
      title: "Service Client",
      description: "Accompagnement personnalisé et support technique de qualité"
    },
    {
      title: "Innovation",
      description: "Veille technologique constante et adoption des solutions d'avant-garde"
    },
    {
      title: "Qualité",
      description: "Standards élevés d'installation et garantie satisfaction client"
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
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6"
          >
            Notre Équipe
            <span className="block text-blue-500">
              d'Experts
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-800 font-medium max-w-3xl mx-auto"
          >
            Une équipe passionnée de professionnels expérimentés, 
            dédiée à vous offrir les meilleures solutions technologiques.
          </motion.p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.stat}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <Image
          src="/images/jiji/our-team.jpg"
          alt="Our Team"
          width={1200}
          height={675}
          className="rounded-xl shadow-lg mb-16 w-full h-[400px] object-cover"
          priority
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className={`bg-gradient-to-r ${member.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-xl">{member.avatar}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
              
              <div className={`inline-block bg-gradient-to-r ${member.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                {member.experience}
              </div>
              
              <p className="text-gray-500 text-xs leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Values */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              Nos Valeurs d'Équipe
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Ce qui unit notre équipe et guide notre approche professionnelle 
              au quotidien.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;