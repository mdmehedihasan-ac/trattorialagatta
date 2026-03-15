import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const { contact, about, images } = siteData;

export default function HomeEssentials() {
  return (
    <>
      {/* ── Section 1: Editorial Welcome ── */}
      <section data-nav-theme="light" className="section-padding bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <p className="section-subtitle">Benvenuti</p>
              <h2 className="section-title">Trattoria La Gatta</h2>
              <div className="section-divider mt-6 mb-8 !mx-0" />
              <p className="text-wood-700 text-lg leading-relaxed font-light mb-6">
                {about.philosophy}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-terracotta-400" />
                <p className="text-sm uppercase tracking-widest text-terracotta-600 font-bold">
                  Gerardina &amp; Gerardo
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="grid grid-cols-2 gap-3">
              <img
                src={images.food[0]}
                alt="Piatto della Trattoria La Gatta"
                className="rounded-xl object-cover w-full h-40 md:h-56"
                loading="lazy"
              />
              <img
                src={images.foodPortrait[0]}
                alt="Specialità della Trattoria La Gatta"
                className="rounded-xl object-cover w-full h-40 md:h-56"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: 30 Anni ── */}
      <section data-nav-theme="dark" className="section-padding bg-wood-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="section-subtitle text-terracotta-400">
              La nostra storia
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6 leading-tight">
              30 Anni di Sapori
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="section-divider mt-4 mb-10" />
            <motion.p variants={fadeUp} custom={3} className="text-cream-100/85 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
              {about.thirtyYears}
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="mt-10">
              <Link
                to="/chi-siamo"
                className="inline-block border border-cream-200/30 hover:border-cream-200/60 text-cream-100 px-8 py-4 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
              >
                Scopri la nostra storia
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Menu & Orari Preview ── */}
      <section data-nav-theme="light" className="section-padding bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            {/* Menu preview */}
            <motion.div variants={fadeUp} custom={0}>
              <p className="section-subtitle">Cucina</p>
              <h2 className="font-serif text-3xl md:text-4xl text-wood-800 mb-4 leading-tight">Il Menu</h2>
              <div className="w-12 h-px bg-terracotta-400 mb-6" />
              <p className="text-wood-600 leading-relaxed mb-8">
                {siteData.menu.intro}
              </p>
              <Link
                to="/menu"
                className="inline-block bg-wood-900 hover:bg-wood-800 text-cream-50 px-8 py-4 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Scopri il menu
              </Link>
            </motion.div>

            {/* Orari */}
            <motion.div variants={fadeUp} custom={1} className="bg-white rounded-2xl p-8 border border-wood-100 shadow-sm">
              <h3 className="font-serif text-2xl text-wood-800 mb-6">Orari di apertura</h3>
              <div className="space-y-3 text-wood-600">
                <p><span className="font-bold text-wood-700">{contact.hours.days}</span></p>
                <p>Pranzo: {contact.hours.lunch}</p>
                <p>Cena: {contact.hours.dinner}</p>
                <p className="text-wood-400 mt-2">Chiuso: {contact.hours.closed}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-wood-100">
                <p className="text-wood-600 text-sm leading-relaxed mb-4">{contact.bookingNote}</p>
                <Link
                  to="/contatti"
                  className="inline-block bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300"
                >
                  Prenota ora
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section divider ── */}
      <div className="section-divider" />

      {/* ── Section 4: FAQ ── */}
      <section data-nav-theme="light" className="section-padding bg-cream-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="section-title">
              Domande frequenti
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="section-divider mt-6" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-6"
          >
            {[
              {
                q: 'È necessario prenotare?',
                a: contact.bookingNote,
              },
              {
                q: 'Quali sono i giorni di chiusura?',
                a: `Siamo chiusi ${contact.hours.closed}. Siamo aperti ${contact.hours.days}, a pranzo dalle ${contact.hours.lunch} e a cena dalle ${contact.hours.dinner}.`,
              },
              {
                q: 'È possibile richiedere il menu del mese?',
                a: 'Certo! Potete richiederlo direttamente via WhatsApp e ve lo invieremo subito.',
              },
              {
                q: 'Dove si trova il ristorante?',
                a: `Ci trovate in ${contact.address}, ${contact.cap} ${contact.city} — ${contact.location}`,
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-6 md:p-8 border border-wood-100 shadow-sm"
              >
                <h3 className="font-serif text-lg md:text-xl text-wood-800 mb-3">{faq.q}</h3>
                <p className="text-wood-600 leading-relaxed text-sm md:text-base">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
