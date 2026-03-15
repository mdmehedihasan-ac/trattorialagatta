import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../../data/siteData';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Chi Siamo', to: '/chi-siamo' },
  { label: 'Menu', to: '/menu' },
  { label: 'Contatti', to: '/contatti' },
];

function linkClass(isActive) {
  return `text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
    isActive ? 'text-terracotta-300' : 'text-cream-100/85 hover:text-terracotta-200'
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const logo = siteData.images.logo.navbar || siteData.images.logo.primary;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 w-[min(1200px,95%)] rounded-2xl border border-cream-100/20 bg-espresso-900/85 px-4 py-3 shadow-[0_14px_34px_rgba(29,23,19,0.45)] backdrop-blur-md md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center rounded-lg bg-cream-50 px-3 py-2">
            <img src={logo} alt={siteData.brand.name} className="h-7 w-auto md:h-8" loading="eager" decoding="async" />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => linkClass(isActive)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contatti" className="cta-primary">
              Prenota Ora
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/30 text-cream-50 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Apri menu mobile"
            aria-expanded={open}
          >
            <span className="text-lg leading-none">{open ? 'x' : '='}</span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden rounded-xl border border-cream-100/15 bg-espresso-800/95 p-4 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {links.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm uppercase tracking-[0.22em] ${
                        isActive ? 'text-terracotta-300' : 'text-cream-100/85'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link to="/contatti" onClick={() => setOpen(false)} className="cta-primary text-center">
                  Prenota Ora
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
