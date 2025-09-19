'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const AboutCTA = () => {
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
            Rejoignez nos Clients
            <span className="block text-blue-400">
              Satisfaits
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Faites confiance à notre expertise pour transformer votre espace 
            en environnement intelligent et connecté. Votre satisfaction est notre priorité.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <motion.a
            href="tel:+212808551720"
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Appelez-nous</h3>
            <p className="text-gray-300 text-sm mb-3">Consultation gratuite immédiate</p>
            <span className="text-blue-300 font-semibold">+212 808 551 720</span>
          </motion.a>

          <motion.a
            href="https://wa.me/212697342443"
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300 text-sm mb-3">Réponse rapide garantie</p>
            <span className="text-blue-300 font-semibold">Chat maintenant</span>
          </motion.a>

          <motion.a
            href="mailto:contact@soustech.ma"
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white mb-2">Email</h3>
            <p className="text-gray-300 text-sm mb-3">Devis détaillé par email</p>
            <span className="text-blue-300 font-semibold">contact@soustech.ma</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}
          >
            Demander un Devis Gratuit
          </Link>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              ✓ Devis gratuit en 24h • ✓ Installation professionnelle • ✓ Garantie satisfaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;