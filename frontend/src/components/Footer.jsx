import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

const { contact, social } = siteData;

export default function Footer() {
  return (
    <footer className="bg-wood-950 text-cream-200/70 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-xl bg-cream-50 px-3 py-2">
              <img
                src={siteData.images.logo?.navbar || siteData.images.logo?.primary}
                alt="Trattoria La Gatta"
                className="h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Cucina mediterranea-creativa a Bologna, dal cuore di Gerardina e Gerardo.
            </p>
          </div>

          {/* Link rapidi */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-terracotta-400 font-bold mb-4">Link rapidi</h5>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-terracotta-300 transition-colors">Home</Link>
              <Link to="/chi-siamo" className="text-sm hover:text-terracotta-300 transition-colors">Chi Siamo</Link>
              <Link to="/menu" className="text-sm hover:text-terracotta-300 transition-colors">Menu</Link>
              <Link to="/contatti" className="text-sm hover:text-terracotta-300 transition-colors">Contatti</Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-terracotta-400 font-bold mb-4">Dove siamo</h5>
            <p className="text-sm leading-relaxed">{contact.address}</p>
            <p className="text-sm">{contact.cap} {contact.city}</p>
          </div>

          {/* Hours */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-terracotta-400 font-bold mb-4">Orari</h5>
            <p className="text-sm">{contact.hours.days}</p>
            <p className="text-sm">Pranzo: {contact.hours.lunch}</p>
            <p className="text-sm">Cena: {contact.hours.dinner}</p>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-terracotta-400 font-bold mb-4">Contatti</h5>
            <p className="text-sm"><a href={`tel:${contact.phoneRaw}`} className="hover:text-terracotta-300 transition-colors">{contact.phone}</a></p>
            <p className="text-sm"><a href={`tel:${contact.mobileRaw}`} className="hover:text-terracotta-300 transition-colors">{contact.mobile}</a></p>
            <p className="text-sm mt-1"><a href={`mailto:${contact.email}`} className="hover:text-terracotta-300 transition-colors">{contact.email}</a></p>
            <div className="flex gap-4 mt-4">
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-300 transition-colors text-xs uppercase tracking-widest">Facebook</a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-300 transition-colors text-xs uppercase tracking-widest">Instagram</a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-cream-50/10 pt-6 text-center">
          <p className="text-xs text-cream-200/40">
            &copy; {new Date().getFullYear()} Trattoria La Gatta — Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
}
