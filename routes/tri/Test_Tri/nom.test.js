const axios = require('axios');

describe('Tri Nom ', () => {
    test('Test de route de Tri de Nom', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/tri/nom/test');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });