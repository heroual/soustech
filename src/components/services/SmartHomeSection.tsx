'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Home, 
  Lightbulb, 
  Thermometer, 
  Shield, 
  Smartphone, 
  CheckCircle,
  Zap,
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SmartHomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const carouselImages = [
    '/images/jiji/smart-home-tech.jpg',
    '/images/jiji/control-smart-home.jpg',
    '/images/jiji/smart-home-device.jpg',
    '/images/jiji/smart-home-gadget.jpg',
    '/images/jiji/smart-home-phone.jpg',
    '/images/jiji/smart-home-tab.jpg',
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlider = () => {
    stopSlider();
    intervalRef.current = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [carouselImages.length]);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const smartFeatures = [
    {
      icon: Lightbulb,
      title: "Éclairage intelligent",
      description: "Contrôle et programmation de vos éclairages grâce à la domotique.",
      features: [
        "Variation d’intensité pour créer l’ambiance idéale",
        "Programmation horaire intelligente",
        "Contrôle vocal intégré (Google, Alexa…)",
        "Économies d’énergie garanties",
      ],
    },
    {
      icon: Thermometer,
      title: "Climatisation connectée",
      description: "Gestion automatique de la température pour un confort optimal.",
      features: [
        "Réglage intelligent selon vos habitudes",
        "Programmation par zones",
        "Détection de présence",
        "Réduction de la consommation jusqu’à 30%",
      ],
    },
    {
      icon: Shield,
      title: "Sécurité intégrée",
      description: "Des capteurs et alarmes intelligents pour une maison plus sûre.",
      features: [
        "Détection d’intrusion en temps réel",
        "Alertes instantanées sur mobile",
        "Caméras connectées et accessibles partout",
        "Accès sécurisé pour toute la famille",
      ],
    },
    {
      icon: Smartphone,
      title: "Application mobile",
      description: "Contrôlez votre maison connectée depuis votre smartphone.",
      features: [
        "Interface intuitive et simple d’utilisation",
        "Gestion complète à distance",
        "Notifications push en temps réel",
        "Accès multi-utilisateurs",
      ],
    },
  ];

  const scenarios = [
    {
      name: "Réveil Matin",
      icon: Clock,
      description: "Réveil progressif avec lumière, musique douce et température optimale",
      color: "from-blue-500 to-blue-400"
    },
    {
      name: "Mode Absence",
      icon: Shield,
      description: "Simulation de présence, activation sécurité et économies d'énergie",
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "Soirée Cinéma",
      icon: Home,
      description: "Éclairage tamisé, fermeture volets et ambiance parfaite",
      color: "from-blue-700 to-blue-600"
    },
    {
      name: "Mode Nuit",
      icon: Lightbulb,
      description: "Extinction progressive, verrouillage et activation alarme",
      color: "from-gray-800 to-gray-700"
    }
  ];

  return (
    <section id="smart-home" ref={ref} className="bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto section-padding-top section-padding-bottom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-2xl">
              <Home className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6 text-center">
            Smart Home - Maison Intelligente
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            Automatisez et contrôlez votre maison depuis votre smartphone.
            Avec nos solutions domotiques, transformez votre quotidien : confort, sécurité et économies d’énergie au bout des doigts.
          </p>
        </motion.div>

        <div 
          className="relative w-full h-[660px] rounded-xl shadow-lg mb-16 overflow-hidden"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          <AnimatePresence>
            <motion.div
              key={imageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full"
            >
              <Image
                src={carouselImages[imageIndex]}
                alt="Smart Home Carousel Image"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevImage}
              className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Smart Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16"
        >
          {smartFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm text-center">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-600 text-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 font-poppins">
            Scénarios Intelligents
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className={`bg-gradient-to-r ${scenario.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <scenario.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">{scenario.name}</h4>
                <p className="text-gray-600 text-sm text-center">{scenario.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Smart Home Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[ 
            { src: '/images/jiji/smart-home-device.jpg', alt: 'Smart Home Device' },
            { src: '/images/jiji/smart-home-gadget.jpg', alt: 'Smart Home Gadget' },
            { src: '/images/jiji/smart-home-phone.jpg', alt: 'Smart Home Phone' },
            { src: '/images/jiji/smart-home-tab.jpg', alt: 'Smart Home Tablet' },
          ].map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-[#070908] p-8 md:p-12 text-white text-center"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 font-poppins text-center text-white">
            Prêt pour une maison intelligente au Maroc ?
          </h3>
          <div className="text-xl text-gray-200 font-medium mb-8 max-w-[1300px] mx-auto text-center">
            <p className="mb-4">Transformez votre quotidien avec une solution domotique sur-mesure.</p>
            <p className="mb-4">Nos experts vous accompagnent de la conception à l’installation pour créer une maison connectée, sécurisée et confortable.</p>
            <p className="mb-4">Profitez d’une installation professionnelle, d’une formation complète à l’utilisation et d’un support technique réactif.</p>
            <p>Avec SoussTech, vous bénéficiez de technologies fiables, adaptées à vos besoins et garanties pour durer.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-futuristic-primary" style={{ background: 'white', color: '#070908' }}
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/portfolio"
              className="btn-futuristic-primary" style={{ background: 'white', color: '#070908' }}
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SmartHomeSection;