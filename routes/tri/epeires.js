import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les éléments triés d'epeires.
 * @module triEpeires
 * @name GET /tri/epeires/:epeires
 * @function
 * @memberof module:triEpeires
 * @param {Object} req - L'objet de requête Express.
 * @param {string} req.params.epeires - Le paramètre de l'URL contenant le type d'envoie à filtrer.
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les éléments triés d'epeires et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */
router.get('/:epeires', async (req, res) => {
    try {
        let regex = new RegExp(req.params.epeires, 'i');
        let data = req.data.filter(item => regex.test(item.spider));

        if (data.length > 0) {
            res.setHeader('X-reponse', 'Reussi');
            res.status(201).json(data);
        }
        else {
            res.setHeader('X-reponse', 'Echec');
            res.status(404).send('Le type d\'envoie n\'existe pas');
        }
    } catch (err) {
        console.log(err);
        res.setHeader('X-reponse', 'Echec');
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
