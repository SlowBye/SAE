import express from 'express';

const router = express.Router();

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
