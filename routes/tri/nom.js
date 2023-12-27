import express from 'express';

const router = express.Router();

router.get('/:nom', async (req, res) => {
    try {
        const nom = req.params.nom.toLowerCase();
        const data = req.data.filter(item => item.name.toLowerCase().includes(nom));
        
        if (data.length === 0) {
            res.status(404).send('Le nom n\'existe pas');
        } else {
            res.status(200).json(data);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
