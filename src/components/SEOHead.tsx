import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { SEO_CONFIG, RouteSEO } from '../config/seo';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  routeKey?: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'reserve';
  customMetadata?: Partial<RouteSEO>;
  ogImage?: string;
}

export default function SEOHead({ routeKey = 'home', customMetadata, ogImage }: SEOHeadProps) {
  const { language } = useLanguage();
  const location = useLocation();

  const routeData = SEO_CONFIG.routes[routeKey]?.[language] || SEO_CONFIG.routes.home[language];

  const title = customMetadata?.title || routeData.title;
  const description = customMetadata?.description || routeData.description;
  const keywords = customMetadata?.keywords || routeData.keywords;
  const ogTitle = customMetadata?.ogTitle || routeData.ogTitle || title;
  const ogDescription = customMetadata?.ogDescription || routeData.ogDescription || description;
  const ogType = customMetadata?.ogType || routeData.ogType || 'website';
  const image = ogImage || SEO_CONFIG.defaultOgImage;

  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${location.pathname}`
    : `${SEO_CONFIG.baseUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary HTML Language & Charset */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical link */}
      <link rel="canonical" href={currentUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
