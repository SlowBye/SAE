const axios = require('axios');

describe('Stat Epeires ', () => {
    test('Test de route de statistique de epeires', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/stats/epeires');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });