const axios = require('axios');

describe('Test du menu de l\'API', () => {
  test('Test d\'affichage correct du menu', async () => {
    const response = await axios.get('http://localhost:3000');
    const menuContent = response.data;

    expect(response.status).toBe(201);
    expect(menuContent).toContain('Menu');
  });
});
