import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, ChevronRight } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-teal-700 mb-6">Cabinet Dentaire Anassi</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Cabinet dentaire situé à Hay Sidi Moumen, Casablanca, proposant un accompagnement professionnel pour différents besoins dentaires.
            </p>
            <div className="flex gap-4">
              <a href={siteInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:bg-green-50 hover:text-green-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href={`tel:${siteInfo.phoneRaw}`} className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Informations</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-500">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-500">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <span className="font-bold text-slate-700">{siteInfo.phone}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {['Accueil', 'À propos', 'Services', 'Horaires', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' à ', '').replace('À ', '').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                    className="text-sm text-slate-500 hover:text-teal-600 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-teal-500 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / Hours Preview */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Prendre rendez-vous</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Nous vous accueillons à Hay Sidi Moumen. Contactez-nous pour confirmer les horaires.
            </p>
            <a 
              href="#contact" 
              className="inline-flex bg-teal-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-teal-700 transition-all shadow-md active:scale-95"
            >
              Contactez le cabinet
            </a>
          </div>
        </div>

        <div className="border-t border-slate-50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-md text-center md:text-left">
            <p className="text-[11px] text-slate-400 italic">
              <strong>Note médicale :</strong> Les informations présentes sur ce site sont fournies à titre informatif et ne remplacent pas une consultation avec un professionnel de santé.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-medium whitespace-nowrap">
            © {currentYear} Cabinet Dentaire Anassi. Casablanca.
          </div>
        </div>
      </div>
    </footer>
  );
}
