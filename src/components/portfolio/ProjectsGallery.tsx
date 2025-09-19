'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, Users, Zap, Home, Shield, Network, Eye, ExternalLink } from 'lucide-react';

const ProjectsGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Villa Moderne - Smart Home Complète",
      category: "Smart Home",
      location: "Neuilly-sur-Seine",
      date: "Décembre 2023",
      duration: "3 jours",
      client: "Famille Martin",
      description: "Installation complète de domotique dans une villa de 250m² avec gestion éclairage, chauffage, volets et sécurité.",
      features: ["50 points lumineux automatisés", "Thermostat intelligent", "15 volets motorisés", "Système sécurité intégré"],
      image: "🏠",
      color: "from-blue-500 to-blue-400",
      icon: Home,
      results: "30% d'économie d'énergie",
      satisfaction: "5/5"
    },
    {
      id: 2,
      title: "Bureau Entreprise - FTTR & Réseau",
      category: "FTTR + Réseaux",
      location: "La Défense",
      date: "Novembre 2023",
      duration: "2 jours",
      client: "TechCorp SAS",
      description: "Déploiement FTTR et infrastructure réseau pour 200 postes de travail avec Wi-Fi 6E professionnel.",
      features: ["FTTR 10 Gbit/s", "50 points d'accès Wi-Fi 6E", "Réseau sécurisé VLAN", "Monitoring temps réel"],
      image: "🏢",
      color: "from-blue-600 to-blue-500",
      icon: Zap,
      results: "10x plus rapide",
      satisfaction: "5/5"
    },
    {
      id: 3,
      title: "Restaurant - Système Sécurité",
      category: "Sécurité",
      location: "Paris 1er",
      date: "Octobre 2023",
      duration: "1 jour",
      client: "Brasserie Le Gourmet",
      description: "Installation système de surveillance intelligent avec 12 caméras 4K et détection IA pour sécuriser l'établissement.",
      features: ["12 caméras 4K", "Détection de mouvement IA", "Accès mobile", "Stockage cloud sécurisé"],
      image: "🍽️",
      color: "from-blue-700 to-blue-600",
      icon: Shield,
      results: "0 incident depuis",
      satisfaction: "5/5"
    },
    {
      id: 4,
      title: "Appartement Haussmannien - FTTR",
      category: "FTTR",
      location: "Paris 8ème",
      date: "Septembre 2023",
      duration: "1 jour",
      client: "M. & Mme Dubois",
      description: "Installation FTTR invisible dans appartement haussmannien sans perçage, préservant l'esthétique.",
      features: ["Installation sans perçage", "Câblage invisible", "12 prises FTTR", "Débit symétrique 1 Gbit/s"],
      image: "🏛️",
      color: "from-blue-800 to-blue-700",
      icon: Zap,
      results: "100% invisible",
      satisfaction: "5/5"
    },
    {
      id: 5,
      title: "Café Connecté - IoT & Wi-Fi",
      category: "IoT",
      location: "Montmartre",
      date: "Août 2023",
      duration: "2 jours",
      client: "Café des Arts",
      description: "Transformation en café connecté avec Wi-Fi clients, système de commande tactile et gestion IoT.",
      features: ["Wi-Fi public sécurisé", "Bornes de commande", "Capteurs IoT", "Gestion énergétique"],
      image: "☕",
      color: "from-blue-900 to-blue-800",
      icon: Network,
      results: "+40% satisfaction client",
      satisfaction: "5/5"
    },
    {
      id: 6,
      title: "Maison Connectée - Écosystème Complet",
      category: "Smart Home",
      location: "Boulogne-Billancourt",
      date: "Juillet 2023",
      duration: "4 jours",
      client: "Famille Chen",
      description: "Écosystème domotique complet avec FTTR, Smart Home, sécurité et gestion énergétique intelligente.",
      features: ["FTTR + Domotique", "20 caméras intelligentes", "Panneaux solaires connectés", "App mobile unifiée"],
      image: "🌟",
      color: "from-blue-950 to-blue-900",
      icon: Home,
      results: "Maison 100% autonome",
      satisfaction: "5/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Projets Récents
            <span className="block text-blue-500">
              & Réalisations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets les plus récents et les solutions innovantes 
            que nous avons mises en place pour nos clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image/Icon */}
              <div className={`bg-gradient-to-r ${project.color} p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-12 -translate-y-12"></div>
                <div className="text-6xl mb-4"><project.icon className="h-16 w-16 text-white mx-auto" /></div>
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <project.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className={`bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold`}>
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    Installation en {project.duration}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    {project.client}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Points clés :</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center">
                        <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{project.results}</div>
                    <div className="text-xs text-gray-500">Résultat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{project.satisfaction}</div>
                    <div className="text-xs text-gray-500">Satisfaction</div>
                  </div>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Voir plus</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal would go here */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn ml-2 text-base font-poppins focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Fermer le projet"
                >
                  ✕
                </button>
              </div>
              
              <div className={`bg-gradient-to-r ${selectedProject.color} rounded-2xl p-6 text-white mb-6`}>
                <div className="text-4xl mb-4 text-center"><selectedProject.icon className="h-12 w-12 text-white mx-auto" /></div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><MapPin className="h-4 w-4 inline-block mr-2" />{selectedProject.location}</div>
                  <div><Calendar className="h-4 w-4 inline-block mr-2" />{selectedProject.date}</div>
                  <div><Users className="h-4 w-4 inline-block mr-2" />{selectedProject.duration}</div>
                  <div><Users className="h-4 w-4 inline-block mr-2" />{selectedProject.client}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Caractéristiques techniques :</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-2 h-2 bg-blue-500 rounded-full mr-3`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedProject.results}</div>
                  <div className="text-sm text-gray-500">Résultat obtenu</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedProject.satisfaction}</div>
                  <div className="text-sm text-gray-500">Satisfaction client</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;