'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { } from 'lucide-react';

const ServiceHero = () => {
  

  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/service.png"
        alt="Service Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 h-[600px] w-full"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-9 font-poppins text-white">
            Nos Solutions Technologiques.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-200 font-medium max-w-3xl mx-auto mb-8"
        >
          Des technologies de pointe pour transformer votre maison ou votre entreprise en un espace connecté, sécurisé et intelligent.
        Avec SoussTech, bénéficiez de solutions fiables, esthétiques et performantes, conçues pour répondre aux besoins du quotidien au Maroc.
        </motion.p>

        
      </div>
    </section>
  );
};

export default ServiceHero;