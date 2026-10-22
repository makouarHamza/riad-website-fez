import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { FormEvent } from 'react';

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! (Demo)');
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 uppercase tracking-widest">
              {t('contact.title')}
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div className="glass p-10 rounded-3xl space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold uppercase tracking-widest text-sm mb-2">Location</h4>
                    <p className="text-foreground/60 leading-relaxed">12 Derb El Miter, Medina, Fez 30000, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold uppercase tracking-widest text-sm mb-2">Phone</h4>
                    <p className="text-foreground/60 leading-relaxed">+212 535 634 321</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold uppercase tracking-widest text-sm mb-2">Email</h4>
                    <p className="text-foreground/60 leading-relaxed">contact@riadfez.com</p>
                  </div>
                </div>
              </div>

              <div className="h-[300px] rounded-3xl overflow-hidden border border-primary/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.634356494747!2d-5.000000!3d34.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzAwLjAiTiA1wrAwMCcwMC4wIlc!5e0!3m2!1sen!2sma!4v1610000000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t('contact.name')}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t('contact.email')}</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-background border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t('contact.message')}</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-background border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-surface py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary/80 transition-all flex items-center justify-center space-x-2"
                >
                  <span>{t('contact.send')}</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
