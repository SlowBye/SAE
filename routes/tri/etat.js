import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les éléments triés d'état.
 * @module triEtat
 * @name GET /tri/etat/:etat
 * @function
 * @memberof module:triEtat
 * @param {Object} req - L'objet de requête Express.
 * @param {string} req.params.etat - Le paramètre de l'URL contenant l'état à filtrer.
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les éléments triés d'état et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */
router.get('/:etat', async (req, res) => {
    try {
        let liste = ["1", "2", "3", "4", "Cours","Attente", "Terminee", "Archivee"];

        let regex = new RegExp(req.params.etat, 'i');
        let data = req.data.filter(item => regex.test(item.niveau));

        if(data.length > 0){
            res.setHeader('X-reponse', 'Reussi');
            res.status(201).json(data);
        }
        else {
            res.setHeader('X-reponse', 'Echec');
            res.status(404).send('L\'Etat n\'existe pas');
        }
    } catch (err) {
        console.log(err);
        res.setHeader('X-reponse', 'Echec');
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
