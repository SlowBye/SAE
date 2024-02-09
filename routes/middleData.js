import fetch from 'node-fetch';

/**
 * Middleware pour récupérer les données.
 * @module Middle
 */

/**
 * Fonction asynchrone pour récupérer les données en fonction de l'environnement.
 * @async
 * @returns {Promise<Object>} Les données récupérées.
 */
const fetchData = async () => {
    let data;
  
    if (process.env.NODE_ENV === 'test') {
      data = require('../jeu_de_test/test.json');
    } else {
      const response = await fetch('https://mada.formation4f.com/php/Accueil.php');
      data = await response.json();
    }
    return data;
};

/**
 * Middleware pour récupérer les données et les attacher à la requête.
 * @async
 * @param {string} req - L'objet de requête Express.
 * @param {string} res - L'objet de réponse Express.
 * @param {string} next - La fonction pour passer au middleware suivant.
 * @returns {void}
 */
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