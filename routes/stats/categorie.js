import express from 'express';

const router = express.Router();

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
            }, {});

        res.status(201).json(sortedPourcentage);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
