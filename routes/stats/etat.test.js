const axios = require('axios');

describe('Stat Etat ', () => {
    test('Test de route de statistique d\'Etat', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/stats/etat');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });