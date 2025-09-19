'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center section-title-spacing"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Nous Trouver
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Situés à Taroudant, nous intervenons dans toute la région Souss-Massa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Interactive Map Placeholder */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-blue-500 to-blue-400 relative flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Carte Interactive</h3>
                <p className="text-gray-300">157 Mhaita</p>
                <p className="text-gray-300">Taroudant 83000, Morocco</p>
                <a 
                  href="https://maps.google.com/maps?q=157+Mhaita,+Taroudant+83000,+Morocco" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full transition-colors inline-block"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Adresse</h3>
              </div>
              <p className="text-gray-700 mb-2">157 Mhaita</p>
              <p className="text-gray-700 mb-4">Taroudant 83000, Morocco</p>
              <div className="text-sm text-gray-600">
                <p>🌍 Région : Souss-Massa</p>
                <p>🚗 Accès facile par la route nationale</p>
                <p>🅿️ Parking disponible sur place</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Horaires</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><strong>Lundi - Vendredi :</strong> 9h00 - 18h00</p>
                <p><strong>Samedi :</strong> 9h00 - 12h00</p>
                <p><strong>Dimanche :</strong> Fermé</p>
                <p className="text-sm text-blue-600 mt-3">
                  ⚡ Support d'urgence disponible 24h/24
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Navigation className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Zone d'Intervention</h3>
              </div>
              <div className="text-gray-700">
                <p className="text-xl text-gray-800 font-medium mb-3">Nous intervenons dans toute la région Souss-Massa :</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Taroudant (83000)</div>
                  <div>• Agadir (80000)</div>
                  <div>• Inezgane (80350)</div>
                  <div>• Ait Melloul (86150)</div>
                  <div>• Ouled Teima (83350)</div>
                  <div>• Taliouine (83700)</div>
                  <div>• Ighem (83000)</div>
                  <div>• Région avoisinante</div>
                </div>
                <p className="text-sm text-blue-600 mt-3">
                  💡 Déplacement gratuit pour devis sur site
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;