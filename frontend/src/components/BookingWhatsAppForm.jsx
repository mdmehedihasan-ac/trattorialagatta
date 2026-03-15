import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

const peopleOptions = ['1', '2', '3', '4', '5', '6', '7+'];
const shiftOptions = ['Pranzo', 'Cena'];

export default function BookingWhatsAppForm() {
  const [form, setForm] = useState({
    fullName: '',
    people: '2',
    date: '',
    shift: 'Cena',
    notes: '',
  });

  const [error, setError] = useState('');

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const inputClass =
    'w-full rounded-xl border border-espresso-200 bg-cream-50 px-4 py-3 text-sm text-espresso-900 placeholder:text-espresso-400 transition-colors focus:border-terracotta-300';

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    setError('');

    if (!form.fullName || !form.date || !form.shift || !form.people) {
      setError('Compila tutti i campi obbligatori prima di continuare.');
      return;
    }

    const text = [
      siteData.contact.whatsappPrefill,
      '',
      `Nome e cognome: ${form.fullName}`,
      `Numero persone: ${form.people}`,
      `Data richiesta: ${form.date}`,
      `Turno: ${form.shift}`,
      `Note: ${form.notes || 'Nessuna nota aggiuntiva'}`,
    ].join('\n');

    const url = `https://wa.me/39${siteData.contact.mobileRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="mb-1 block text-xs uppercase tracking-[0.2em] text-espresso-600">
          Nome e Cognome
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={form.fullName}
          onChange={onChange}
          className={inputClass}
          placeholder="Es. Mario Rossi"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="people" className="mb-1 block text-xs uppercase tracking-[0.2em] text-espresso-600">
            Persone
          </label>
          <select id="people" name="people" value={form.people} onChange={onChange} className={inputClass}>
            {peopleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="shift" className="mb-1 block text-xs uppercase tracking-[0.2em] text-espresso-600">
            Orario
          </label>
          <select id="shift" name="shift" value={form.shift} onChange={onChange} className={inputClass}>
            {shiftOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="date" className="mb-1 block text-xs uppercase tracking-[0.2em] text-espresso-600">
          Data Richiesta
        </label>
        <input
          id="date"
          name="date"
          type="date"
          min={today}
          required
          value={form.date}
          onChange={onChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="notes" className="mb-1 block text-xs uppercase tracking-[0.2em] text-espresso-600">
          Note (opzionale)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={form.notes}
          onChange={onChange}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Allergie, seggiolone, richieste particolari..."
        />
      </div>

      <button type="submit" className="w-full rounded-full bg-[#25D366] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#073b1f] transition-all hover:-translate-y-0.5 hover:bg-[#35e276] hover:shadow-[0_10px_24px_rgba(37,211,102,0.45)]">
        Richiedi Prenotazione via WhatsApp
      </button>

      {error && (
        <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-terracotta-600">
          {error}
        </motion.p>
      )}
    </form>
  );
}
