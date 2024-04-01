import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les éléments triés par catégorie.
 * @module triCategorie
 * @name GET /tri/categorie/:categorie/:year?
 * @function
 * @memberof module:triCategorie
 * @param {Object} req - L'objet de requête Express.
 * @param {string} req.params.categorie - Le paramètre de l'URL contenant la catégorie à filtrer.
 * @param {Object} req.params.year - Le paramètre de l'URL contenant l'année à filtrer (optionnel).
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les éléments triés par catégorie et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */

router.get('/:categorie/:year?', async (req, res) => {
    try {
        const categorieRegex = new RegExp(req.params.categorie, 'i');

        let filteredData = req.data.filter(item => categorieRegex.test(item.category));

        const { year } = req.params;

        if (year) {
            filteredData = filteredData.filter(item => {
                const itemYear = new Date(item.date).getFullYear();
                return itemYear.toString() === year.toString();
            });
        }

        if (filteredData.length > 0) {
            res.setHeader('X-reponse', 'Reussi');
            res.status(201).json(filteredData);
        } else {
            res.setHeader('X-reponse', 'Echec');
            res.status(404).send('Aucune catégorie correspondante trouvée');
        }
    } catch (err) {
        console.log(err);
        res.setHeader('X-reponse', 'Echec');
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
