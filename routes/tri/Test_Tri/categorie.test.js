const axios = require('axios');

describe('Tri Caté ', () => {
    test('Test de route de Tri de Categorie', async () => {
        process.env.NODE_ENV = 'test';
        const response = await axios.get('http://localhost:3000/Tri/categorie/Photo');
        const customInfo = response.headers['x-reponse'];

        expect(response.status).toBe(201);
        expect(customInfo).toBe('Reussi');
    
    });
  });