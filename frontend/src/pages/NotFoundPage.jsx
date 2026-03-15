import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Pagina non trovata | Trattoria La Gatta" description="La pagina richiesta non esiste." path="/404" />
      <section className="section-padding pt-40">
        <div className="mx-auto w-[min(760px,95%)] text-center">
          <p className="section-subtitle">Errore 404</p>
          <h1 className="section-title">Pagina non trovata</h1>
          <p className="mx-auto mt-4 max-w-xl text-espresso-700">
            Il contenuto richiesto non e disponibile. Torna alla home per continuare la navigazione.
          </p>
          <Link to="/" className="cta-primary mt-8">
            Torna alla Home
          </Link>
        </div>
      </section>
    </>
  );
}
