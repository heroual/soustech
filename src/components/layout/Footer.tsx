'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#070908' }}>
      <div className="container-padding max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="SoussTech Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain bg-white p-1 rounded-xl"
                />
              </div>
              <span className="text-2xl font-bold font-poppins text-left">SoussTech</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md text-left">
              Expert en technologies intelligentes au Maroc.
Nous transformons vos maisons et entreprises en espaces connectés, sécurisés et performants.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-primary-light text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-lg text-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-primary-light text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-lg text-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-primary-light text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-lg text-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white mb-6">Nos Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#fttr" className="text-gray-300 hover:text-primary-light transition-colors duration-300 text-lg text-left">
                  Internet Ultra-Rapide – FTTR (Fiber to The Room)
                </Link>
              </li>
              <li>
                <Link href="/services#smart-home" className="text-gray-300 hover:text-primary-light transition-colors duration-300 text-lg text-left">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-gray-300 hover:text-primary-light transition-colors duration-300 text-lg text-left">
                  Caméras & Sécurité Intelligente
                </Link>
              </li>
              <li>
                <Link href="/services#network" className="text-gray-300 hover:text-primary-light transition-colors duration-300 text-lg text-left">
                  Réseaux & IT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <a 
                href="tel:+212808551720" 
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-light transition-colors duration-300 group text-left"
              >
                <div className="bg-gray-700 group-hover:bg-primary p-2 rounded-lg transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-lg">+212 808 551 720</span>
              </a>
              <a 
                href="https://wa.me/212697342443" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-light transition-colors duration-300 group text-left"
              >
                <div className="bg-gray-700 group-hover:bg-primary p-2 rounded-lg transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-lg">WhatsApp</span>
              </a>
              <a 
                href="mailto:contact@soustech.ma" 
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-light transition-colors duration-300 group text-left"
              >
                <div className="bg-gray-700 group-hover:bg-primary p-2 rounded-lg transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-lg">contact@soustech.ma</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300 text-left">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-lg leading-relaxed">
                  157 Mhaita<br />
                  Taroudant, Morocco
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 lg:mt-16 pt-8 lg:pt-12">
          <div className="flex flex-col items-center space-y-4 lg:space-y-0">
            <p className="text-gray-300 text-lg text-center">
              Créé par <span className="text-white font-semibold">Elheroual Salah Eddine</span>
              <span className="ml-4">© 2025 SoussTech. Tous droits réservés.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;