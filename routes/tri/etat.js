import express from 'express';

const router = express.Router();

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
