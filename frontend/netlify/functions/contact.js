function validateContact(payload) {
  const name = String(payload?.name || '').trim();
  const email = String(payload?.email || '').trim();
  const message = String(payload?.message || '').trim();

  if (!name || !email || !message) {
    return { error: 'Tutti i campi sono obbligatori.' };
  }
  if (name.length < 2 || name.length > 100) {
    return { error: 'Il nome deve avere tra 2 e 100 caratteri.' };
  }
  if (message.length < 10 || message.length > 2000) {
    return { error: 'Il messaggio deve avere tra 10 e 2000 caratteri.' };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email) || email.length > 254) {
    return { error: 'Indirizzo email non valido.' };
  }

  return { name, email, message };
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Metodo non consentito.' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (_err) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Body JSON non valido.' }),
    };
  }

  const validated = validateContact(payload);
  if (validated.error) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: validated.error }),
    };
  }

  console.log('Nuovo messaggio di contatto:', {
    ...validated,
    timestamp: new Date().toISOString(),
  });

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      success: true,
      message: 'Messaggio inviato con successo! Vi risponderemo al piu presto.',
    }),
  };
};
