/*
 * Tutti i dati testuali sono estratti dal sito ufficiale https://trattorialagatta.it/
 * Nessun contenuto è inventato.
 */

export const siteData = {
  name: 'Trattoria La Gatta',

  images: {
    hero: 'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.04.05.jpeg',
    logo: {
      primary: 'https://trattorialagatta.it/wp-content/uploads/2025/07/cropped-Progetto-senza-titolo-2.png',
      navbar: 'https://trattorialagatta.it/wp-content/uploads/2025/07/cropped-Progetto-senza-titolo-2-300x135.png',
    },
    food: [
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.15.42-1024x768.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.10.03-1024x682.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.10.02-1-1024x682.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.15.38-1024x682.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.09.59-1-1024x768.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-11.42.06-1024x768.jpeg',
    ],
    foodPortrait: [
      'https://trattorialagatta.it/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-06-at-16.32.28-768x1024.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.15.35-682x1024.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.15.27-682x1024.jpeg',
      'https://trattorialagatta.it/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-27-at-17.04.05-768x1024.jpeg',
    ],
    menuFront: 'https://trattorialagatta.it/wp-content/uploads/2026/03/03-Marzo-26-front_page-0001-724x1024.jpg',
    menuRear: 'https://trattorialagatta.it/wp-content/uploads/2026/03/03-Marzo-26-rear_page-0001-724x1024.jpg',
  },

  hero: {
    welcome: 'Benvenuti da Trattoria La Gatta',
    subtitle: 'Una storia lunga 30 anni',
    description:
      'La nostra è una cucina mediterranea-creativa che si ispira alla regola del "3", dove ogni piatto è costruito con non più di tre ingredienti per esaltarne al meglio gusto ed essenza.',
    cta: 'Contattaci telefonicamente per prenotare il tuo tavolo per stasera!',
  },

  about: {
    philosophy:
      'L\'esperienza, la passione e la ricerca ha portato a definire un\'idea di cucina che Gerardina e Gerardo amano chiamare di "sottrazione", ovvero che cerca di seguire la regola del "3", caratterizzando i nostri piatti con non più di "3" ingredienti. La nostra è una cucina mediterranea-creativa con proposte regionali.',
    intro:
      'La nostra è una cucina mediterranea-creativa che si ispira alla regola del "3", dove ogni piatto è costruito con non più di tre ingredienti per esaltarne al meglio gusto ed essenza. Proponiamo due menu degustazione, di mare e di terra, rinnovati mensilmente, e un menù alla carta che seguiamo con variazioni stagionali, sempre nel segno della qualità e della semplicità.',
    anniversary:
      'I 29 anni della Trattoria La Gatta sono stati molto più di un semplice anniversario: sono stati una festa sentita e autentica, che ci ha profondamente emozionati e resi orgogliosi del percorso compiuto. In quasi tre decenni di lavoro, abbiamo avuto il privilegio di accogliere generazioni di clienti, molti dei quali sono diventati amici, e sapere di aver lasciato qualcosa di buono nella memoria e nel cuore di chi si è seduto alla nostra tavola è per noi la gratificazione più grande. Il calore, l\'affetto e la fiducia che ci avete dimostrato in tutto questo tempo non sono mai venuti meno, e proprio questo legame speciale ci motiva ogni giorno a migliorarci, a custodire la tradizione con cura e a continuare a fare del nostro meglio, con passione e dedizione, per offrirvi esperienze sincere e piatti che parlano di casa, territorio e autenticità.',
    thirtyYears:
      "E' stato un onore festeggiare con voi questo traguardo così importante. Sono stati 30 anni di sapori, storia e sorrisi. Grazie per essere parte del nostro viaggio e, come si dice in queste occasioni, il meglio deve ancora venire!",
    reviews:
      'In 29 anni, abbiamo ricevuto tantissime recensioni e commenti. Potete trovarne a bizzeffe su google maps, trip advisor e tutti gli altri principali portali.',
  },

  menu: {
    intro:
      'Proponiamo 2 menu degustazione, uno di mare ed uno di terra, che cambiamo mensilmente, e un menù alla carta che variamo stagionalmente.',
    philosophy:
      'La nostra è una cucina mediterranea-creativa che si ispira alla regola del "3", dove ogni piatto è costruito con non più di tre ingredienti per esaltarne al meglio gusto ed essenza.',
    categories: [
      { id: 1, name: 'Menu Degustazione di Mare', shortDesc: 'Rinnovato mensilmente', icon: 'mare' },
      { id: 2, name: 'Menu Degustazione di Terra', shortDesc: 'Rinnovato mensilmente', icon: 'terra' },
      { id: 3, name: 'Menù alla Carta', shortDesc: 'Con variazioni stagionali', icon: 'carta' },
    ],
  },

  contact: {
    intro:
      "Siamo felici di accogliervi alla Trattoria La Gatta, dove tradizione e gusto si incontrano in un'atmosfera calda e familiare.",
    address: 'Via Bellaria, 18/e',
    cap: '40139',
    city: 'Bologna',
    fullAddress: 'Via Bellaria, 18/e 40139 Bologna',
    location:
      'nel cuore di una zona tranquilla e facilmente raggiungibile, con possibilità di parcheggio nei dintorni.',
    phone: '051 54 51 51',
    phoneRaw: '051545151',
    mobile: '333 419 80 55',
    mobileRaw: '3334198055',
    email: 'info@trattorialagatta.it',
    hours: {
      days: 'Martedì – Sabato',
      closed: 'Domenica e Lunedì',
      lunch: '12:00 – 14:30',
      dinner: '19:30 – 22:00',
    },
    bookingNote:
      'Vi consigliamo di prenotare il vostro tavolo, soprattutto nel fine settimana, per assicurarvi un posto e vivere al meglio la nostra esperienza gastronomica.',
    emailNote:
      'Per qualsiasi informazione, richiesta particolare, eventi o comunicazioni, non esitate a scriverci.',
  },

  social: {
    facebook: 'https://www.facebook.com/people/Trattoria-La-Gatta/61560033445344/',
    instagram: 'https://www.instagram.com/trattorialagatta/',
  },
};
