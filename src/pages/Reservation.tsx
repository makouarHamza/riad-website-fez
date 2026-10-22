import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Users, CheckCircle } from 'lucide-react';
import { FormEvent } from 'react';

export default function Reservation() {
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Reservation request submitted! (Demo)');
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-tertiary mb-6 uppercase tracking-widest"
            >
              {t('reservation.title')}
            </motion.h1>
            <p className="text-secondary uppercase tracking-[0.2em] text-xs font-bold">Secure your moment of ethereal peace</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 md:p-16 rounded-[3rem] shadow-2xl border border-primary/10"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">{t('contact.name')}</label>
                <input
                  type="text"
                  required
                  className="w-full bg-surface/50 border border-primary/20 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-all text-lg"
                  placeholder="Full Name"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">{t('contact.email')}</label>
                <input
                  type="email"
                  required
                  className="w-full bg-surface/50 border border-primary/20 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-all text-lg"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{t('reservation.date')}</span>
                  </div>
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-surface/50 border border-primary/20 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-all text-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                   <div className="flex items-center space-x-2">
                    <Users size={14} />
                    <span>{t('reservation.people')}</span>
                  </div>
                </label>
                <select
                  required
                  className="w-full bg-surface/50 border border-primary/20 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-all text-lg appearance-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>

              <div className="col-span-1 md:col-span-2 pt-6">
                <button
                  type="submit"
                  className="w-full bg-tertiary text-surface py-5 rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-tertiary/80 transition-all shadow-lg hover:shadow-tertiary/20 flex items-center justify-center space-x-4"
                >
                  <span>{t('reservation.submit')}</span>
                  <CheckCircle size={20} />
                </button>
              </div>
            </form>
          </motion.div>

          <div className="mt-12 text-center text-foreground/40 text-xs uppercase tracking-widest">
            <p>Our team will contact you within 24 hours to confirm your booking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
