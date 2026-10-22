import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Coffee, Utensils, Info, Car, Clock, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      title: language === 'fr' ? 'Thé de Bienvenue & Pâtisseries' : 'Traditional Welcome Ceremony',
      desc: language === 'fr' 
        ? 'Un thé à la menthe traditionnel fraîchement infusé et un assortiment de cornes de gazelle offerts dès votre arrivée.'
        : 'Freshly infused Moroccan mint tea served with artisanal almond pastries and orange blossom essence upon arrival.',
      icon: Coffee,
      img: 'https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=800',
      badgeColor: 'bg-primary/10 text-primary',
    },
    {
      title: language === 'fr' ? 'Buffet Petit-Déjeuner au Patio' : 'Patio Breakfast Spread',
      desc: language === 'fr'
        ? 'Un généreux buffet de msemmen dorés, baghrir, miel de l’Atlas, huiles d’olive de terroir et fruits de saison.'
        : 'A lavish morning spread featuring warm msemmen, honeycomb from the Atlas Mountains, local olive oils, and fresh citrus juices.',
      icon: Utensils,
      img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800',
      badgeColor: 'bg-secondary/10 text-secondary',
    },
    {
      title: language === 'fr' ? 'Thé à Volonté au Patio Traditionnel' : 'Complimentary All-Day Tea',
      desc: language === 'fr'
        ? 'Dégustez notre thé marocain tout au long de la journée dans la quiétude ombragée de notre patio arboré.'
        : 'Relax in our tranquil central courtyard with complimentary hot mint and herbal infusions available at any hour.',
      icon: Info,
      img: 'https://images.unsplash.com/photo-1544787210-228394c3d3e2?auto=format&fit=crop&q=80&w=800',
      badgeColor: 'bg-tertiary/10 text-tertiary',
    },
    {
      title: language === 'fr' ? 'Location de Voiture & Chauffeur Privé' : 'Chauffeur & Car Rental',
      desc: language === 'fr'
        ? 'Explorez les environs de Fès, Volubilis et Moulay Idriss grâce à notre service de véhicules climatisés avec chauffeur.'
        : 'Explore the roman ruins of Volubilis, Meknes, and the Middle Atlas mountains in private climate-controlled vehicles.',
      icon: Car,
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      badgeColor: 'bg-primary/10 text-primary',
    }
  ];

  return (
    <div className="pt-20">
      <SEOHead routeKey="services" />

      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Guest Amenities
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 uppercase tracking-widest"
            >
              {language === 'fr' ? 'Nos Services & Expériences' : 'Our Curated Services'}
            </motion.h1>
            <p className="text-stone-600 max-w-2xl mx-auto text-sm leading-relaxed">
              Every stay at Riad Fez is designed around peace, tactile comfort, and timeless Moroccan generosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col lg:flex-row"
              >
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden bg-stone-100">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${service.badgeColor}`}>
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value Guarantee */}
          <div className="mt-16 bg-white p-8 rounded-3xl border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-foreground">
                  {language === 'fr' ? 'Conciergerie Dédiée 24h/24' : '24/7 Dedicated Medina Concierge'}
                </h4>
                <p className="text-stone-600 text-xs">
                  {language === 'fr'
                    ? 'Assistance bagages, réservations de restaurants et visites guidées privées.'
                    : 'Luggage assistance at Medina gates, restaurant bookings, and private guided excursions.'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-stone-500 text-xs font-semibold uppercase tracking-wider">
              <Clock size={16} className="text-primary" />
              <span>{language === 'fr' ? 'Accueil personnalisé à toute heure' : 'Check-in & Tea on demand'}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
