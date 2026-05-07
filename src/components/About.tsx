import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Info } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-2 rounded-[40px] shadow-2xl shadow-slate-200">
               <div className="aspect-[4/5] bg-teal-50 rounded-[36px] flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Medical Illustration pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none p-12">
                     <div className="grid grid-cols-4 gap-8">
                        {Array.from({ length: 16 }).map((_, i) => (
                           <div key={i} className="w-full h-24 border-2 border-teal-600 rounded-full" />
                        ))}
                     </div>
                  </div>
                  <div className="text-center px-10 relative">
                    <div className="w-24 h-24 bg-teal-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <Info className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-slate-800 mb-4 italic">Proximité & Qualité</h4>
                    <p className="text-slate-600 font-medium">Situé au cœur de Sidi Moumen, nous sommes là pour vous.</p>
                  </div>
               </div>
            </div>
            {/* Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100/50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-sky-100/50 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">À PROPOS DE NOUS</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              À propos du Cabinet <br /> Dentaire Anassi
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Le Cabinet Dentaire Anassi vous accueille à Hay Sidi Moumen, Casablanca. Notre engagement est simple : offrir un accompagnement professionnel et humain pour préserver votre santé bucco-dentaire.
              </p>
              <p>
                Nous privilégions une approche basée sur des explications claires et un respect total du patient. Notre cabinet met un point d'honneur à créer un environnement propre, accueillant et serein pour que chaque visite soit la plus confortable possible.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-teal-600 font-bold mb-2">Notre mission</div>
                <p className="text-sm text-slate-500">Améliorer votre confort dentaire au quotidien via des soins adaptés.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-teal-600 font-bold mb-2">Notre valeur</div>
                <p className="text-sm text-slate-500">L'écoute et la transparence dans chaque diagnostic proposé.</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {["Écouter", "Expliquer", "Accompagner"].map((step) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-teal-500" />
                  </div>
                  <span className="font-bold text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
