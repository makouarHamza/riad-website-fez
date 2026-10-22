import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, Award, Sparkles, UtensilsCrossed } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function About() {
  const { t } = useLanguage();

  const team = [
    { name: 'Yassine El Fassi', role: 'Master Artisan & Conservator', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fatima Zahra', role: 'Head of Moroccan Cuisine', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
    { name: 'Omar Benjelloun', role: 'Head Concierge & Heritage Guide', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  ];

  const reviews = [
    { author: 'James Wilson', role: 'Architectural Digest Reader', text: 'The attention to detail in the cedar carving and terracotta restoration is unparalleled in Fez.', date: 'March 2024' },
    { author: 'Sophie Laurent', role: 'Voyageuse Indépendante', text: 'Une immersion totale dans la douceur et la culture de Fès. Le petit-déjeuner sur la terrasse était sublime.', date: 'February 2024' },
  ];

  return (
    <div className="pt-20">
      <SEOHead routeKey="about" />

      {/* Header */}
      <section className="py-24 bg-[#FAF8F5] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-3">
            Since the 17th Century
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 uppercase tracking-wider"
          >
            {t('history.title')}
          </motion.h1>
          <div className="w-20 h-0.5 bg-secondary/40 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light italic max-w-3xl mx-auto">
            Founded during the golden era of the Merenid and Alaouite architecture, Riad Fez has been a peaceful haven within the Medina. Restored with natural terracotta and sunlight, it honors traditional craft while offering contemporary luxury.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=1000"
                alt="Moroccan Artisans Restoring Tiles"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 uppercase tracking-wide">
              {t('mission.title')}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-1">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-wider text-xs mb-1">L'Artisan & Heritage</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    We preserve Fez's living heritage by working exclusively with local guild artisans, from hand-thrown ceramics to natural vegetable-dyed wool rugs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-wider text-xs mb-1">Authentic Living Craft</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    From geometric zellige courtyards to hand-carved cedar cornices, every architectural detail breathes the slow rhythm of authentic Moroccan art.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0 mt-1">
                  <UtensilsCrossed size={18} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-wider text-xs mb-1">Hands-on Cooking Classes</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Discover ancestral tajine recipes, spice blends, and pastilla preparation with our head chef in our courtyard kitchen workshop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
            Warm Hospitality
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-16 uppercase tracking-widest">
            {t('team.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-3xl border border-stone-200 shadow-2xs group text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-stone-200 group-hover:border-secondary transition-all shadow-inner">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-serif font-bold text-foreground uppercase tracking-wider mb-1">
                  {member.name}
                </h4>
                <p className="text-secondary text-xs font-bold uppercase tracking-wider">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-14">
            <div>
              <span className="text-tertiary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
                Guest Feedback
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-widest">
                {t('reviews.title')}
              </h2>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0 bg-[#FAF8F5] px-5 py-2.5 rounded-full border border-stone-200">
              <span className="text-xl font-bold text-foreground">4.9 / 5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-tertiary text-tertiary" />
                ))}
              </div>
              <span className="text-stone-500 text-xs uppercase tracking-wider">TrustIndex Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-8 rounded-3xl border border-stone-200 shadow-2xs">
                <Quote size={22} className="text-secondary/60 mb-4" />
                <p className="text-stone-700 mb-6 italic leading-relaxed text-sm">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center border-t border-stone-200/70 pt-4">
                  <div>
                    <span className="font-bold text-foreground text-xs uppercase tracking-wider block">
                      {review.author}
                    </span>
                    <span className="text-stone-500 text-xs">{review.role}</span>
                  </div>
                  <span className="text-stone-400 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
