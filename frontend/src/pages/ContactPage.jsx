import Seo from '../components/Seo';
import BookingWhatsAppForm from '../components/BookingWhatsAppForm';
import { siteData } from '../data/siteData';

export default function ContactPage() {
  const { seo, contact, images } = siteData;

  return (
    <>
      <Seo title={seo.contact.title} description={seo.contact.description} path={seo.contact.path} />

      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section className="relative bg-espresso-900 text-cream-100 overflow-hidden" style={{ minHeight: '44vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${images.food[5]}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/30 to-espresso-900" />
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-20 pt-36 md:pt-44 max-w-screen-xl mx-auto">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-200 mb-4">Contatti e prenotazioni</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-cream-50">
            Prenota il tuo tavolo<br />
            <em className="text-terracotta-200">in pochi secondi</em>
          </h1>
          <div className="h-px w-12 bg-terracotta-400 mt-7" />
          <p className="mt-5 max-w-xl text-base text-cream-100/65 leading-relaxed">{contact.intro}</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <section className="section-padding bg-cream-200">
        <div className="inner-max grid gap-8 lg:grid-cols-[1fr_1.2fr]">

          {/* info card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-espresso-100 bg-white overflow-hidden shadow-[0_8px_32px_rgba(4,9,12,0.14)] hover:shadow-[0_16px_48px_rgba(4,9,12,0.20)] transition-shadow duration-300">
              <div className="bg-espresso-900 px-7 py-6">
                <h2 className="font-serif text-2xl text-cream-50">Dove siamo</h2>
              </div>
              <div className="px-7 py-6 space-y-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-espresso-600 mb-1">Indirizzo</p>
                  <p className="text-sm text-espresso-800 font-medium">{contact.address}</p>
                  <p className="text-sm text-espresso-600">{contact.cap} {contact.city}</p>
                  <p className="text-sm text-espresso-500 mt-1">{contact.location}</p>
                </div>

                <div className="h-px bg-espresso-100" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-espresso-600 mb-2">Orari di apertura</p>
                  <div className="text-sm text-espresso-700 space-y-1">
                    <p>{contact.hours.days}</p>
                    <p>Pranzo: <span className="font-medium">{contact.hours.lunch}</span></p>
                    <p>Cena: <span className="font-medium">{contact.hours.dinner}</span></p>
                    <p className="text-espresso-500">Chiuso: {contact.hours.closed}</p>
                  </div>
                </div>

                <div className="h-px bg-espresso-100" />

                <div className="space-y-2 text-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-espresso-600 mb-2">Contatti</p>
                  <p>
                    <span className="text-espresso-500">Telefono: </span>
                    <a href={`tel:${contact.phoneRaw}`} className="text-terracotta-600 font-medium hover:text-terracotta-500 transition-colors">
                      {contact.phone}
                    </a>
                  </p>
                  <p>
                    <span className="text-espresso-500">WhatsApp: </span>
                    <a href={`https://wa.me/39${contact.mobileRaw}`} className="text-terracotta-600 font-medium hover:text-terracotta-500 transition-colors">
                      {contact.mobile}
                    </a>
                  </p>
                  <p>
                    <span className="text-espresso-500">Email: </span>
                    <a href={`mailto:${contact.email}`} className="text-terracotta-600 font-medium hover:text-terracotta-500 transition-colors">
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* booking form card */}
          <div className="rounded-2xl border border-espresso-100 bg-white overflow-hidden shadow-[0_8px_32px_rgba(4,9,12,0.14)] hover:shadow-[0_16px_48px_rgba(4,9,12,0.20)] transition-shadow duration-300">
            <div className="bg-terracotta-600 px-7 py-6">
              <h2 className="font-serif text-2xl text-cream-50">Richiesta di prenotazione</h2>
              <p className="mt-1 text-xs text-terracotta-100/80">Compila i campi e apri subito la chat con messaggio precompilato.</p>
            </div>
            <div className="px-7 py-7">
              <BookingWhatsAppForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── DOVE CI TROVI ───────────────────────────────────── */}
      <section className="bg-espresso-900 section-padding">
        <div className="inner-max">

          <div className="mb-10 md:mb-14">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-300 mb-3">Come raggiungerci</span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-50">Siamo nel cuore di Bologna</h2>
            <div className="h-px w-12 bg-terracotta-500 mt-5" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] items-start">

            {/* left: address + orari + CTA */}
            <div className="space-y-7 text-cream-100">

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta-300 mb-2">Indirizzo</p>
                <p className="text-lg font-medium text-cream-50">{contact.address}</p>
                <p className="text-sm text-cream-100/55">{contact.cap} {contact.city}</p>
              </div>

              <div className="h-px bg-espresso-700" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta-300 mb-2">Orari</p>
                <p className="text-sm text-cream-100/80">{contact.hours.days}</p>
                <p className="text-sm text-cream-100/55 mt-1">
                  Pranzo {contact.hours.lunch} · Cena {contact.hours.dinner}
                </p>
                <p className="text-xs text-cream-100/35 mt-1">Chiuso {contact.hours.closed}</p>
              </div>

              <div className="h-px bg-espresso-700" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta-300 mb-2">Parcheggio</p>
                <p className="text-sm text-cream-100/55 leading-relaxed">{contact.location}</p>
              </div>

              <a
                href="https://www.google.com/maps/search/Via+Bellaria+18%2Fe+40139+Bologna"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2.5 rounded-full border border-cream-100/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-100 hover:border-cream-100/60 hover:text-cream-50 transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Apri in Google Maps
              </a>
            </div>

            {/* right: map iframe in styled card */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-cream-50/10 shadow-2xl">
              <iframe
                title="Mappa Trattoria La Gatta"
                src="https://maps.google.com/maps?q=Via+Bellaria+18%2Fe+40139+Bologna+Italia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
