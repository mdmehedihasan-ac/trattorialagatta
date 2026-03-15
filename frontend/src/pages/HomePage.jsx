import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { siteData } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HomePage() {
  const { hero, about, images, contact, seo } = siteData;

  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} path={seo.home.path} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('${images.hero}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/60 to-espresso-900/15" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full px-8 md:px-16 lg:px-24 pb-20 md:pb-28 flex flex-col items-center text-center"
        >
          <motion.img
            variants={fadeUp}
            custom={0.1}
            src={images.logo.primary}
            alt="Trattoria La Gatta"
            className="w-96 md:w-[560px] lg:w-[680px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] mb-8"
            loading="eager"
            decoding="async"
          />
          <motion.div variants={fadeUp} custom={0.25} className="h-px w-16 bg-terracotta-400 mb-7" />
          <motion.div variants={fadeUp} custom={0.5} className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/contatti" className="cta-primary">{hero.primaryCta}</Link>
            <Link to="/menu" className="cta-secondary">{hero.secondaryCta}</Link>
          </motion.div>
        </motion.div>

        {/* scroll line */}
        <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3" aria-hidden>
          <div className="h-14 w-px bg-gradient-to-b from-cream-50/0 to-cream-50/35" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-cream-50/35">Scorri</span>
        </div>
      </section>

      {/* ── ABOUT FULL-BLEED ────────────────────────────────── */}
      <section className="bg-espresso-900 text-cream-100">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 items-stretch">
          <div className="px-8 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center order-2 md:order-1">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-200 mb-4">Chi siamo</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream-50">
              Trent'anni di cucina<br />
              <em className="text-terracotta-200">mediterranea-creativa</em>
            </h2>
            <div className="h-px w-12 bg-terracotta-400 my-6" />
            <p className="text-base md:text-lg leading-relaxed text-cream-100/70 max-w-md">
              {about.long}
            </p>
            <Link to="/chi-siamo" className="mt-8 self-start cta-primary">
              La nostra storia
            </Link>
          </div>
          <div className="h-72 md:h-auto order-1 md:order-2 md:p-6 lg:p-8">
            <div className="h-full overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <img
              src={images.foodPortrait[1]}
              alt="Cucina di Trattoria La Gatta"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            </div>
          </div>
        </div>
      </section>

      {/* ── REGOLA DEL 3 STEPS ──────────────────────────────── */}
      <section className="section-padding bg-cream-200">
        <div className="inner-max">
          <div className="mb-12 md:mb-16">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-600 mb-3">La nostra filosofia</span>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso-900">
              Regola del&nbsp;<em>3</em>
            </h2>
            <div className="h-px w-12 bg-terracotta-400 mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {about.steps.map((step, i) => (
              <div key={step.title} className="relative overflow-hidden rounded-2xl border border-espresso-100 bg-cream-100 p-8 md:p-10 shadow-[0_4px_20px_rgba(4,9,12,0.10)] hover:shadow-[0_12px_36px_rgba(4,9,12,0.18)] hover:-translate-y-1 transition-all duration-300">
                <span className="absolute -bottom-2 -right-1 font-serif text-[96px] leading-none text-espresso-900/5 select-none">
                  0{i + 1}
                </span>
                <p className="text-[10px] uppercase tracking-[0.35em] text-terracotta-500 mb-3">0{i + 1}</p>
                <h3 className="font-serif text-2xl text-espresso-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ───────────────────────────────────── */}
      <section className="overflow-hidden rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="grid grid-cols-2 md:grid-cols-4 h-56 md:h-80">
          {[images.food[1], images.food[3], images.food[4], images.foodPortrait[1]].map((src, i) => (
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

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="section-padding bg-cream-100">
        <div className="inner-max max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-300 mb-3">Recensioni</span>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso-900">
              Cosa dicono <em>i nostri ospiti</em>
            </h2>
            <div className="h-px w-12 bg-terracotta-300 mx-auto mt-5" />
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── PRENOTA CTA ─────────────────────────────────────── */}
      <section className="bg-terracotta-600 section-padding">
        <div className="inner-max text-center">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-100 mb-3">Prenotazioni</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-50 leading-tight">
            Riserva il tuo tavolo
          </h2>
          <p className="mt-4 text-base text-cream-50/75 max-w-sm mx-auto leading-relaxed">{contact.bookingNote}</p>
          <Link to="/contatti" className="mt-8 inline-flex items-center justify-center rounded-full bg-cream-50 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta-700 hover:bg-cream-100 transition-colors duration-300">
            Prenota ora via WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
