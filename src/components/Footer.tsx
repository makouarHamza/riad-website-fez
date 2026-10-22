import { Facebook, Instagram, Youtube, MessageCircle, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/riad', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/riad', label: 'Instagram' },
    { icon: MessageCircle, url: 'https://wa.me/riad', label: 'WhatsApp' },
    { icon: Music2, url: 'https://www.tiktok.com/@riad', label: 'TikTok' },
    { icon: Youtube, url: 'https://www.youtube.com/riad', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#F4F0EA] border-t border-stone-200/80 pt-16 pb-10 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4 tracking-widest uppercase">
              RIAD FEZ
            </h3>
            <p className="text-stone-600 max-w-md leading-relaxed text-sm">
              A sanctuary of natural daylight, sun-bleached terracotta, and historic cedar architecture in the heart of the ancient Medina. Experience genuine Moroccan hospitality.
            </p>
          </div>
          
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-stone-600 hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-stone-600 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-stone-600 hover:text-primary transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/gallery" className="text-stone-600 hover:text-primary transition-colors">{t('nav.gallery')}</Link></li>
              <li><Link to="/reserve" className="text-stone-600 hover:text-primary transition-colors font-medium">{t('nav.reserve')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-700 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-2xs"
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-4 leading-relaxed">
              12 Derb El Miter, Medina, Fez 30000, Morocco
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-300/70 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 tracking-wider">
          <p>© {new Date().getFullYear()} RIAD FEZ. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-primary cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="text-stone-400">Medina Heritage Lodging</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
