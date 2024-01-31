const axios = require('axios');

describe('Stat Caté ', () => {
    test('Test de route de statistique de catégorie', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/stat/categorie');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });