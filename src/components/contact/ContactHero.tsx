'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { } from 'lucide-react';

const ContactHero = () => {
  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/contact.png"
        alt="Contact Us Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 h-full w-full"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-9" style={{ color: 'white' }}>
            Contactez
            <span className="block">
              Nos Experts
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-medium max-w-3xl mx-auto mb-12"
          style={{ color: 'white' }}
        >
          Contactez nos experts pour des conseils personnalisés et un devis gratuit pour votre projet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/contact" className="btn-futuristic-primary" style={{ backgroundColor: '#514ae6' }}>
            Nous Contacter
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;