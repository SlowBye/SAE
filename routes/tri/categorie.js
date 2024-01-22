import express from 'express';

const router = express.Router();

router.get('/:categorie', async (req, res) => {
    try {
        const categorieRegex = new RegExp(req.params.categorie, 'i');

        const filteredData = req.data.filter(item => categorieRegex.test(item.category));

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
