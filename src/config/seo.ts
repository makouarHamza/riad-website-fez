export interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export interface SiteSEOConfig {
  siteName: string;
  baseUrl: string;
  defaultOgImage: string;
  routes: {
    [key: string]: {
      en: RouteSEO;
      fr: RouteSEO;
    };
  };
}

export const SEO_CONFIG: SiteSEOConfig = {
  siteName: 'Riad Fez',
  baseUrl: typeof window !== 'undefined' ? window.location.origin : 'https://riadfez.com',
  defaultOgImage: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=1200',
  routes: {
    home: {
      en: {
        title: 'Riad Fez | Luxury Boutique Hotel & Sanctuary in Fez Medina',
        description: 'Experience an ethereal sanctuary in the heart of Fez Medina. Handcrafted architecture, tranquil courtyards, sun-bleached terracotta, and authentic Moroccan hospitality.',
        keywords: 'Riad Fez, Fez boutique hotel, luxury riad Morocco, Medina Fez lodging, authentic Moroccan riad, travel Fez',
        ogTitle: 'Riad Fez | Ethereal Moroccan Luxury in Ancient Fez',
        ogDescription: 'A sanctuary of light and craft nestled within the ancient Medina. Reserve your room and experience timeless Moroccan hospitality.',
        ogType: 'website',
      },
      fr: {
        title: 'Riad Fès | Hôtel Boutique de Luxe & Sanctuaire dans la Médina',
        description: 'Découvrez un sanctuaire éthéré au cœur de la Médina de Fès. Architecture artisanale, patios paisibles, terre cuite patinée et hospitalité marocaine d’exception.',
        keywords: 'Riad Fès, hôtel boutique Fès, riad de luxe Maroc, hébergement Médina Fès, séjour authentique Fès',
        ogTitle: 'Riad Fès | Luxe Éthéré au Cœur de la Médina',
        ogDescription: 'Un havre de paix et d’artisanat traditionnel niché au cœur de la Médina. Réservez votre séjour inoubliable.',
        ogType: 'website',
      },
    },
    about: {
      en: {
        title: 'Our Heritage & Master Artisans | Riad Fez Morocco',
        description: 'Discover the 17th-century heritage of Riad Fez, our dedicated artisan craftspeople, culinary workshops, and trusted guest reviews.',
        keywords: 'Riad Fez history, Moroccan artisans, zellige Fez, Fez cooking class, Fez architecture heritage',
        ogTitle: 'Our Heritage & Craftsmanship | Riad Fez',
        ogDescription: 'Built in the 17th century and restored with passion. Meet our master artisans and culinary masters.',
        ogType: 'article',
      },
      fr: {
        title: 'Notre Histoire & Maîtres Artisans | Riad Fès Maroc',
        description: 'Plongez dans l’histoire du 17e siècle du Riad Fès, rencontrez nos maîtres artisans, nos ateliers de cuisine et les avis de nos hôtes.',
        keywords: 'Histoire Riad Fès, artisans marocains, zellige Fès, cours de cuisine Fès, patrimoine Médina',
        ogTitle: 'Notre Histoire & Artisanat | Riad Fès',
        ogDescription: 'Bâti au XVIIe siècle et restauré avec amour. Découvrez l’histoire et l’équipe du Riad Fès.',
        ogType: 'article',
      },
    },
    services: {
      en: {
        title: 'Curated Services & Experiences | Riad Fez',
        description: 'Indulge in complimentary patio tea, traditional breakfast buffets, welcome amenities, and private chauffeured excursions across Fez.',
        keywords: 'Riad Fez services, Moroccan breakfast patio, mint tea service, Fez car rental, Moroccan spa experiences',
        ogTitle: 'Services & Moroccan Hospitality | Riad Fez',
        ogDescription: 'From arrival mint tea to gourmet Medina breakfasts, explore our curated hospitality offerings.',
        ogType: 'website',
      },
      fr: {
        title: 'Services d’Exception & Expériences | Riad Fès',
        description: 'Profitez du thé à la menthe offert en patio, de nos petits-déjeuners gourmands, de l’accueil traditionnel et de notre service de conciergerie.',
        keywords: 'Services Riad Fès, petit déjeuner traditionnel patio, thé marocain, location voiture Fès, conciergerie Fès',
        ogTitle: 'Services & Hospitalité Marocaine | Riad Fès',
        ogDescription: 'Du thé d’accueil aux délices du petit-déjeuner au patio, vivez une expérience sur mesure.',
        ogType: 'website',
      },
    },
    gallery: {
      en: {
        title: 'Visual Gallery & Moments of Light | Riad Fez',
        description: 'Explore high-resolution photographs of our sculpted courtyard, handcrafted suites, rooftop terrace, and culinary creations.',
        keywords: 'Riad Fez photo gallery, Medina rooftop view, Moroccan interior photos, luxury riad suites Fez',
        ogTitle: 'Visual Gallery | Moments of Light at Riad Fez',
        ogDescription: 'Immerse yourself in photos of our sunlit patio, suites, and panoramic Medina views.',
        ogType: 'website',
      },
      fr: {
        title: 'Galerie Photos & Moments de Lumière | Riad Fès',
        description: 'Explorez en images notre patio sculpté, nos suites raffinées, notre terrasse panoramique et nos créations gastronomiques.',
        keywords: 'Photos Riad Fès, terrasse Médina, suites riad luxe, galerie photos Maroc',
        ogTitle: 'Galerie Photos | Moments de Lumière au Riad Fès',
        ogDescription: 'Admirez les détails architecturaux et la beauté paisible de notre riad.',
        ogType: 'website',
      },
    },
    contact: {
      en: {
        title: 'Contact Concierge & Location Map | Riad Fez Medina',
        description: 'Reach our 24/7 concierge in the ancient Medina of Fez. Interactive location map, direct telephone, email, and inquiry form.',
        keywords: 'Contact Riad Fez, Fez Medina map, directions Riad Fez, hotel concierge Fez, book stay Fez',
        ogTitle: 'Contact & Directions | Riad Fez Medina',
        ogDescription: 'Find us in the heart of the Medina or send an inquiry directly to our concierge.',
        ogType: 'website',
      },
      fr: {
        title: 'Contact Conciergerie & Plan d’Accès | Riad Fès Médina',
        description: 'Contactez notre conciergerie dans la Médina de Fès. Plan interactif, coordonnées téléphoniques, e-mail et formulaire de message.',
        keywords: 'Contact Riad Fès, adresse Médina Fès, plan d’accès riad, conciergerie Fès, téléphone Riad Fès',
        ogTitle: 'Contact & Localisation | Riad Fès Médina',
        ogDescription: 'Trouvez notre riad au cœur de la Médina ou écrivez-nous pour préparer votre arrivée.',
        ogType: 'website',
      },
    },
    reserve: {
      en: {
        title: 'Book Your Stay | Direct Reservation | Riad Fez',
        description: 'Reserve your luxury retreat at Riad Fez. Direct booking with best rate guarantee, customized suites, and personalized Moroccan hospitality.',
        keywords: 'Book Riad Fez, reserve hotel Fez, best rate riad Fez, boutique suite booking Fez, online reservation Fez',
        ogTitle: 'Reserve Your Sanctuary | Riad Fez',
        ogDescription: 'Secure your stay with direct reservation benefits and customized concierge arrangements.',
        ogType: 'website',
      },
      fr: {
        title: 'Réservez Votre Séjour | Réservation Directe | Riad Fès',
        description: 'Réservez votre séjour d’exception au Riad Fès. Meilleur tarif garanti, suites personnalisées et accueil sur mesure.',
        keywords: 'Réservation Riad Fès, réserver hôtel Fès, tarif direct riad, suite de luxe Fès réservation en ligne',
        ogTitle: 'Réservez Votre Havre de Paix | Riad Fès',
        ogDescription: 'Garantissez vos dates au meilleur tarif pour un séjour d’exception au cœur de Fès.',
        ogType: 'website',
      },
    },
  },
};
