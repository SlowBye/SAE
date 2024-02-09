import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les statistiques d'état.
 * @module statEtat
 * @name GET /stat/etat
 * @function
 * @memberof module:statEtat
 * @param {Object} req - L'objet de requête Express.
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les statistiques d'état et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */

router.get('/', async (req, res) => {
    try {
        const labels = {
            '1': 'En attente',
            '2': 'En cours',
            '3': 'Terminée',
            '4': 'Archivée'
        };

        const level = {};
        let totalCount = 0;

        req.data.forEach(item => {
            const niveau = item.niveau;
            if (!level[niveau]) {
                level[niveau] = 1;
            } else {
                level[niveau]++;
            }
            totalCount++;
        });

        const pourcentage = {};
        Object.keys(level).forEach(niveau => {
            const count = level[niveau];
            const percent = ((count / totalCount) * 100).toFixed(2);
            pourcentage[labels[niveau]] = { count, percent };
        });

        const sortedPourcentage = Object.entries(pourcentage)
            .sort(([, a], [, b]) => b.count - a.count)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            },
        {});
        res.setHeader('X-reponse', 'Reussi');
        res.status(201).json(sortedPourcentage);
    } catch (err) {
        console.log(err);
        res.setHeader('X-reponse', 'Echec');
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
