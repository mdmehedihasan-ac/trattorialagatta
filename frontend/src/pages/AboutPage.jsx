import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { siteData } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function AboutPage() {
  const { seo, about, images, contact } = siteData;

  return (
    <>
      <Seo title={seo.about.title} description={seo.about.description} path={seo.about.path} />

      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section className="relative bg-espresso-900 text-cream-100 overflow-hidden" style={{ minHeight: '52vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${images.food[0]}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/40 to-espresso-900" />
        <motion.div
          initial="hidden" animate="visible"
          className="relative z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-24 pt-36 md:pt-44 max-w-screen-xl mx-auto"
        >
          <motion.span variants={fadeUp} custom={0.1} className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-200 mb-4">
            La nostra storia
          </motion.span>
          <motion.h1 variants={fadeUp} custom={0.2} className="font-serif text-5xl md:text-7xl leading-tight text-cream-50">
            Trent'anni di cucina,<br />
            <em className="text-terracotta-200">ricerca e ospitalità</em>
          </motion.h1>
          <motion.div variants={fadeUp} custom={0.3} className="h-px w-12 bg-terracotta-400 mt-7" />
        </motion.div>
      </section>

      {/* ── STORY SECTION ───────────────────────────────────── */}
      <section className="bg-espresso-900 text-cream-100">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 items-stretch">
          <div className="h-72 md:h-auto md:p-6 lg:p-8">
            <div className="h-full overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <img
              src={images.foodPortrait[2]}
              alt="Gerardina e Gerardo in cucina"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            </div>
          </div>
          <div className="px-8 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-200 mb-4">Gerardina e Gerardo</span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-cream-50">
              Una firma gastronomica<br /><em className="text-terracotta-200">riconoscibile</em>
            </h2>
            <div className="h-px w-12 bg-terracotta-400 my-6" />
            <p className="text-base leading-relaxed text-cream-100/70 mb-4">{about.short}</p>
            <p className="text-base leading-relaxed text-cream-100/70">{about.philosophy}</p>
          </div>
        </div>
      </section>

      {/* ── REGOLA DEL 3 ────────────────────────────────────── */}
      <section className="section-padding bg-cream-200">
        <div className="inner-max">
          <div className="mb-12 md:mb-16">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-600 mb-3">Filosofia</span>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso-900">La Regola del <em>3</em></h2>
            <div className="h-px w-12 bg-terracotta-400 mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {about.steps.map((step, idx) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative overflow-hidden rounded-2xl border border-espresso-100 bg-cream-100 p-8 md:p-10 shadow-[0_4px_20px_rgba(4,9,12,0.10)] hover:shadow-[0_12px_36px_rgba(4,9,12,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute -bottom-2 -right-1 font-serif text-[96px] leading-none text-espresso-900/5 select-none">
                  0{idx + 1}
                </span>
                <p className="text-[10px] uppercase tracking-[0.35em] text-terracotta-500 mb-3">0{idx + 1}</p>
                <h3 className="font-serif text-2xl text-espresso-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-700">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section className="overflow-hidden rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="grid grid-cols-3 h-52 md:h-72">
          {[images.food[5], images.food[2], images.foodPortrait[0]].map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={src}
                alt={`Cucina Trattoria La Gatta ${i + 1}`}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────── */}
      <section className="bg-espresso-900 section-padding">
        <div className="inner-max text-center text-cream-50">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            <em>{about.cta}</em>
          </h2>
          <p className="mt-4 text-base text-cream-50/65 max-w-sm mx-auto">{contact.bookingNote}</p>
            <Link to="/contatti" className="mt-8 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-50 hover:bg-terracotta-400 transition-colors duration-300 cta-primary">
            Prenota ora
          </Link>
        </div>
      </section>
    </>
  );
}
