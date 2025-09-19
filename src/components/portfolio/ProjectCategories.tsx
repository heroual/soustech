'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap, Home, Shield, Network, Grid } from 'lucide-react';

const ProjectCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'Tous les Projets',
      icon: Grid,
      count: 525,
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'fttr',
      name: 'FTTR',
      icon: Zap,
      count: 150,
      color: 'from-blue-600 to-blue-500'
    },
    {
      id: 'smart-home',
      name: 'Smart Home',
      icon: Home,
      count: 200,
      color: 'from-blue-500 to-blue-400'
    },
    {
      id: 'security',
      name: 'Sécurité',
      icon: Shield,
      count: 100,
      color: 'from-blue-700 to-blue-600'
    },
    {
      id: 'network',
      name: 'Réseaux IT',
      icon: Network,
      count: 75,
      color: 'from-blue-800 to-blue-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Explorez Nos
            <span className="block text-blue-500">
              Domaines d'Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Filtrez nos réalisations par catégorie pour découvrir 
            nos solutions dans votre domaine d'intérêt.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter(category.id)}
              className={`btn font-poppins text-base transition-all duration-300 text-center group p-4 rounded-2xl ${ 
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 shadow-md hover:shadow-lg hover:bg-gray-100'
              }`}
              aria-pressed={activeFilter === category.id}
              aria-label={`Filtrer par ${category.name}`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${ 
                activeFilter === category.id ? 'bg-white/20' : 'bg-blue-100'
              }`}>
                <category.icon className={`h-8 w-8 ${ 
                  activeFilter === category.id ? 'text-white' : 'text-blue-600'
                }`} />
              </div>
              
              <h3 className={`text-lg font-bold mb-1 ${ 
                activeFilter === category.id ? 'text-white' : 'text-gray-900'
              }`}>
                {category.name}
              </h3>
              
              <p className={`text-xl font-medium ${
                activeFilter === category.id ? 'text-blue-200' : 'text-gray-500'
              }`}>
                {category.count} projet{category.count > 1 ? 's' : ''}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCategories;