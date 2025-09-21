'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Fatima Zahraoui",
      role: "Propriétaire de villa",
      location: "Casablanca",
      content: "L'installation FTTR de SoussTech a révolutionné notre quotidien ! Internet ultra-rapide dans toutes les pièces sans aucun perçage. L'équipe est professionnelle et l'installation a été réalisée en une matinée. Parfait !",
      rating: 5,
      service: "FTTR",
      avatar: "FZ"
    },
    {
      name: "Ahmed El Fassi",
      role: "Gérant de restaurant",
      location: "Marrakech",
      content: "Les caméras de surveillance installées par SoussTech nous donnent une tranquillité d'esprit totale. La qualité d'image est exceptionnelle et l'application mobile très intuitive. Support technique toujours disponible.",
      rating: 5,
      service: "Sécurité",
      avatar: "AE"
    },
    {
      name: "Sara Benani",
      role: "Architecte d'intérieur",
      location: "Rabat",
      content: "La solution Smart Home de SoussTech s'intègre parfaitement dans mes projets. Mes clients adorent pouvoir contrôler éclairage, chauffage et sécurité depuis leur smartphone. Installation invisible et très esthétique.",
      rating: 5,
      service: "Smart Home",
      avatar: "SB"
    },
    {
      name: "Youssef Alaoui",
      role: "Directeur IT, Maroc Telecom",
      location: "Rabat",
      content: "SoussTech a optimisé notre infrastructure réseau et intégré des solutions IoT innovantes. Leur expertise technique est remarquable et le support 24/7 nous assure une continuité de service parfaite.",
      rating: 5,
      service: "Réseaux IT",
      avatar: "YA"
    },
    {
      name: "Khadija Mansouri",
      role: "Particulier",
      location: "Agadir",
      content: "Installation domotique complète réalisée par SoussTech. Automatisation parfaite, économies d'énergie visibles dès le premier mois. L'équipe a su s'adapter à nos besoins spécifiques. Très recommandé !",
      rating: 5,
      service: "Domotique",
      avatar: "KM"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section ref={ref} className="py-20 bg-[#070908]">
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
            className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6"
          >
            Témoignages de nos Clients
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 font-medium max-w-3xl mx-auto"
          >
            Découvrez ce que nos clients pensent de nos services. 
            Leur satisfaction est notre plus belle récompense.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative bg-white rounded-3xl p-8 md:p-12 mb-12"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
          
          <div className="relative z-10">
            {/* Quote Icon */}
            <Quote className="h-12 w-12 text-blue-500 mb-6" />
            
            {/* Testimonial Content */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8 items-center"
            >
              <div className="md:col-span-2">
                <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-800">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-blue-300 fill-current" />
                  ))}
                </div>
                
                {/* Service Tag */}
                <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-4 text-blue-800">
                  {testimonials[currentTestimonial].service}
                </div>
              </div>
              
              <div className="text-center md:text-right">
                {/* Avatar */}
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto md:ml-auto md:mr-0 mb-4">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[currentTestimonial].avatar}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-1 text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-700 mb-1">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </motion.div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-blue-200'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;