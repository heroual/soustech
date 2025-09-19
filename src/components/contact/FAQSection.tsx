'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, CreditCard, Shield, Wrench } from 'lucide-react';

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
          question: "Quels sont vos délais d'intervention ?",
          answer: "Nous proposons des devis sous 24h et pouvons généralement intervenir dans la semaine. Pour les urgences, nous avons un service d'intervention sous 4h."
        },
        {
          question: "Dans quelles zones intervenez-vous ?",
          answer: "Nous couvrons toute l'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95). Le déplacement pour un devis sur site est gratuit."
        },
        {
          question: "Proposez-vous des devis gratuits ?",
          answer: "Oui, tous nos devis sont gratuits et sans engagement. Nous incluons également une consultation technique détaillée."
        }
      ]
    },
    {
      title: "Installation & Technique",
      icon: Wrench,
      color: "from-blue-600 to-blue-500",
      faqs: [
        {
          question: "L'installation FTTR nécessite-t-elle des perçages ?",
          answer: "Non ! Notre solution FTTR est conçue pour être installée sans aucun perçage, préservant ainsi l'esthétique de votre intérieur, particulièrement important dans les appartements haussmanniens."
        },
        {
          question: "Combien de temps dure une installation ?",
          answer: "Cela dépend du projet : FTTR (1 jour), Smart Home (2-3 jours), Sécurité (1-2 jours). Nous vous donnons un planning précis lors du devis."
        },
        {
          question: "Que se passe-t-il si je ne suis pas satisfait ?",
          answer: "Nous offrons une garantie satisfaction. Si l'installation ne répond pas à vos attentes, nous effectuons les modifications nécessaires sans frais supplémentaires."
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
          answer: "Nous acceptons les virements bancaires, chèques, cartes bancaires et paiements échelonnés. Possibilité de paiement en 3x sans frais."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Non, tous nos tarifs sont transparents. Le devis inclut matériel, installation, mise en service et formation. Aucun frais supplémentaire."
        },
        {
          question: "Proposez-vous des tarifs préférentiels ?",
          answer: "Oui, nous offrons des remises pour les projets combinés (ex: FTTR + Smart Home) et des tarifs dégressifs pour les professionnels."
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
          answer: "Garantie installation 10 ans, garantie matériel selon constructeur (2-5 ans), et garantie satisfaction 30 jours. Support technique inclus."
        },
        {
          question: "Le support technique est-il payant ?",
          answer: "Le support technique est inclus la première année. Ensuite, contrats de maintenance disponibles ou support ponctuel selon besoin."
        },
        {
          question: "Que faire en cas de panne ?",
          answer: "Contactez notre hotline 24/7. Diagnostic à distance gratuit, puis intervention sur site si nécessaire. Temps de réponse garanti selon votre contrat."
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
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Questions
            <span className="block text-blue-500">
              Fréquentes
            </span>
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
            <div key={categoryIndex} className="bg-gray-50 rounded-3xl p-6">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
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
                        className="btn w-full text-left flex items-center justify-between font-poppins text-base bg-white text-primary hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Vous avez d'autres questions ?</h3>
            <p className="text-xl text-gray-200 font-medium mb-6 text-center">
              Notre équipe d'experts est là pour répondre à toutes vos interrogations spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+212808551720"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-colors duration-300 text-center"
              >
                📞 Appelez-nous
              </a>
              <a
                href="https://wa.me/212697342443"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-colors duration-300 text-center"
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:contact@soustech.ma"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-colors duration-300 text-center"
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