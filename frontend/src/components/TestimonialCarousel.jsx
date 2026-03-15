import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteData } from '../data/siteData';

function Stars({ count }) {
  return (
    <div className="mb-4 flex justify-center gap-1 text-terracotta-400" aria-label={`${count} stelle su 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < count ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const reviews = useMemo(() => siteData.testimonials, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [reviews.length]);

  const active = reviews[index];

  return (
    <div className="surface-panel mx-auto max-w-4xl p-8 md:p-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.author + index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center"
        >
          <Stars count={active.rating} />
          <p className="mx-auto max-w-3xl font-serif text-2xl leading-relaxed text-espresso-800 md:text-3xl">
            “{active.quote}”
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-espresso-600">
            {active.author} · {active.source}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-terracotta-500' : 'w-2.5 bg-espresso-200'}`}
            aria-label={`Mostra recensione ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
