import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const logo = siteData.images.logo?.navbar || siteData.images.logo?.primary;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-espresso-900 ${
        scrolled ? 'shadow-lg shadow-black/30' : 'border-b border-espresso-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => go(e, '#hero')}
          className="inline-flex items-center px-1 py-1"
        >
          <img
            src={logo}
            alt="Trattoria La Gatta"
            className="h-8 md:h-9 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="text-cream-100 hover:text-terracotta-300 transition-colors text-sm uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={(e) => go(e, '#contatti')}
            className="ml-2 bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-600/30"
          >
            Prenota
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream-50 focus:outline-none"
          aria-label="Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-espresso-900 border-t border-espresso-800 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="text-cream-100 hover:text-terracotta-300 transition-colors text-lg font-sans"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={(e) => go(e, '#contatti')}
                className="mt-2 bg-terracotta-600 text-cream-50 px-6 py-3 rounded-full text-center text-sm uppercase tracking-widest"
              >
                Prenota Ora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
