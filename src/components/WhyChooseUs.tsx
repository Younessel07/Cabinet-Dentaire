import React from 'react';
import { motion } from 'motion/react';
import { reasons } from '../data/siteData';

export default function WhyChooseUs() {
  return (
    <section id="pourquoi" className="py-24 md:py-32 bg-medical-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Pourquoi nous ?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Pourquoi choisir notre cabinet ?
            </h3>
            <p className="text-lg text-slate-600">
              Nous mettons tout en œuvre pour que votre expérience soit la plus positive possible, de la prise de contact aux soins finaux.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-100/20 transition-all group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <reason.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{reason.title}</h4>
              <p className="text-slate-500 leading-relaxed italic">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
