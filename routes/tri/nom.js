import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les éléments triés par nom.
 * @module triNom
 * @name GET /tri/nom/:nom
 * @function
 * @memberof module:triNom
 * @param {Object} req - L'objet de requête Express.
 * @param {string} req.params.nom - Le paramètre de l'URL contenant le nom à filtrer.
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les éléments triés par nom et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */
router.get('/:nom', async (req, res) => {
    try {
        const nom = req.params.nom.toLowerCase();
        const data = req.data.filter(item => item.name.toLowerCase().includes(nom));
        
        if (data.length === 0) {
            res.setHeader('X-reponse', 'Echec');
            res.status(404).send('Le nom n\'existe pas');
        } else {
            res.setHeader('X-reponse', 'Reussi');
            res.status(201).json(data);
        }
    } catch (err) {
        console.log(err);
        res.setHeader('X-reponse', 'Echec');
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
