import fetch from 'node-fetch';


const fetchData = async () => {
    let data;
  
    if (process.env.NODE_ENV === 'test') {
      data = require('../jeu_de_test/test.json');
    } else {
      const response = await fetch('https://mada.formation4f.com/php/index.php/Accueil');
      data = await response.json();
    }
  
    return data;
};

  
const middleData = async (req, res, next) => {
    try {
      const data = await fetchData();
      req.data = data;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).send('Erreur lors de la récupération des données');
    }
  };

export default middleData;