import fetch from 'node-fetch';

let cachedData = null; // Variable globale pour stocker les données mises de côté.

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
        try {
            const response = await fetch('https://mada.formation4f.com/php/Accueil.php');
            data = await response.json();
            cachedData = data; // Mettre en cache les données récupérées.
        } catch (error) {
            console.error("Erreur lors de la récupération des données à partir de l'API:", error);
            if (cachedData) {
                console.log("Récupération des données depuis le cache.");
                data = cachedData; // Si une sauvegarde existe, récupérer les données à partir du cache.
            } else {
                throw new Error("Impossible de récupérer les données depuis l'API ni depuis le cache.");
            }
        }
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
        console.error(error);
        if (cachedData) {
            console.log("Récupération des données depuis le cache.");
            req.data = cachedData; // Si une sauvegarde existe, attacher les données en cache à la requête.
            next();
        } else {
            res.status(500).send("Erreur lors de la récupération des données");
        }
    }
};

export default middleData;
