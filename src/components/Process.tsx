import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Contactez-nous",
      text: "Appelez le cabinet ou envoyez un message pour expliquer votre besoin ou votre douleur.",
      icon: Phone,
    },
    {
      id: 2,
      title: "Planifiez votre visite",
      text: "Nous vous orientons vers un créneau selon les disponibilités du cabinet pour vous recevoir.",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Recevez vos soins",
      text: "Lors de votre visite, nous prenons le temps de vous écouter, d'examiner et de vous accompagner.",
      icon: ArrowRight,
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Fonctionnement</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Comment prendre rendez-vous ?
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector Line Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 bg-teal-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-teal-100 ring-8 ring-white">
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold mb-4">
                  ÉTAPE {step.id}
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h4>
                <p className="text-slate-500 italic max-w-xs mx-auto leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
