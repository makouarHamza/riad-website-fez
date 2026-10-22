import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import SEOHead from '../components/SEOHead';

export default function Contact() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <SEOHead routeKey="contact" />

      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Concierge Inquiries
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 uppercase tracking-widest">
              {t('contact.title')}
            </h1>
            <div className="w-16 h-0.5 bg-secondary/40 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details & Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-2xs space-y-6">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                      {language === 'fr' ? 'Adresse' : 'Address'}
                    </h4>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      12 Derb El Miter, Medina, Fez 30000, Morocco
                    </p>
                    <span className="text-stone-400 text-xs block mt-0.5">Near Bab Bou Jeloud (Blue Gate)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                      {language === 'fr' ? 'Téléphone & WhatsApp' : 'Phone & WhatsApp'}
                    </h4>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      +212 535 634 321
                    </p>
                    <span className="text-stone-400 text-xs block mt-0.5">Concierge desk open 24/7</span>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                      {language === 'fr' ? 'Courriel Conciergerie' : 'Concierge Email'}
                    </h4>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      contact@riadfez.com
                    </p>
                    <span className="text-stone-400 text-xs block mt-0.5">Typical response within 2 hours</span>
                  </div>
                </div>
              </div>

              <div className="h-[320px] rounded-3xl overflow-hidden border border-stone-300 shadow-sm bg-stone-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.634356494747!2d-5.000000!3d34.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzAwLjAiTiA1wrAwMCcwMC4wIlc!5e0!3m2!1sen!2sma!4v1610000000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Riad Fez Interactive Map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      {language === 'fr' ? 'Message Reçu avec Succès' : 'Message Received'}
                    </h3>
                    <p className="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">
                      {language === 'fr'
                        ? 'Merci de nous avoir contactés. Notre équipe de conciergerie vous répondra dans les plus brefs délais.'
                        : 'Thank you for reaching out. Our concierge team has received your message and will respond shortly.'}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-4 text-xs font-bold text-secondary uppercase tracking-widest hover:underline"
                    >
                      {language === 'fr' ? 'Envoyer un autre message' : 'Send another inquiry'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                        placeholder="e.g. Sarah Lawrence"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                        placeholder="sarah@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        {t('contact.message')}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                        placeholder="Tell us about your upcoming trip or inquiry..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow"
                    >
                      <span>{t('contact.send')}</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
