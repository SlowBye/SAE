const axios = require('axios');

describe('Tri Epeires ', () => {
    test('Test de route de Tri d\'Epeires', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/tri/epeires/green');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });