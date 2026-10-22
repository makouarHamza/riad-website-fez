import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8', category: 'Rooms' },
    { url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2', category: 'Terrace' },
    { url: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e84', category: 'Food' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4', category: 'Rooms' },
    { url: 'https://images.unsplash.com/photo-1576091160550-2173bdd99802', category: 'Patio' },
    { url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d', category: 'Food' },
    { url: 'https://images.unsplash.com/photo-1544787210-228394c3d3e2', category: 'Terrace' },
    { url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf', category: 'Patio' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-tertiary mb-6 uppercase tracking-widest">Gallery</h1>
            <p className="text-foreground/40 uppercase tracking-[0.3em] text-xs font-bold">Visualizing Ethereal Moments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative aspect-square group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedImg(`${img.url}?auto=format&fit=crop&q=80&w=1200`)}
              >
                <img
                  src={`${img.url}?auto=format&fit=crop&q=80&w=600`}
                  alt={img.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <Maximize2 className="text-primary mx-auto mb-2" size={32} />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-surface/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-8 right-8 text-primary hover:text-foreground transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Enlarged view"
              className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
