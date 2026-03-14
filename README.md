# Trattoria La Gatta — Sito Web

Rebuild completo del sito web della Trattoria La Gatta, Bologna.

## Stack Tecnologico

- **Backend**: Node.js + Express
- **Frontend**: React 18 + Vite + Tailwind CSS + Framer Motion

## Requisiti

- Node.js >= 18
- npm >= 9

## Avvio in Locale

### 1. Avvia il Backend

```bash
cd backend
npm install
npm run dev
```

Il server API si avvia su **http://localhost:3001**

### 2. Avvia il Frontend

```bash
cd frontend
npm install
npm run dev
```

L'applicazione si avvia su **http://localhost:5173**

> **Nota**: Avvia prima il backend, poi il frontend. Il frontend è già configurato per inoltrare le richieste API al backend tramite il proxy di Vite.

## Build per Produzione

```bash
cd frontend
npm run build
```

I file statici verranno generati nella cartella `frontend/dist/`.

## Struttura Progetto

```
trattorialagatta/
├── backend/
│   ├── server.js            # Server Express (API contatto + menu)
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Layout principale
│   │   ├── main.jsx          # Entry point React
│   │   ├── index.css          # Stili globali + Tailwind
│   │   ├── data/
│   │   │   └── siteData.js   # Dati reali del ristorante
│   │   └── components/
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Menu.jsx
│   │       ├── Contact.jsx
│   │       ├── ContactForm.jsx
│   │       └── Footer.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── README.md
└── .gitignore
```
