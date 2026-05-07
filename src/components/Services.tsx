import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data/siteData';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Nos services</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Nos services dentaires
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nous proposons différents soins dentaires pour accompagner les patients dans le maintien de leur santé bucco-dentaire au quotidien.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100 flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-teal-600 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 italic">
            * Pour toute demande spécifique ou un soin non listé, n'hésitez pas à nous contacter directement.
          </p>
        </div>
      </div>
    </section>
  );
}
