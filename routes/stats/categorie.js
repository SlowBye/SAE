import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les statistiques par catégorie.
 * @module statCategorie
 * @name GET /stat/categorie
 * @function
 * @memberof module:statCategorie
 * @param {Object} req - L'objet de requête Express.
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les statistiques par catégorie et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */
router.get('/', async (req, res) => {
    try {
        const categories = {};
        let totalCount = 0;

        req.data.forEach(item => {
            const category = item.category;
            if (!categories[category]) {
                categories[category] = 1;
            } else {
                categories[category]++;
            }
            totalCount++;
        });

        const pourcentage = {};
        Object.keys(categories).forEach(category => {
            const count = categories[category];
            const percentage = ((count / totalCount) * 100).toFixed(2);
            pourcentage[category] = { count, percentage };
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
