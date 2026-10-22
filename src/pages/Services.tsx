import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Coffee, Utensils, Info, Car } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: 'Welcome Drink',
      desc: 'A refreshing traditional Moroccan mint tea and almond pastries upon your arrival.',
      icon: Coffee,
      img: 'https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=800',
      color: 'primary'
    },
    {
      title: 'Buffet Breakfast',
      desc: 'A lavish spread of local honey, fresh breads, and seasonal fruits served in our patio.',
      icon: Utensils,
      img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800',
      color: 'secondary'
    },
    {
      title: 'Complimentary Tea',
      desc: 'Enjoy traditional tea throughout the day in our serene traditional patio.',
      icon: Info,
      img: 'https://images.unsplash.com/photo-1544787210-228394c3d3e2?auto=format&fit=crop&q=80&w=800',
      color: 'tertiary'
    },
    {
      title: 'Car Rental Service',
      desc: 'Explore the outskirts of Fez with our premium car rental and chauffeur services.',
      icon: Car,
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      color: 'primary'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 uppercase tracking-widest"
            >
              Our Services
            </motion.h1>
            <p className="text-foreground/60 max-w-2xl mx-auto uppercase tracking-[0.2em] text-xs font-bold">
              Curated experiences for the modern traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl glass border border-primary/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                      service.color === 'primary' ? 'bg-primary/20 text-primary' :
                      service.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                      'bg-tertiary/20 text-tertiary'
                    }`}>
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 uppercase tracking-widest">
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
