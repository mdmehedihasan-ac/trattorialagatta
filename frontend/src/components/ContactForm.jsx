import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Errore nell'invio.");
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const inputCls =
    'w-full px-4 py-3.5 bg-cream-50 border border-wood-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400/60 focus:border-transparent transition-all text-wood-800 placeholder:text-wood-300';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="cf-name" className="block text-xs font-sans uppercase tracking-widest text-wood-500 mb-2 font-bold">
          Nome
        </label>
        <input
          type="text"
          id="cf-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={100}
          className={inputCls}
          placeholder="Il tuo nome"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-xs font-sans uppercase tracking-widest text-wood-500 mb-2 font-bold">
          Email
        </label>
        <input
          type="email"
          id="cf-email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          maxLength={254}
          className={inputCls}
          placeholder="La tua email"
        />
      </div>

      <div>
        <label htmlFor="cf-msg" className="block text-xs font-sans uppercase tracking-widest text-wood-500 mb-2 font-bold">
          Messaggio
        </label>
        <textarea
          id="cf-msg"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Scrivi il tuo messaggio..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-terracotta-600 hover:bg-terracotta-500 disabled:bg-wood-300 text-cream-50 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-600/20 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Invio in corso…' : 'Invia Messaggio'}
      </button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sage-600 text-center text-sm"
        >
          Messaggio inviato con successo! Vi risponderemo al più presto.
        </motion.p>
      )}

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-600 text-center text-sm"
        >
          {errorMsg}
        </motion.p>
      )}
    </form>
  );
}
