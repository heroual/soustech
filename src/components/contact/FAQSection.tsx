'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CreditCard, Shield, Wrench } from 'lucide-react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "Questions Générales",
      icon: HelpCircle,
      color: "from-blue-500 to-blue-400",
      faqs: [
        {
          question: "Quels sont vos délais d’intervention ?",
          answer: "Nos équipes Sajitech interviennent rapidement à Agadir et alentours : 24-48h pour projets standards, et sous 4h pour urgences."
        },
        {
          question: "Dans quelles zones intervenez-vous ?",
          answer: "Nous couvrons tout le Maroc, principalement Agadir, Taroudant, Aït Melloul, Inezgane, Ouled Teima et Tiznit."
        },
        {
          question: "Proposez-vous des devis gratuits ?",
          answer: "Oui, tous nos devis sont gratuits et sans engagement, avec étude détaillée sous 24h."
        }
      ]
    },
    {
      title: "Installation & Technique",
      icon: Wrench,
      color: "from-blue-600 to-blue-500",
      faqs: [
        {
          question: "L’installation FTTR nécessite-t-elle des perçages ?",
          answer: "Non, le FTTR s’installe sans perçage visible, avec un câblage discret et esthétique."
        },
        {
          question: "Combien de temps dure une installation ?",
          answer: "La plupart des installations sont terminées en une seule journée, propre et rapide."
        },
        {
          question: "Que se passe-t-il si je ne suis pas satisfait ?",
          answer: "Nous intervenons gratuitement sous 24h pour ajuster l’installation, avec garantie satisfaction."
        }
      ]
    },
    {
      title: "Tarifs & Paiement",
      icon: CreditCard,
      color: "from-blue-700 to-blue-600",
      faqs: [
        {
          question: "Quels sont vos moyens de paiement ?",
          answer: "Espèces, virement bancaire, chèque ou paiement mobile, selon le projet."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Non, nos tarifs sont transparents dès le devis initial, aucun supplément sans accord."
        },
        {
          question: "Proposez-vous des tarifs préférentiels ?",
          answer: "Oui, réductions pour entreprises, hôtels, cliniques et nouveaux clients, avec packs sur mesure."
        }
      ]
    },
    {
      title: "Garanties & Support",
      icon: Shield,
      color: "from-blue-800 to-blue-700",
      faqs: [
        {
          question: "Quelle garantie offrez-vous ?",
          answer: "Nos installations bénéficient de garantie constructeur jusqu’à 10 ans et garantie Sajitech installation."
        },
        {
          question: "Le support technique est-il payant ?",
          answer: "Non, le support est inclus 7j/7, via téléphone, WhatsApp ou email, réponse <5 min."
        },
        {
          question: "Que faire en cas de panne ?",
          answer: "Contactez notre support 24/7 à Agadir, diagnostic à distance et intervention sur site sous 4h si nécessaire."
        }
      ]
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#2B3A8A] mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes. 
            Notre équipe reste disponible pour toute question spécifique.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 section-spacing"
        >
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl p-6">
              {/* Category Header */}
              <div className="flex items-center mb-6 justify-center">
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center">{category.title}</h3>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + faqIndex * 0.1 }}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFAQ(isOpen ? null : globalIndex)}
                        className="btn w-full text-center flex items-center justify-center font-poppins text-base bg-white text-primary hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${globalIndex}`}
                      >
                        <span className="font-semibold text-gray-900 pr-4 text-center">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-600 leading-relaxed text-center">{faq.answer}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Vous avez d&apos;autres questions ?</h3>
            <p className="text-xl text-gray-900 font-medium mb-6 text-center">
              Notre équipe d&apos;experts est là pour répondre à toutes vos interrogations spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+212808551720"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition-colors duration-300 text-center text-white"
              >
                📞 Appelez-nous
              </a>
              <a
                href="https://wa.me/212697342443"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition-colors duration-300 text-center text-white"
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:contact@soustech.ma"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition-colors duration-300 text-center text-white"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;