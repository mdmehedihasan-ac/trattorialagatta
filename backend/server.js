const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

/* ── Middleware ─────────────────────────────────────────── */

const allowedOrigins = ['http://localhost:5173', 'http://localhost:4173'];
app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error('Non permesso da CORS'));
    },
  })
);
app.use(express.json({ limit: '10kb' }));

/* ── Rate-limiter semplice (in-memory) ─────────────────── */

const hits = new Map();

function rateLimit(windowMs, max) {
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const timestamps = (hits.get(key) || []).filter((t) => t > now - windowMs);
    if (timestamps.length >= max) {
      return res.status(429).json({ error: 'Troppi tentativi. Riprova tra qualche minuto.' });
    }
    timestamps.push(now);
    hits.set(key, timestamps);
    next();
  };
}

/* ── Dati menu (contenuto reale dal sito) ──────────────── */

const menuData = {
  intro:
    'Proponiamo 2 menu degustazione, uno di mare ed uno di terra, che cambiamo mensilmente, e un menù alla carta che variamo stagionalmente.',
  philosophy:
    'La nostra è una cucina mediterranea-creativa che si ispira alla regola del "3", dove ogni piatto è costruito con non più di tre ingredienti per esaltarne al meglio gusto ed essenza.',
  categories: [
    { id: 1, name: 'Menu Degustazione di Mare', description: 'Rinnovato mensilmente' },
    { id: 2, name: 'Menu Degustazione di Terra', description: 'Rinnovato mensilmente' },
    { id: 3, name: 'Menù alla Carta', description: 'Con variazioni stagionali' },
  ],
};

/* ── Routes ────────────────────────────────────────────── */

app.get('/api/menu', (_req, res) => {
  res.json(menuData);
});

app.post('/api/contact', rateLimit(60_000, 5), (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori.' });
  }

  const trimName = String(name).trim();
  const trimEmail = String(email).trim();
  const trimMsg = String(message).trim();

  if (trimName.length < 2 || trimName.length > 100) {
    return res.status(400).json({ error: 'Il nome deve avere tra 2 e 100 caratteri.' });
  }
  if (trimMsg.length < 10 || trimMsg.length > 2000) {
    return res.status(400).json({ error: 'Il messaggio deve avere tra 10 e 2000 caratteri.' });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(trimEmail) || trimEmail.length > 254) {
    return res.status(400).json({ error: 'Indirizzo email non valido.' });
  }

  // In produzione: integrare con Nodemailer o servizio SMTP
  console.log('Nuovo messaggio di contatto:', {
    name: trimName,
    email: trimEmail,
    message: trimMsg,
    timestamp: new Date().toISOString(),
  });

  res.json({
    success: true,
    message: 'Messaggio inviato con successo! Vi risponderemo al più presto.',
  });
});

/* ── Avvio ─────────────────────────────────────────────── */

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
