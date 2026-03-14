import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);
  const heroLogo = siteData.images.logo?.navbar || siteData.images.logo?.primary;

  const goTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20 z-0">
        {/* Real background image from the restaurant */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${siteData.images.hero}')`,
            backgroundPosition: 'center 38%',
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-wood-950/62" />
      </motion.div>

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-wood-950/55 via-wood-900/20 to-wood-950/25 z-10" />

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-20 text-center px-6 max-w-4xl">
        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="w-20 h-px bg-terracotta-400 mx-auto mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-terracotta-300 uppercase tracking-[0.35em] text-xs md:text-sm mb-5 font-sans font-bold"
        >
          Bologna
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62 }}
          className="mb-5 flex justify-center"
        >
          <div className="rounded-xl bg-cream-50/88 px-4 py-2 shadow-lg ring-1 ring-wood-200/60 backdrop-blur-[1px]">
            <img
              src={heroLogo}
              alt="Trattoria La Gatta"
              className="h-10 md:h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-cream-50 mb-4 leading-[1.1]"
        >
          Trattoria
          <br />
          <span className="italic text-terracotta-400">La Gatta</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-cream-200/80 text-base md:text-xl max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed"
        >
          {siteData.hero.subtitle} — cucina mediterranea-creativa nel segno della qualità e della semplicità
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contatti"
            onClick={(e) => goTo(e, '#contatti')}
            className="inline-block bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 px-8 py-4 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-600/25 hover:-translate-y-0.5"
          >
            Prenota il tuo tavolo
          </a>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#menu');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="inline-block border border-cream-200/30 hover:border-cream-200/60 text-cream-100 px-8 py-4 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
          >
            Scopri il Menu
          </a>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: 'easeOut' }}
          className="w-20 h-px bg-terracotta-400 mx-auto mt-12 origin-center"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-cream-200/25 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-1.5 rounded-full bg-terracotta-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
