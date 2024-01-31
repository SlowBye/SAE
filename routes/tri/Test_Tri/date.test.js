const axios = require('axios');

describe('Tri Date ', () => {
    test('Test de route de Tri de Date', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/tri/date/2023-06-20');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });