'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle, Download } from 'lucide-react';

const PortfolioCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            Votre Projet Sera le
            <span className="block text-blue-400">
              Prochain Succès
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Rejoignez nos clients satisfaits et transformez votre espace avec nos solutions 
            technologiques innovantes. Demandez votre devis personnalisé dès maintenant.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
        >
          {/* Left: Call to Action */}
          <div>
            <h3 className="text-white mb-6">
              Étapes Simples pour Votre Projet
            </h3>
            <div className="space-y-4 mb-8">
              {[
                { step: "1", text: "Contactez-nous pour un audit gratuit" },
                { step: "2", text: "Recevez votre devis personnalisé" },
                { step: "3", text: "Installation par nos experts" },
                { step: "4", text: "Formation et support inclus" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-gray-900 font-bold">
                    {item.step}
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
              >
                Demander un Devis
              </Link>
              
              <Link
                href="#" // Assuming no specific link for PDF, or user can provide one
                className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
              >
                Portfolio PDF
              </Link>
            </div>
          </div>

          {/* Right: Contact Methods */}
          <div className="grid gap-4">
            <motion.a
              href="tel:+212808551720"
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group flex items-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Conseil Immédiat</h4>
                <p className="text-gray-400 text-sm">+212 808 551 720</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/212697342443"
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group flex items-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">WhatsApp Business</h4>
                <p className="text-gray-400 text-sm">Réponse en 5 minutes</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contact@soustech.ma"
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group flex items-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Devis Détaillé</h4>
                <p className="text-gray-400 text-sm">contact@soustech.ma</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "✓ Devis gratuit sous 24h",
              "✓ Installation garantie",
              "✓ Support technique inclus",
              "✓ Satisfaction client 98%"
            ].map((benefit, index) => (
              <div key={index} className="text-gray-400 text-sm font-medium">
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;