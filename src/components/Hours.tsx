import React from 'react';
import { motion } from 'motion/react';
import { Clock, Phone, Calendar } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Hours() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="horaires" className="py-24 md:py-32 bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[48px] overflow-hidden shadow-2xl shadow-teal-900/5 border border-white">
          <div className="grid lg:grid-cols-2">
            {/* Left Column: Visual/Title */}
            <div className="bg-teal-600 p-12 md:p-16 text-white flex flex-col justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-16 h-16 opacity-50 mb-8" />
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Horaires et <br /> disponibilité
                  </h2>
                  <p className="text-teal-50 text-lg md:text-xl opacity-90 max-w-sm leading-relaxed">
                    Le cabinet s'adapte pour mieux vous servir. Contactez-nous à Sidi Moumen.
                  </p>
                </motion.div>
              </div>

              <div className="mt-12 space-y-4">
                <a 
                  href={`tel:${siteInfo.phoneRaw}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-teal-600 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold">{siteInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="p-12 md:p-16 flex flex-col justify-center bg-white relative">
               {/* Pattern overlay */}
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Clock className="w-40 h-40" />
               </div>

               <div className="relative z-10 text-slate-700">
                  <p className="text-xl mb-10 leading-relaxed font-medium">
                    Les horaires peuvent varier. Nous vous invitons à contacter directement le cabinet afin de confirmer les horaires d’ouverture et les disponibilités pour un rendez-vous.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <a 
                      href={`tel:${siteInfo.phoneRaw}`}
                      className="flex bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]"
                    >
                      <Phone className="w-5 h-5" />
                      Appeler le cabinet
                    </a>
                    <button 
                      onClick={scrollToContact}
                      className="flex bg-teal-500 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-lg shadow-teal-50 active:scale-[0.98]"
                    >
                      <Calendar className="w-5 h-5" />
                      Demander un rendez-vous
                    </button>
                  </div>

                  <div className="mt-12 flex items-center gap-3 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <p className="text-xs uppercase tracking-widest font-bold">Cabinet Dentaire Anassi Casablanca</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
