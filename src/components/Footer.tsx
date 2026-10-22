import { Facebook, Instagram, Youtube, MessageCircle, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/riad' },
    { icon: Instagram, url: 'https://www.instagram.com/riad' },
    { icon: MessageCircle, url: 'https://wa.me/riad' }, // WhatsApp
    { icon: Music2, url: 'https://www.tiktok.com/@riad' }, // TikTok
    { icon: Youtube, url: 'https://www.youtube.com/riad' },
  ];

  return (
    <footer className="bg-surface border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6 tracking-widest uppercase">RIAD FEZ</h3>
            <p className="text-foreground/60 max-w-md leading-relaxed">
              A sanctuary of ethereal light and sun-bleached terracotta in the heart of the ancient Medina. Experience the true essence of Moroccan hospitality.
            </p>
          </div>
          
          <div>
            <h4 className="text-tertiary font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-foreground/60 hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-foreground/60 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/gallery" className="text-foreground/60 hover:text-primary transition-colors">{t('nav.gallery')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-tertiary font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/5 pt-8 flex flex-col md:row justify-between items-center text-xs text-foreground/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} RIAD FEZ. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
