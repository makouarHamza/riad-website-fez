import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const team = [
    { name: 'Yassine', role: 'Master Artisan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fatima', role: 'Head Chef', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
    { name: 'Omar', role: 'Concierge', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  ];

  const reviews = [
    { author: 'James Wilson', text: 'The attention to detail in the craftsmanship is unparalleled.', date: 'March 2024' },
    { author: 'Sophie Laurent', text: 'Une immersion totale dans la culture marocaine. Magnifique.', date: 'February 2024' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 uppercase tracking-widest"
          >
            {t('history.title')}
          </motion.h1>
          <div className="w-24 h-1 bg-tertiary mx-auto mb-12"></div>
          <p className="text-xl text-foreground/70 leading-relaxed font-light italic">
            Founded in the 17th century, Riad Fez has been a silent witness to the evolution of the Medina. Restored with love and saffron-tinted light, it stands today as a bridge between eras.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
             <img
                src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=1000"
                alt="Craftsmanship"
                className="rounded-3xl shadow-2xl border-4 border-primary/10"
                referrerPolicy="no-referrer"
              />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-8 uppercase tracking-widest">{t('mission.title')}</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">L'Artisan</h4>
                <p className="text-foreground/60">We believe in preserving the tactile heritage of Fez. Every piece of furniture and decor is handcrafted by local masters.</p>
              </div>
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">The Craft</h4>
                <p className="text-foreground/60">From zellige tilework to intricate plaster carving, we celebrate the slow, intentional beauty of Moroccan craft.</p>
              </div>
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Cooking Classes</h4>
                <p className="text-foreground/60">Our vision extends to the palate. We share the secrets of Moroccan spices through immersive culinary workshops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-16 uppercase tracking-widest">{t('team.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-tertiary/20 group-hover:border-tertiary transition-all">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary uppercase tracking-widest">{member.name}</h4>
                <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-surface border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-tertiary uppercase tracking-widest">{t('reviews.title')}</h2>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-2xl font-bold text-primary">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-primary text-primary" />)}
              </div>
              <span className="text-foreground/40 text-sm uppercase tracking-widest">(TrustIndex)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl border-l-4 border-tertiary">
                <Quote size={24} className="text-tertiary/40 mb-4" />
                <p className="text-foreground/80 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary uppercase text-xs tracking-widest">{review.author}</span>
                  <span className="text-foreground/40 text-xs uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
