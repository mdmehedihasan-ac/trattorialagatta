import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

const galleryTeaser = [
  siteData.images.food[2],
  siteData.images.food[4],
  siteData.images.foodPortrait[1],
];

const faq = [
  {
    q: 'Devo prenotare in anticipo?',
    a: 'Si, soprattutto nel weekend. Ti consigliamo di chiamare con anticipo.',
  },
  {
    q: 'Il menu cambia durante l\'anno?',
    a: 'Si, seguiamo stagionalita e disponibilita delle materie prime.',
  },
  {
    q: 'Posso avere informazioni prima di venire?',
    a: 'Certo, trovi telefono, email e mappa nella pagina contatti.',
  },
];

export default function HomeEssentials() {
  return (
    <>
      <section data-nav-theme="light" className="section-padding bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(185,114,76,0.16),transparent_45%),radial-gradient(circle_at_88%_15%,rgba(93,125,104,0.1),transparent_40%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-wood-900 leading-[1.1] mb-6">
              Una storia lunga 30 anni,
              <br />
              fatta di gusto e semplicita
            </h2>
            <p className="text-wood-700 text-lg leading-relaxed max-w-2xl mb-8">
              {siteData.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/chi-siamo"
                className="inline-block bg-wood-900 hover:bg-wood-800 text-cream-50 px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors"
              >
                Scopri la nostra storia
              </Link>
              <Link
                to="/contatti"
                className="inline-block border border-wood-300 hover:border-wood-500 text-wood-800 px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors"
              >
                Prenota un tavolo
              </Link>
            </div>
            <div className="mt-7 text-sm text-wood-600 flex flex-wrap gap-4">
              <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-600 transition-colors">Facebook</a>
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-600 transition-colors">Instagram</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 md:-top-6 md:-left-6 rounded-2xl bg-terracotta-600 text-cream-50 px-5 py-3 shadow-xl z-10">
              <p className="text-xs uppercase tracking-widest">Dal 1996</p>
            </div>
            <img
              src={siteData.images.food[3]}
              alt="Piatto firmato Trattoria La Gatta"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl border border-wood-100"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section data-nav-theme="dark" className="section-padding bg-wood-900 text-cream-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-terracotta-600/12 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">La Gatta compie 30 anni</h2>
            <p className="text-cream-100/90 leading-relaxed text-lg mb-7">
              {siteData.about.thirtyYears}
            </p>
            <p className="text-cream-100/75 leading-relaxed mb-8">
              Ti aspettiamo in via Bellaria 18/e a Bologna. Per prenotare, chiamaci: 051 545151.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-block bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors"
              >
                Guarda il menu
              </Link>
              <a
                href="tel:051545151"
                className="inline-block border border-cream-100/35 hover:border-cream-100/70 text-cream-50 px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors"
              >
                Chiama ora
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid grid-cols-3 gap-3">
              {galleryTeaser.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Anteprima gallery ${idx + 1}`}
                  className="h-40 md:h-44 w-full object-cover rounded-xl border border-cream-50/15"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/chi-siamo"
                className="text-sm uppercase tracking-widest text-cream-100 hover:text-terracotta-300 transition-colors"
              >
                Scopri di piu su di noi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section data-nav-theme="light" className="section-padding bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(93,125,104,0.08),transparent_45%)]" />
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-wood-900">Degustazioni e carta stagionale</h2>
            <p className="text-wood-700 leading-relaxed mb-8">{siteData.menu.philosophy}</p>
            <ul className="space-y-3 text-wood-600">
              {siteData.menu.categories.map((cat) => (
                <li key={cat.id} className="border-b border-wood-100 pb-3">{cat.name}</li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="inline-block mt-8 bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors"
            >
              Entra nella pagina menu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl bg-white border border-wood-100 shadow-lg p-8"
          >
            <h3 className="font-serif text-3xl mb-5 text-wood-800">Quando trovarci</h3>
            <p className="text-wood-600 mb-5">{siteData.contact.hours.days}</p>
            <div className="space-y-2 text-wood-700">
              <p>Pranzo: {siteData.contact.hours.lunch}</p>
              <p>Cena: {siteData.contact.hours.dinner}</p>
              <p>Chiuso: {siteData.contact.hours.closed}</p>
            </div>
            <Link
              to="/contatti"
              className="inline-block mt-8 border border-wood-300 hover:border-wood-500 text-wood-800 px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors"
            >
              Vai ai contatti completi
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-cream-50 flex justify-center">
        <div className="w-16 h-px bg-terracotta-400" />
      </div>

      <section data-nav-theme="light" className="section-padding bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Domande frequenti</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {faq.map((item, index) => (
              <motion.article
                key={item.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="bg-white border border-wood-100 rounded-2xl p-7"
              >
                <h3 className="font-serif text-xl text-wood-800 mb-3">{item.q}</h3>
                <p className="text-wood-600 leading-relaxed">{item.a}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
