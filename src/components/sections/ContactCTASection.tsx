'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Phone,
      title: "Appelez-nous",
      description: "Consultation gratuite",
      action: "tel:+212808551720",
      label: "+212 808 551 720",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Réponse immédiate",
      action: "https://wa.me/212697342443",
      label: "Chatter maintenant",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Devis détaillé",
      action: "mailto:contact@soustech.ma",
      label: "contact@soustech.ma",
      color: "from-blue-400 to-blue-600"
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
    <section ref={ref} className="pt-[2px] pb-16 bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center section-title-spacing"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins text-[#293786] mb-6"
          >
            Contactez-nous
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-800 font-medium max-w-3xl mx-auto"
          >
            Vous avez un projet de maison connectée, domotique ou sécurité intelligente ?
            Notre équipe vous accompagne partout au Maroc, de la conception à l’installation.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-100 border border-gray-200 rounded-2xl p-6 text-center hover:bg-gray-200 transition-all duration-300 group card-hover-effect shadow-lg relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`bg-gradient-to-r ${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 hover:lift ripple`} aria-hidden="true">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center drop-shadow-md">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 text-center font-medium">{method.description}</p>
              <span className="text-blue-600 font-semibold text-center text-lg block group-hover:text-blue-800 transition-colors duration-300">{method.label}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { text: "Devis gratuit en 24h", icon: "✓" },
              { text: "Installation professionnelle", icon: "✓" },
              { text: "Garantie satisfaction", icon: "✓" },
              { text: "Support technique inclus", icon: "✓" }
            ].map((benefit, index) => (
              <div key={index} className="text-gray-800 text-center group hover:-translate-y-1 transition-transform duration-300 animate-text-pulse" style={{transitionDelay: `${index * 50}ms`}}>
                <div className="bg-gray-100 border border-gray-200 p-3 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300">
                  <span className="text-blue-600 font-bold mr-2" aria-hidden="true">{benefit.icon}</span>
                  <span className="font-semibold text-base sm:text-lg text-gray-800">{benefit.text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default ContactCTASection;