import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import ContactForm from './ContactForm';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const { contact, social } = siteData;

export default function Contact() {
  return (
    <section id="contatti" data-nav-theme="light" className="section-padding bg-cream-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wood-200/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2 variants={fadeUp} custom={0} className="section-title">
            Contatti
          </motion.h2>
          <motion.div variants={fadeUp} custom={1} className="section-divider mt-6 mb-8" />
          <motion.p variants={fadeUp} custom={2} className="text-wood-600 max-w-2xl mx-auto leading-relaxed">
            {contact.intro}
          </motion.p>
        </motion.div>

        {/* Grid: info + form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left – Info & Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            {/* Address card */}
            <motion.div variants={fadeUp} custom={0} className="bg-white rounded-2xl p-8 border border-wood-100 shadow-sm">
              <h3 className="font-serif text-xl text-wood-800 mb-4">Dove siamo</h3>
              <p className="text-wood-600 leading-relaxed mb-1 flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-terracotta-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                {contact.address}
              </p>
              <p className="text-wood-600 leading-relaxed mb-4">{contact.cap} {contact.city} — {contact.location}</p>

              <h3 className="font-serif text-xl text-wood-800 mb-4 mt-6">Orari di apertura</h3>
              <div className="space-y-2 text-wood-600 text-sm">
                <p><span className="font-bold text-wood-700">{contact.hours.days}</span></p>
                <p>Pranzo: {contact.hours.lunch}</p>
                <p>Cena: {contact.hours.dinner}</p>
                <p className="text-wood-400 mt-2">Chiuso: {contact.hours.closed}</p>
              </div>
            </motion.div>

            {/* Contact details */}
            <motion.div variants={fadeUp} custom={1} className="bg-wood-900 rounded-2xl p-8 text-cream-50">
              <h3 className="font-serif text-xl mb-5">Prenotazioni</h3>
              <p className="text-cream-200/80 text-sm leading-relaxed mb-6">{contact.bookingNote}</p>

              <div className="space-y-3 text-sm">
                <a href={`tel:${contact.phoneRaw}`} className="flex items-center gap-3 text-cream-100 hover:text-terracotta-300 transition-colors">
                  <svg className="w-5 h-5 text-terracotta-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  <span>{contact.phone}</span>
                </a>
                <a href={`https://wa.me/39${contact.mobileRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cream-100 hover:text-terracotta-300 transition-colors">
                  <svg className="w-5 h-5 text-terracotta-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                  <span>{contact.mobile} (WhatsApp)</span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-cream-100 hover:text-terracotta-300 transition-colors">
                  <svg className="w-5 h-5 text-terracotta-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <span>{contact.email}</span>
                </a>
              </div>

              <div className="flex gap-4 mt-6 pt-5 border-t border-cream-50/10">
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-cream-200/60 hover:text-terracotta-300 transition-colors text-sm uppercase tracking-widest">
                  Facebook
                </a>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream-200/60 hover:text-terracotta-300 transition-colors text-sm uppercase tracking-widest">
                  Instagram
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUp} custom={2} className="rounded-2xl overflow-hidden border border-wood-100 shadow-sm">
              <iframe
                title="Trattoria La Gatta — Mappa"
                src="https://maps.google.com/maps?q=Trattoria+La+Gatta+Via+Bellaria+18+Bologna+Italia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={fadeUp} custom={0} className="bg-white rounded-2xl p-8 md:p-10 border border-wood-100 shadow-sm sticky top-28">
              <h3 className="font-serif text-2xl text-wood-800 mb-2">Scrivici</h3>
              <p className="text-wood-500 text-sm mb-8">{contact.emailNote}</p>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
