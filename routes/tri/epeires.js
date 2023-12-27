import express from 'express';

const router = express.Router();

router.get('/:epeires', async (req, res) => {
    try {
        let liste = ["green", "yellow", "white"];

        if (liste.includes(req.params.epeires)){
            let epeires
            for (let i = 0; i < liste.length; i++) {
                if (req.params.epeires === liste[i]) {
                    epeires = liste[i]
                }
            }

            const data = req.data.filter(item => item.spider === epeires);

            res.status(201).json(data);
        }
        else {
            res.status(404).send('Le type d\'envoie n\'existe pas');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
