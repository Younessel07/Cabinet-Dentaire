import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, Send, Check } from 'lucide-react';
import { siteInfo, services } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    tel: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nom) newErrors.nom = "Le nom complet est requis.";
    if (!formData.tel) newErrors.tel = "Le numéro de téléphone est requis.";
    if (!formData.message) newErrors.message = "Le message est requis.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ nom: '', tel: '', email: '', service: '', message: '' });
      
      // Auto close after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user changes field
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Contact & Rendez-vous</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Contactez-nous
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Informations directes</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">Notre adresse</p>
                    <p className="text-slate-700 font-medium leading-relaxed">
                      {siteInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">Téléphone</p>
                    <p className="text-slate-700 font-bold text-lg">
                      {siteInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-3">
                <a 
                  href={`tel:${siteInfo.phoneRaw}`}
                  className="w-full bg-teal-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-teal-700 transition-all shadow-md active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
                <a 
                  href={siteInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-md active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5" />
                  Message WhatsApp
                </a>
                <a 
                  href={siteInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-slate-100 text-slate-700 px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-[0.98]"
                >
                  <MapPin className="w-5 h-5 text-teal-600" />
                  Voir l'itinéraire
                </a>
              </div>
            </div>

            <div className="bg-teal-900 text-white p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Note médicale</h4>
              <p className="text-teal-100 text-sm leading-relaxed opacity-90">
                Les informations présentes sur ce site sont fournies à titre informatif et ne remplacent pas une consultation avec un professionnel de santé.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Demande envoyée</h4>
                  <p className="text-slate-600 max-w-sm mx-auto mb-8">
                    Merci, votre demande a bien été préparée. Le cabinet vous contactera dès que possible.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-teal-600 font-bold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-bold text-slate-700">Nom complet *</label>
                      <input 
                        type="text" 
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Ex: Mohammed Alami"
                        className={`w-full px-5 py-4 rounded-xl border ${errors.nom ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all`}
                      />
                      {errors.nom && <p className="text-xs font-bold text-red-500">{errors.nom}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="tel" className="text-sm font-bold text-slate-700">Téléphone *</label>
                      <input 
                        type="tel" 
                        id="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        placeholder="06 -- -- -- --"
                        className={`w-full px-5 py-4 rounded-xl border ${errors.tel ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all`}
                      />
                      {errors.tel && <p className="text-xs font-bold text-red-500">{errors.tel}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Email (optionnel)</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="exemple@mail.com"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-slate-700">Service souhaité</label>
                      <select 
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Votre message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Expliquez brièvement votre besoin..."
                      className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-xs font-bold text-red-500">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white px-8 py-5 rounded-2xl font-extrabold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-200 flex items-center justify-center gap-3 disabled:opacity-70 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Demander un rendez-vous
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
