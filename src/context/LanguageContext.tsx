import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.reserve': 'Book Now',
    'hero.title': 'An Ethereal Escape in the Heart of Fez',
    'hero.subtitle': 'Experience the tactile warmth of sun-bleached terracotta and saffron gold.',
    'hero.cta': 'Discover the Riad',
    'about.summary.title': 'Our Story',
    'about.summary.text': 'Riad Fez is a sanctuary of light and craft, where traditional Moroccan architecture meets modern ethereal design.',
    'services.featured': 'Featured Services',
    'testimonials.title': 'Guest Experiences',
    'footer.rights': 'All rights reserved.',
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'reservation.title': 'Reserve Your Stay',
    'reservation.date': 'Arrival Date',
    'reservation.people': 'Number of People',
    'reservation.submit': 'Confirm Reservation',
    'history.title': 'History of the Riad',
    'mission.title': 'Mission & Vision',
    'team.title': 'Our Team',
    'reviews.title': 'Google Reviews',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.reserve': 'Réserver',
    'hero.title': 'Une Évasion Éthérée au Cœur de Fès',
    'hero.subtitle': 'Découvrez la chaleur tactile de la terre cuite blanchie par le soleil et de l\'or safran.',
    'hero.cta': 'Découvrir le Riad',
    'about.summary.title': 'Notre Histoire',
    'about.summary.text': 'Le Riad Fès est un sanctuaire de lumière et d\'artisanat, où l\'architecture traditionnelle marocaine rencontre le design éthéré moderne.',
    'services.featured': 'Services Vedettes',
    'testimonials.title': 'Expériences Clients',
    'footer.rights': 'Tous droits réservés.',
    'contact.title': 'Contactez-nous',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'reservation.title': 'Réservez Votre Séjour',
    'reservation.date': 'Date d\'arrivée',
    'reservation.people': 'Nombre de personnes',
    'reservation.submit': 'Confirmer la réservation',
    'history.title': 'Histoire du Riad',
    'mission.title': 'Mission & Vision',
    'team.title': 'Notre Équipe',
    'reviews.title': 'Avis Google',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
