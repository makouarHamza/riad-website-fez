import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Zone 1: Brand wordmark */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <span className="text-2xl font-serif font-bold text-foreground hover:text-primary tracking-widest transition-colors">
              RIAD FEZ
            </span>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-semibold tracking-widest uppercase transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-0.5'
                      : 'text-stone-700 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Zone 3: Language Switcher & Primary CTA */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center space-x-1.5 text-xs font-semibold text-stone-700 uppercase border border-stone-300 px-3 py-1.5 rounded-full hover:bg-stone-100 hover:text-primary hover:border-primary/40 transition-colors"
              title="Change language / Changer de langue"
            >
              <Globe size={14} className="text-secondary" />
              <span>{language === 'en' ? 'FR' : 'EN'}</span>
            </button>
            
            <Link
              to="/reserve"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              {t('nav.reserve')}
            </Link>
          </div>

          {/* Mobile Menu Button & Quick Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center space-x-1 text-xs font-semibold text-stone-700 uppercase border border-stone-300 px-2.5 py-1 rounded-full"
            >
              <Globe size={13} className="text-secondary" />
              <span>{language === 'en' ? 'FR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-800 hover:text-primary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF8F5]/98 border-b border-stone-200 shadow-lg px-4 pt-4 pb-8 overflow-hidden"
          >
            <div className="space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-serif tracking-wider py-2 transition-colors ${
                      isActive ? 'text-primary font-bold' : 'text-stone-800 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  to="/reserve"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-white py-3.5 rounded-xl font-bold uppercase tracking-widest shadow-sm"
                >
                  {t('nav.reserve')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
