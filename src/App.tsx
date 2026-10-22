import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import { SEO_CONFIG } from './config/seo';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Route-aware React Helmet manager inside the main App wrapper
 * Automatically syncs <title>, <meta description>, OpenGraph, and language tags
 * across all routes and user language preferences.
 */
function DynamicAppHelmet() {
  const location = useLocation();
  const { language } = useLanguage();

  const getRouteKey = (pathname: string): 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'reserve' => {
    switch (pathname) {
      case '/about':
        return 'about';
      case '/services':
        return 'services';
      case '/gallery':
        return 'gallery';
      case '/contact':
        return 'contact';
      case '/reserve':
        return 'reserve';
      default:
        return 'home';
    }
  };

  const key = getRouteKey(location.pathname);
  const routeData = SEO_CONFIG.routes[key]?.[language] || SEO_CONFIG.routes.home[language];
  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${location.pathname}`
    : `${SEO_CONFIG.baseUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary HTML Language & Document Title */}
      <html lang={language} />
      <title>{routeData.title}</title>
      <meta name="description" content={routeData.description} />
      <meta name="keywords" content={routeData.keywords} />

      {/* Canonical link */}
      <link rel="canonical" href={currentUrl} />

      {/* OpenGraph / Social Cards */}
      <meta property="og:type" content={routeData.ogType || 'website'} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:title" content={routeData.ogTitle || routeData.title} />
      <meta property="og:description" content={routeData.ogDescription || routeData.description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={SEO_CONFIG.defaultOgImage} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={routeData.ogTitle || routeData.title} />
      <meta name="twitter:description" content={routeData.ogDescription || routeData.description} />
      <meta name="twitter:image" content={SEO_CONFIG.defaultOgImage} />
    </Helmet>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/reserve" element={<PageWrapper><Reservation /></PageWrapper>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <DynamicAppHelmet />
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#241B16] selection:bg-secondary/20 selection:text-secondary">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
