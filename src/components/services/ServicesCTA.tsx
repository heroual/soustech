'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';

const ServicesCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "Devis gratuit et sans engagement",
    "Étude personnalisée de vos besoins",
    "Installation par des experts certifiés",
    "Garantie satisfaction et support inclus"
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#2B3A8A] mb-6 text-center">
            Prêt à Moderniser Votre Infrastructure ?
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8 text-center">
            Nos experts vous accompagnent dans tous vos projets technologiques. 
            Demandez votre devis personnalisé dès aujourd'hui.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
        >
          {/* Benefits */}
          <div className="bg-[#f3f4f6] rounded-2xl p-6 shadow-lg">
            <h3 className="mb-6 text-center text-gray-900">Pourquoi Choisir SajiTech ?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-center">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-4">
            <motion.a
              href="tel:+212808551720"
              whileHover={{ scale: 1.02 }}
              className="bg-[#f3f4f6] border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 group text-center"
            >
              <div className="flex items-center justify-center">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-gray-900 font-semibold">Appelez-nous</h4>
                  <p className="text-gray-700 text-sm">+212 808 551 720</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/212697342443"
              whileHover={{ scale: 1.02 }}
              className="bg-[#f3f4f6] border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 group text-center"
            >
              <div className="flex items-center justify-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-gray-900 font-semibold">WhatsApp</h4>
                  <p className="text-gray-900 text-sm mb-3">Consultation gratuite immédiate</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contact@soustech.ma"
              whileHover={{ scale: 1.02 }}
              className="bg-[#f3f4f6] border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 group text-center"
            >
              <div className="flex items-center justify-center">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-gray-900 font-semibold">Email</h4>
                  <p className="text-gray-900 text-sm mb-3">Devis détaillé par email</p>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Main CTA */}
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
            Demander un Devis Détaillé
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;