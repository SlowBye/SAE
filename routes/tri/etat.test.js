const axios = require('axios');

describe('Tri Etat ', () => {
    test('Test de route de Tri d\'Etat', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/Tri/etat/1');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });