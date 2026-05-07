import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteInfo } from '../data/siteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Pourquoi nous choisir', href: '#pourquoi' },
    { name: 'Déroulement', href: '#process' },
    { name: 'Horaires', href: '#horaires' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToContact = () => {
    setIsMenuOpen(false);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`glass-header ${isScrolled ? 'scrolled py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-teal-700 tracking-tight leading-tight">
              Cabinet Dentaire Anassi
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium md:block hidden">
              Casablanca – Hay Sidi Moumen
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Prendre rendez-vous
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a 
              href={`tel:${siteInfo.phoneRaw}`} 
              className="p-2 text-teal-600 bg-teal-50 rounded-full"
              aria-label="Appeler le cabinet"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-teal-600 text-white px-5 py-4 rounded-xl text-lg font-bold hover:bg-teal-700 shadow-md transition-all flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
