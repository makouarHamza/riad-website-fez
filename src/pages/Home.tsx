import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Home() {
  const { t } = useLanguage();

  const galleryImages = [
    'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000',
  ];

  const testimonials = [
    { name: 'Sarah L.', role: 'Guest from London', text: 'An absolute dream. The natural light filtering through the courtyard and the attentive hospitality made this our favorite stay in Morocco.', rating: 5 },
    { name: 'Marc D.', role: 'Voyageur de Paris', text: 'Le plus beau riad de Fès. Une atmosphère paisible, un petit-déjeuner somptueux sur le patio et des artisans passionnés.', rating: 5 },
    { name: 'Elena R.', role: 'Guest from Milan', text: 'The cooking class and terrace sunset were the highlights of our trip. Truly restorative and magical.', rating: 5 },
  ];

  return (
    <div className="pt-20">
      <SEOHead routeKey="home" />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=2000"
            alt="Riad Fez Sunny Courtyard"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-900/40 to-stone-900/25"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-sm"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#FFD8CD] font-medium mb-10 tracking-wide max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/reserve"
              className="inline-flex items-center space-x-3 bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
            >
              <span>{t('nav.reserve')}</span>
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-white border-b border-stone-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-3">
              Heritage & Sanctuary
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 uppercase tracking-wider">
              {t('about.summary.title')}
            </h2>
            <p className="text-xl text-stone-700 leading-relaxed mb-6 font-light italic">
              {t('about.summary.text')}
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Nestled within the labyrinthine streets of the ancient Medina, Riad Fez is a living testament to the master artisan's hand. Every hand-cut zellige tile and carved cedar beam reflects centuries of craftsmanship infused with serene Mediterranean light.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-secondary font-bold uppercase tracking-widest text-xs border-b-2 border-secondary/40 pb-1 hover:border-secondary transition-all"
            >
              <span>Learn Our History</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1000"
                alt="Moroccan Architecture Courtyard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/15 rounded-3xl -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Swiper: Moments of Light */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Atmosphere
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-widest">
              Moments of Light
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-secondary text-xs font-bold uppercase tracking-widest hover:underline"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="pb-12"
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone-200 group cursor-pointer bg-stone-100">
                  <img
                    src={img}
                    alt={`Riad Fez interior moment ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tertiary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
            Verified Stays
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-16 uppercase tracking-widest">
            {t('testimonials.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FAF8F5] p-8 md:p-10 rounded-3xl border border-stone-200 text-left shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex space-x-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-tertiary text-tertiary" />
                    ))}
                  </div>
                  <p className="text-stone-700 italic mb-8 leading-relaxed text-sm">
                    "{item.text}"
                  </p>
                </div>
                <div className="border-t border-stone-200 pt-4">
                  <h4 className="text-primary font-bold uppercase tracking-wider text-xs">
                    {item.name}
                  </h4>
                  <span className="text-stone-500 text-xs">{item.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Preview & Map */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Medina Access
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 uppercase tracking-widest">
              Visit Us in Fez
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs text-foreground mb-1">Address</h4>
                  <p className="text-stone-600 text-sm">12 Derb El Miter, Medina, Fez 30000, Morocco</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs text-foreground mb-1">Phone & WhatsApp</h4>
                  <p className="text-stone-600 text-sm">+212 535 634 321</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs text-foreground mb-1">Concierge Email</h4>
                  <p className="text-stone-600 text-sm">contact@riadfez.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block bg-secondary text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-all shadow-sm"
              >
                Send Concierge Inquiry
              </Link>
            </div>
          </div>

          <div className="h-[420px] rounded-3xl overflow-hidden border border-stone-300 shadow-md bg-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.634356494747!2d-5.000000!3d34.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzAwLjAiTiA1wrAwMCcwMC4wIlc!5e0!3m2!1sen!2sma!4v1610000000000!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Riad Fez Map Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
