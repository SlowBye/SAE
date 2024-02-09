import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les statistiques d'epeires.
 * @module statEpeires
 * @name GET /stat/epeires
 * @function
 * @memberof module:statEpeires
 * @param {Object} req - L'objet de requête Express.
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les statistiques d'epeires et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */

router.get('/', async (req, res) => {
    try {
        const spiders = {};
        let total = 0;

        req.data.forEach(item => {
            const spider = item.spider;
            if (!spiders[spider]) {
                spiders[spider] = 1;
            } else {
                spiders[spider]++;
            }
            total++;
        });

        const labels = {
            white: 'non envoyé',
            green: 'envoyé',
            yellow: 'envoyé mais modifié',
        };

        const pourcentage = {};
        Object.keys(spiders).forEach(spider => {
            const count = spiders[spider];
            const percentage = ((count / total) * 100).toFixed(2);
            if (spider === 'white') {
                pourcentage[labels[spider]] = { count, percentage };
            } else if (spider === 'green') {
                pourcentage[labels[spider]] = { count, percentage };
            } else if (spider === 'yellow') {
                pourcentage[labels[spider]] = { count, percentage };
            }
        });

        const sortedPourcentage = Object.entries(pourcentage)
            .sort(([, a], [, b]) => b - a)
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
