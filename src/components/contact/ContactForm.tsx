'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, MapPin, Zap, Home, Shield, Network, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    message: '',
    address: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: 'fttr', name: 'Internet Ultra-Rapide – FTTR (Fiber to The Room)', icon: Zap, color: 'text-primary' },
    { id: 'smart-home', name: 'Smart Home & Domotique', icon: Home, color: 'text-primary' },
    { id: 'security', name: 'Caméras & Sécurité', icon: Shield, color: 'text-primary' },
    { id: 'network', name: 'Réseaux & IT', icon: Network, color: 'text-primary' },
    { id: 'multiple', name: 'Projet Multiple', icon: CheckCircle, color: 'text-primary' }
  ];

  const projectTypes = [
    'Résidentiel - Maison',
    'Résidentiel - Appartement',
    'Commercial - Bureau',
    'Commercial - Restaurant/Café',
    'Commercial - Magasin',
    'Autre'
  ];

  const processSteps = [
    { step: "1", text: "Réception de votre demande", time: "Immédiat" },
    { step: "2", text: "Analyse et étude gratuite", time: "24h" },
    { step: "3", text: "Devis personnalisé détaillé", time: "48h" },
    { step: "4", text: "Planification et installation", time: "Sur RDV" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demandes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Merci ! Votre demande a été envoyée. Nous vous recontacterons sous 24h.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          projectType: '',
          message: '',
          address: '',
          urgency: 'normal'
        });
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
    <section ref={ref} className="">
              <div className="container-padding max-w-7xl mx-auto section-padding">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="text-center section-title-spacing"
                >
                  <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#2B3A8A] mb-6">
                    Demandez votre devis gratuit
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Remplissez ce formulaire et recevez un devis personnalisé sous 24h.
                  </p>
                </motion.div>
      
                <div className="grid lg:grid-cols-1 gap-12 max-w-3xl mx-auto">
                  {/* Form */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 w-full"
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-gray-900 mb-2 text-center">
                            <User className="inline h-4 w-4 mr-2" />
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            placeholder="Votre nom"
                          />
                        </motion.div>
      
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-gray-900 mb-2 text-center">
                            <Mail className="inline h-4 w-4 mr-2" />
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            placeholder="votre@email.com"
                          />
                        </motion.div>
                      </div>
      
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-gray-900 mb-2 text-center">
                            <Phone className="inline h-4 w-4 mr-2" />
                            Téléphone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            placeholder="+212 6 XX XX XX XX"
                          />
                        </motion.div>
      
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-gray-900 mb-2 text-center">
                            <MapPin className="inline h-4 w-4 mr-2" />
                            Ville/Code postal *
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            placeholder="Agadir, 80000"
                          />
                        </motion.div>
                      </div>
      
                      {/* Service Selection */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Service souhaité *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                        >
                          <option value="">Sélectionnez le service souhaité</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>{service.name}</option>
                          ))}
                        </select>
                      </motion.div>
      
                      {/* Project Type */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Type de projet *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                        >
                          <option value="">Sélectionnez le type de projet</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </motion.div>
      
                      {/* Urgency */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Urgence du projet
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                        >
                          <option value="normal">Normal (sous 1 semaine)</option>
                          <option value="urgent">Urgent (sous 48h)</option>
                          <option value="planning">Planification (pas d'urgence)</option>
                        </select>
                      </motion.div>
      
                      {/* Message */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Description du projet
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          placeholder="Décrivez-nous votre projet, vos besoins spécifiques, la surface concernée, le nombre de pièces, etc."
                        />
                      </motion.div>
      
                      {/* Submit Button */}
                      <motion.button
                        variants={itemVariants}
                        type="submit"
                        disabled={isSubmitting}
                        className="btn w-full font-poppins text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Envoyer ma Demande
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                </div>
              </div>


              {/* Information Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-black text-white mt-16 rounded-3xl shadow-xl p-8 card-hover-effect"
              >
                <div className="grid md:grid-cols-2 gap-8 container-padding max-w-7xl mx-auto">
                  {/* Process */}
                  <div className="rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white">Notre Processus</h3>
                    <div className="space-y-4">
                      {processSteps.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold text-white">
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-white">{item.text}</span>
                            <div className="text-white text-sm">{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guarantees */}
                  <div className="rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white">Nos Garanties</h3>
                    <div className="space-y-4">
                      {[
                        "Devis gratuit et sans engagement",
                        "Prix transparents et compétitifs",
                        "Installation par experts certifiés",
                        "Support technique inclus",
                        "Domotique et fibre optique au Maroc",
                        "Intervention rapide à Agadir"
                      ].map((guarantee, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="text-white">{guarantee}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
    </section>
  );
};

export default ContactForm;