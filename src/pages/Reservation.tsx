import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Users, CheckCircle, BedDouble, ShieldCheck, Sparkles } from 'lucide-react';
import { FormEvent, useState } from 'react';
import SEOHead from '../components/SEOHead';

export default function Reservation() {
  const { t, language } = useLanguage();
  const [confirmed, setConfirmed] = useState(false);
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    date: '',
    people: '2',
    suiteType: 'Amber Courtyard Suite',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="pt-20">
      <SEOHead routeKey="reserve" />

      <section className="py-24 bg-[#FAF8F5] min-h-[90vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-secondary uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Direct Booking Privileges
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 uppercase tracking-widest"
            >
              {t('reservation.title')}
            </motion.h1>
            <p className="text-stone-600 text-sm max-w-lg mx-auto leading-relaxed">
              {language === 'fr'
                ? 'Réservez directement pour bénéficier du thé d’accueil offert, du petit-déjeuner au patio et du meilleur tarif garanti.'
                : 'Direct reservations include complimentary welcome tea, gourmet courtyard breakfast, and best rate guarantee.'}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-stone-200"
          >
            {confirmed ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  {language === 'fr' ? 'Demande de Réservation Reçue' : 'Reservation Request Confirmed'}
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  {language === 'fr'
                    ? `Merci ${booking.name}. Notre conciergerie a bien reçu votre demande pour le ${booking.date || 'vos dates'} (${booking.people} personne(s)). Nous vous contacterons par email à ${booking.email} sous 24h.`
                    : `Thank you, ${booking.name}. We have logged your booking inquiry for ${booking.date || 'your requested dates'} (${booking.people} guests, ${booking.suiteType}). A personalized confirmation with itinerary details has been sent to ${booking.email}.`}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setConfirmed(false);
                      setBooking({ name: '', email: '', date: '', people: '2', suiteType: 'Amber Courtyard Suite' });
                    }}
                    className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-sm"
                  >
                    {language === 'fr' ? 'Effectuer une autre réservation' : 'Make Another Reservation'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
                    placeholder="Full Name (e.g. Marc Dupont)"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
                    placeholder="email@domain.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    <span className="flex items-center space-x-1.5">
                      <Calendar size={13} className="text-secondary" />
                      <span>{t('reservation.date')}</span>
                    </span>
                  </label>
                  <input
                    type="date"
                    required
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    <span className="flex items-center space-x-1.5">
                      <Users size={13} className="text-secondary" />
                      <span>{t('reservation.people')}</span>
                    </span>
                  </label>
                  <select
                    required
                    value={booking.people}
                    onChange={(e) => setBooking({ ...booking, people: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests (Private Wing)</option>
                  </select>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    <span className="flex items-center space-x-1.5">
                      <BedDouble size={13} className="text-secondary" />
                      <span>{language === 'fr' ? 'Type de Suite Souhaitée' : 'Preferred Suite Category'}</span>
                    </span>
                  </label>
                  <select
                    value={booking.suiteType}
                    onChange={(e) => setBooking({ ...booking, suiteType: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
                  >
                    <option value="Amber Courtyard Suite">Amber Courtyard Suite (Ground Floor with Fountain View)</option>
                    <option value="Terrace Royal Suite">Terrace Royal Suite (Upper Floor with Panoramic Terrace)</option>
                    <option value="Zellige Deluxe Room">Zellige Deluxe Room (Artisanal Moroccan Bath)</option>
                    <option value="Entire Private Riad">Exclusive Private Riad (Entire 6-Suite Property)</option>
                  </select>
                </div>

                <div className="col-span-1 md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
                  >
                    <span>{t('reservation.submit')}</span>
                    <Sparkles size={16} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-stone-500 tracking-wide text-center">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck size={14} className="text-primary" />
              <span>Free cancellation up to 48h prior</span>
            </span>
            <span>·</span>
            <span>No prepayment required today</span>
            <span>·</span>
            <span>Personalized arrival pickup assistance</span>
          </div>
        </div>
      </section>
    </div>
  );
}
