import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function Gallery() {
  const { language } = useLanguage();
  const [selectedImg, setSelectedImg] = useState<{ url: string; category: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: language === 'fr' ? 'Toutes les Photos' : 'All Moments' },
    { id: 'Rooms', label: language === 'fr' ? 'Suites & Chambres' : 'Suites & Rooms' },
    { id: 'Patio', label: language === 'fr' ? 'Patios & Fontaines' : 'Courtyard Patio' },
    { id: 'Terrace', label: language === 'fr' ? 'Terrasse & Vue' : 'Rooftop Terrace' },
    { id: 'Food', label: language === 'fr' ? 'Gastronomie' : 'Gastronomy' },
  ];

  const images = [
    { url: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8', category: 'Rooms', title: 'Royal Amber Suite' },
    { url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2', category: 'Terrace', title: 'Panoramic Medina Sunset' },
    { url: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e84', category: 'Patio', title: 'Carved Cedar Gallery' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4', category: 'Rooms', title: 'Zellige Fountain Alcove' },
    { url: 'https://images.unsplash.com/photo-1576091160550-2173bdd99802', category: 'Food', title: 'Artisanal Mint Tea & Pastries' },
    { url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d', category: 'Food', title: 'Morning Breakfast Buffet' },
    { url: 'https://images.unsplash.com/photo-1544787210-228394c3d3e2', category: 'Terrace', title: 'Rooftop Lounge Shaded Pergola' },
    { url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf', category: 'Patio', title: 'Marble Basin & Lanterns' },
  ];

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20">
      <SEOHead routeKey="gallery" />

      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Visual Chronicle
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 uppercase tracking-widest">
              {language === 'fr' ? 'Galerie Photographique' : 'Moments of Light'}
            </h1>
            <p className="text-stone-600 max-w-xl mx-auto text-sm leading-relaxed">
              Explore the gentle morning sunlight, cedar woodworks, and handcrafted ceramic mosaics of Riad Fez.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square group cursor-pointer overflow-hidden rounded-2xl bg-stone-100 border border-stone-200 shadow-2xs"
                onClick={() => setSelectedImg({ url: `${img.url}?auto=format&fit=crop&q=80&w=1400`, category: img.title })}
              >
                <img
                  src={`${img.url}?auto=format&fit=crop&q=80&w=600`}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs font-bold tracking-wider uppercase drop-shadow-sm">{img.title}</span>
                    <Maximize2 size={18} className="drop-shadow-sm text-secondary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-stone-900/50 transition-colors"
              onClick={() => setSelectedImg(null)}
              aria-label="Close photo preview"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.category}
                className="max-w-full max-h-[78vh] rounded-2xl shadow-2xl object-contain border border-stone-700"
                referrerPolicy="no-referrer"
              />
              <p className="text-stone-300 text-xs font-serif tracking-widest uppercase mt-4">
                {selectedImg.category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
