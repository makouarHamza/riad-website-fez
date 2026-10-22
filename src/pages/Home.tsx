import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();

  const galleryImages = [
    'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000',
  ];

  const testimonials = [
    { name: 'Sarah L.', text: 'An absolute dream. The colors, the light, the service - everything was ethereal.', rating: 5 },
    { name: 'Marc D.', text: 'Le plus beau riad de Fès. Une expérience authentique et luxueuse.', rating: 5 },
    { name: 'Elena R.', text: 'The cooking class was the highlight of our trip. Truly magical.', rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=2000"
            alt="Riad Fez Interior"
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-surface/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary font-medium mb-10 tracking-wide"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 bg-primary text-surface px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-primary/80 transition-all group"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 uppercase tracking-widest">
              {t('about.summary.title')}
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-light italic">
              {t('about.summary.text')}
            </p>
            <p className="text-foreground/60 mb-10 leading-relaxed">
              Nestled within the labyrinthine streets of the Medina, our Riad is a testament to the artisan's hand. Every tile, every carved cedar beam tells a story of heritage and light.
            </p>
            <Link to="/about" className="text-tertiary font-bold uppercase tracking-widest border-b-2 border-tertiary/30 pb-1 hover:border-tertiary transition-all">
              Learn More
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-8 border-secondary/20">
              <img
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1000"
                alt="Architecture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary rounded-2xl -z-10 opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Swiper */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <h2 className="text-4xl font-serif font-bold text-foreground uppercase tracking-widest">Moments of Light</h2>
          <Link to="/gallery" className="text-primary text-sm font-bold uppercase tracking-widest hover:underline">View Full Gallery</Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="px-4 md:px-0"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-tertiary mb-16 uppercase tracking-widest">{t('testimonials.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-3xl relative"
              >
                <div className="flex justify-center mb-6 space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-tertiary text-tertiary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-8 leading-relaxed">"{t.text}"</p>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm">— {t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview & Map */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-8 uppercase tracking-widest">Visit Us</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-tertiary mt-1" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-secondary mb-1">Address</h4>
                  <p className="text-foreground/60">12 Derb El Miter, Medina, Fez, Morocco</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-tertiary mt-1" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-secondary mb-1">Phone</h4>
                  <p className="text-foreground/60">+212 535 634 321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-tertiary mt-1" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-secondary mb-1">Email</h4>
                  <p className="text-foreground/60">contact@riadfez.com</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
               <Link to="/contact" className="bg-secondary text-surface px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-secondary/80 transition-all">
                Send a Message
              </Link>
            </div>
          </div>
          <div className="h-[400px] rounded-3xl overflow-hidden border border-primary/20">
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
        </div>
      </section>
    </div>
  );
}
