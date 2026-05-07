import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Cabinet Dentaire à Casablanca
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Votre sourire, <br />
              <span className="text-teal-600">notre priorité</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Un cabinet dentaire à Hay Sidi Moumen, Casablanca, dédié à des soins professionnels, humains et accessibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={scrollToContact}
                className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
              </button>
              <a
                href={`tel:${siteInfo.phoneRaw}`}
                className="bg-white border-2 border-slate-100 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-5 h-5 text-teal-600" />
                Nous appeler
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Soins professionnels",
                "Écoute du patient",
                "Hay Sidi Moumen",
                "Contact rapide"
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block hidden"
          >
            <div className="relative z-10 grid grid-cols-12 gap-4">
              {/* Main Illustration Card */}
              <div className="col-span-12 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Status</div>
                    <div className="text-sm font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">Ouvert</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Prendre soin de vos dents</h3>
                <p className="text-slate-500 mb-6 font-medium">Une approche personnalisée pour chaque patient.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Localisation</div>
                      <div className="text-sm font-bold text-slate-700">Hay Sidi Moumen, Casablanca</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller Badge Cards */}
              <div className="col-span-6 mt-4 p-6 bg-teal-600 text-white rounded-3xl shadow-lg shadow-teal-100">
                <div className="text-3xl font-bold mb-1">+Soins</div>
                <div className="text-xs font-medium opacity-80 leading-tight">Qualité et professionnalisme à chaque étape.</div>
              </div>
              <div className="col-span-6 mt-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase">WhatsApp Direct</span>
                </div>
                <div className="text-sm font-bold text-slate-700">Disponibilité rapide</div>
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-teal-50 rounded-full animate-spin-slow opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
