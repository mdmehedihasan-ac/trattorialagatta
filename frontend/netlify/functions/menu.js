exports.handler = async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Metodo non consentito.' }),
    };
  }

  const menuData = {
    intro:
      'Proponiamo 2 menu degustazione, uno di mare ed uno di terra, che cambiamo mensilmente, e un menu alla carta che variamo stagionalmente.',
    philosophy:
      'La nostra e una cucina mediterranea-creativa che si ispira alla regola del "3", dove ogni piatto e costruito con non piu di tre ingredienti per esaltarne al meglio gusto ed essenza.',
    categories: [
      { id: 1, name: 'Menu Degustazione di Mare', description: 'Rinnovato mensilmente' },
      { id: 2, name: 'Menu Degustazione di Terra', description: 'Rinnovato mensilmente' },
      { id: 3, name: 'Menu alla Carta', description: 'Con variazioni stagionali' },
    ],
  };

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(menuData),
  };
};
