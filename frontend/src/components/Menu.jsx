import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

/* Inline SVG icons for each menu category */
const icons = {
  mare: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 30c4-4 8 0 12-4s8 0 12-4 8 0 12-4" strokeLinecap="round" />
      <path d="M4 36c4-4 8 0 12-4s8 0 12-4 8 0 12-4" strokeLinecap="round" />
      <circle cx="24" cy="18" r="6" />
      <path d="M24 12V6M30 18h6M18 18h-6" strokeLinecap="round" />
    </svg>
  ),
  terra: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 42V22" strokeLinecap="round" />
      <path d="M24 22c-2-8-12-14-12-14s4 10 12 14z" />
      <path d="M24 22c2-8 12-14 12-14s-4 10-12 14z" />
      <path d="M24 30c-4-6-10-6-10-6s2 6 10 6z" />
      <path d="M24 30c4-6 10-6 10-6s-2 6-10 6z" />
    </svg>
  ),
  carta: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <line x1="16" y1="14" x2="32" y2="14" strokeLinecap="round" />
      <line x1="16" y1="20" x2="32" y2="20" strokeLinecap="round" />
      <line x1="16" y1="26" x2="28" y2="26" strokeLinecap="round" />
      <line x1="16" y1="32" x2="24" y2="32" strokeLinecap="round" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: 'easeOut' },
  }),
};

export default function Menu() {
  const [menu, setMenu] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    fetch('/api/menu')
      .then((r) => r.json())
      .then(setMenu)
      .catch(() => setMenu(null));
  }, []);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.classList.add('menu-lightbox-open');
    } else {
      document.body.classList.remove('menu-lightbox-open');
    }

    return () => document.body.classList.remove('menu-lightbox-open');
  }, [selectedImageIndex]);

  useEffect(() => {
    if (selectedImageIndex === null) {
      return undefined;
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % menuImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedImageIndex]);

  const data = menu || siteData.menu;
  const menuImages = [
    { src: siteData.images.menuFront, alt: 'Menu del mese - fronte' },
    { src: siteData.images.menuRear, alt: 'Menu del mese - retro' },
  ];

  const openImage = (index) => setSelectedImageIndex(index);
  const closeImage = () => setSelectedImageIndex(null);
  const showNextImage = () => setSelectedImageIndex((prev) => (prev + 1) % menuImages.length);
  const showPrevImage = () => setSelectedImageIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);

  return (
    <section id="menu" data-nav-theme="light" className="section-padding bg-white relative">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="section-title">Il Menu</h2>
          <div className="section-divider mt-6 mb-8" />
          <p className="text-wood-600 max-w-2xl mx-auto leading-relaxed">
            {data.philosophy || siteData.menu.philosophy}
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {(data.categories || siteData.menu.categories).map((cat, i) => (
            <motion.div
              key={cat.id || i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-cream-50 rounded-2xl p-8 md:p-10 text-center border border-wood-100 hover:border-terracotta-200 transition-colors duration-500 hover:shadow-xl hover:shadow-terracotta-100/40 cursor-default"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-terracotta-50 text-terracotta-600 group-hover:bg-terracotta-100 transition-colors duration-500 mb-6">
                {icons[cat.icon] || icons.carta}
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-wood-800 mb-3">
                {cat.name}
              </h3>

              <p className="text-wood-500 text-sm uppercase tracking-widest mb-6">
                {cat.shortDesc || cat.description}
              </p>

              <div className="w-8 h-px bg-terracotta-300 mx-auto" />
            </motion.div>
          ))}
        </div>

        {/* Intro text + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-wood-600 max-w-xl mx-auto mb-8 leading-relaxed">
            {data.intro || siteData.menu.intro}
          </p>
          <a
            href="https://wa.me/393334198055?text=Buongiorno%2C%20vorrei%20ricevere%20il%20menu%20del%20mese%20per%20favore.%20Grazie!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wood-900 hover:bg-wood-800 text-cream-50 px-8 py-4 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Chiedi il menu del mese
          </a>
        </motion.div>

        {/* Menu scan images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-center text-wood-500 text-sm uppercase tracking-widest mb-8">Menu del mese corrente</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <img
              src={menuImages[0].src}
              alt={menuImages[0].alt}
              className="w-full rounded-2xl shadow-lg border border-wood-100 cursor-zoom-in transition-transform duration-300 hover:scale-[1.01]"
              loading="lazy"
              onClick={() => openImage(0)}
            />
            <img
              src={menuImages[1].src}
              alt={menuImages[1].alt}
              className="w-full rounded-2xl shadow-lg border border-wood-100 cursor-zoom-in transition-transform duration-300 hover:scale-[1.01]"
              loading="lazy"
              onClick={() => openImage(1)}
            />
          </div>
        </motion.div>

        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Anteprima immagine menu"
            onClick={closeImage}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              aria-label="Chiudi anteprima"
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-full bg-wood-900/75 hover:bg-wood-800 text-cream-50 border border-cream-50/20 flex items-center justify-center text-2xl leading-none"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}
              aria-label="Immagine precedente"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-wood-900/75 hover:bg-wood-800 text-cream-50 border border-cream-50/20 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 4 7 10 13 16" /></svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              aria-label="Immagine successiva"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-wood-900/75 hover:bg-wood-800 text-cream-50 border border-cream-50/20 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 4 13 10 7 16" /></svg>
            </button>

            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <img
                src={menuImages[selectedImageIndex].src}
                alt={menuImages[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-cream-100/80 text-xs uppercase tracking-widest">
                {selectedImageIndex + 1} / {menuImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
