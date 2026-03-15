import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const { contact, social, brand } = siteData;

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-cream-100/85">
      <div className="mx-auto grid w-[min(1200px,95%)] gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <p className="mb-4 font-serif text-3xl text-cream-50">{brand.name}</p>
          <p className="text-sm leading-relaxed text-cream-100/70">
            Trattoria contemporanea con anima artigianale nel cuore di {brand.city}.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-terracotta-300">Indirizzo</p>
          <p className="text-sm">{contact.address}</p>
          <p className="text-sm">{contact.cap} {contact.city}</p>
          <p className="mt-3 text-xs text-cream-100/60">{brand.vat}</p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-terracotta-300">Orari</p>
          <p className="text-sm">{contact.hours.days}</p>
          <p className="text-sm">Pranzo: {contact.hours.lunch}</p>
          <p className="text-sm">Cena: {contact.hours.dinner}</p>
          <p className="text-sm text-cream-100/60">Chiuso: {contact.hours.closed}</p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-terracotta-300">Navigazione</p>
          <div className="flex flex-col gap-1 text-sm">
            <Link to="/" className="hover:text-terracotta-200">Home</Link>
            <Link to="/chi-siamo" className="hover:text-terracotta-200">Chi Siamo</Link>
            <Link to="/menu" className="hover:text-terracotta-200">Menu</Link>
            <Link to="/contatti" className="hover:text-terracotta-200">Contatti</Link>
          </div>
          <div className="mt-4 flex gap-3 text-xs uppercase tracking-[0.2em] text-cream-100/70">
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-200">
              Facebook
            </a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-200">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-100/10 py-5 text-center text-xs text-cream-100/50">
        Copyright {new Date().getFullYear()} {brand.name}. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
