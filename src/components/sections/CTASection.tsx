'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const CTASection = () => {
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
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ backgroundColor: '#010409' }} aria-labelledby="cta-heading">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-cover opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto">
        
      </div>
    </section>
  );
};

export default CTASection;