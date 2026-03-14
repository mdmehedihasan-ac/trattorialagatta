import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="chi-siamo" className="section-padding bg-cream-50 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta-300/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p variants={fadeUp} custom={0} className="section-subtitle">
            La nostra storia
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title">
            Chi Siamo
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="section-divider mt-6" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: philosophy + food image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <span className="font-serif text-7xl md:text-8xl text-terracotta-200 leading-none select-none">&ldquo;</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-wood-700 text-lg md:text-xl leading-relaxed font-light mb-8"
            >
              {siteData.about.philosophy}
            </motion.p>

            <motion.div variants={fadeUp} custom={2}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-terracotta-400" />
                <p className="text-sm uppercase tracking-widest text-terracotta-600 font-bold">
                  Gerardina &amp; Gerardo
                </p>
              </div>
            </motion.div>

            {/* Food image gallery */}
            <motion.div variants={fadeUp} custom={3} className="mt-10 grid grid-cols-2 gap-3">
              <img
                src={siteData.images.food[0]}
                alt="Piatto della Trattoria La Gatta"
                className="rounded-xl object-cover w-full h-40 md:h-48"
                loading="lazy"
              />
              <img
                src={siteData.images.foodPortrait[0]}
                alt="Specialita della Trattoria La Gatta"
                className="rounded-xl object-cover w-full h-40 md:h-48"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right: story + anniversary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="bg-white rounded-2xl p-8 shadow-sm border border-wood-100"
            >
              <h3 className="font-serif text-2xl text-wood-800 mb-4">La Regola del &ldquo;3&rdquo;</h3>
              <p className="text-wood-600 leading-relaxed">
                {siteData.about.intro}
              </p>
            </motion.div>

            {/* Food image between cards */}
            <motion.div variants={fadeUp} custom={0.5} className="rounded-2xl overflow-hidden">
              <img
                src={siteData.images.food[1]}
                alt="Cucina mediterranea-creativa"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="bg-gradient-to-br from-terracotta-600 to-terracotta-700 rounded-2xl p-8 text-cream-50"
            >
              <h3 className="font-serif text-2xl mb-4">30 Anni di Sapori</h3>
              <p className="text-cream-100/90 leading-relaxed text-sm md:text-base">
                {siteData.about.thirtyYears}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="bg-sage-50 rounded-2xl p-8 border border-sage-100"
            >
              <h3 className="font-serif text-2xl text-wood-800 mb-4">Dicono di Noi</h3>
              <p className="text-wood-600 leading-relaxed text-sm md:text-base">
                {siteData.about.reviews}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Food gallery strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 md:mt-20"
        >
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {siteData.images.food.slice(2, 6).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Trattoria La Gatta - piatto ${i + 1}`}
                className="rounded-xl object-cover w-full h-40 md:h-48"
                loading="lazy"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Full-width anniversary text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 md:mt-24"
        >
          <motion.div
            variants={fadeUp}
            className="relative bg-wood-900 rounded-3xl p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Decorative bg circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-600/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage-600/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <p className="section-subtitle text-terracotta-400">La nostra storia</p>
              <p className="text-cream-100/85 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
                {siteData.about.anniversary}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
