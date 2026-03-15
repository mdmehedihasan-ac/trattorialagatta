import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Chi Siamo', to: '/chi-siamo' },
  { label: 'Menu', to: '/menu' },
  { label: 'Contatti', to: '/contatti' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const location = useLocation();
  const logo = siteData.images.logo?.navbar || siteData.images.logo?.primary;

  // Close mobile drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Dynamic theme detection: check what section is behind the navbar
  const detectTheme = useCallback(() => {
    const probeX = window.innerWidth / 2;
    const probeY = 34;
    const els = document.elementsFromPoint(probeX, probeY);
    let light = true;
    for (const el of els) {
      if (el.dataset?.navbar === 'true') continue;
      const theme = el.dataset?.navTheme;
      if (theme === 'dark') { light = false; break; }
      if (theme === 'light') { light = true; break; }
    }
    setIsLightBackground(light);
  }, []);

  useEffect(() => {
    detectTheme();
    window.addEventListener('scroll', detectTheme, { passive: true });
    window.addEventListener('resize', detectTheme, { passive: true });
    return () => {
      window.removeEventListener('scroll', detectTheme);
      window.removeEventListener('resize', detectTheme);
    };
  }, [detectTheme, location.pathname]);

  // Re-detect after route change and DOM paint
  useEffect(() => {
    const t = setTimeout(detectTheme, 100);
    return () => clearTimeout(t);
  }, [location.pathname, detectTheme]);

  const activeLinkClass = isLightBackground
    ? 'text-wood-900 font-bold'
    : 'text-cream-50 font-bold';
  const inactiveLinkClass = isLightBackground
    ? 'text-terracotta-700 hover:text-wood-900'
    : 'text-cream-100 hover:text-terracotta-300';

  return (
    <motion.nav
      data-navbar="true"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="site-navbar fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center px-1 py-1">
          <img
            src={logo}
            alt="Trattoria La Gatta"
            className="h-8 md:h-9 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `transition-colors text-sm uppercase tracking-widest ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contatti"
            className="ml-2 bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-600/30"
          >
            Prenota
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden focus:outline-none ${isLightBackground ? 'text-wood-900' : 'text-cream-50'}`}
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
            className="md:hidden bg-wood-900/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors text-lg font-sans ${isActive ? 'text-terracotta-400 font-bold' : 'text-cream-100 hover:text-terracotta-300'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contatti"
                onClick={() => setOpen(false)}
                className="mt-2 bg-terracotta-600 text-cream-50 px-6 py-3 rounded-full text-center text-sm uppercase tracking-widest"
              >
                Prenota Ora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
