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
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-primary tracking-widest">RIAD FEZ</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="flex items-center space-x-1 text-xs font-bold text-tertiary uppercase border border-tertiary/30 px-2 py-1 rounded hover:bg-tertiary/10 transition-colors"
              >
                <Globe size={14} />
                <span>{language === 'en' ? 'FR' : 'EN'}</span>
              </button>
              
              <Link
                to="/reserve"
                className="bg-primary text-surface px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/80 transition-all transform hover:scale-105"
              >
                {t('nav.reserve')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="text-xs font-bold text-tertiary uppercase"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-b border-primary/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-serif text-foreground/90 hover:text-primary py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/reserve"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-surface py-3 rounded-full font-bold uppercase tracking-widest"
              >
                {t('nav.reserve')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
