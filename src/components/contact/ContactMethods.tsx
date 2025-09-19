'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Headphones } from 'lucide-react';

const ContactMethods = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactOptions = [
    {
      icon: Phone,
      title: "Téléphone",
      subtitle: "Conseil immédiat",
      contact: "+212 808 551 720",
      action: "tel:+212808551720",
      description: "Appelez-nous pour un conseil technique immédiat ou une urgence",
      color: "from-blue-500 to-blue-400",
      available: "Lun-Ven 9h-18h, Sam 9h-12h"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      subtitle: "Chat en direct",
      contact: "+212 697 342 443",
      action: "https://wa.me/212697342443",
      description: "Réponse rapide via WhatsApp, envoi de photos et documents",
      color: "from-blue-600 to-blue-500",
      available: "7j/7 - Réponse < 5min"
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Devis détaillé",
      contact: "contact@soustech.ma",
      action: "mailto:contact@soustech.ma",
      description: "Envoyez-nous votre demande détaillée pour un devis complet",
      color: "from-blue-500 to-blue-400",
      available: "Réponse sous 24h"
    },
    {
      icon: Headphones,
      title: "Support Technique",
      subtitle: "Assistance 24/7",
      contact: "+212 808 551 720",
      action: "tel:+212808551720",
      description: "Support technique pour clients existants et urgences",
      color: "from-blue-700 to-blue-600",
      available: "24h/24 - 7j/7"
    }
  ];

  const officeInfo = {
    address: "157 Mhaita",
    city: "Taroudant, Morocco",
    hours: {
      weekdays: "Lundi - Vendredi : 9h00 - 18h00",
      saturday: "Samedi : 9h00 - 12h00",
      sunday: "Dimanche : Fermé (Urgences uniquement)"
    },
    region: "Région Souss-Massa",
    parking: "Parking disponible"
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center section-title-spacing"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Plusieurs Moyens
            <span className="block text-blue-500">
              de nous Contacter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le canal de communication qui vous convient le mieux. 
            Nous sommes là pour vous accompagner à chaque étape.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 section-spacing"
        >
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.action}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 rounded-3xl p-6 text-center hover:shadow-xl transition-all duration-300 group block"
            >
              <div className={`bg-gradient-to-r ${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{option.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{option.subtitle}</p>
              
              <div className={`bg-gradient-to-r ${option.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block`}>
                {option.contact}
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{option.description}</p>
              
              <div className="flex items-center justify-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {option.available}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Office Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-poppins">
                Notre Bureau à Taroudant
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{officeInfo.address}</p>
                    <p className="text-gray-300">{officeInfo.city}</p>
                  </div>
                </div>
                
                <div className="text-xl text-gray-200 font-medium">
                  <p>🌍 {officeInfo.region}</p>
                  <p>🅿️ {officeInfo.parking}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Horaires d'Ouverture</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-300" />
                  <span className="text-sm">{officeInfo.hours.weekdays}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-300" />
                  <span className="text-sm">{officeInfo.hours.saturday}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-300" />
                  <span className="text-sm">{officeInfo.hours.sunday}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <h5 className="font-semibold mb-2">💡 Conseil</h5>
                <p className="text-xl text-gray-200 font-medium">
                  Pour les visites sur site, nous nous déplaçons dans toute la région Souss-Massa. 
                  Contactez-nous pour planifier un rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMethods;