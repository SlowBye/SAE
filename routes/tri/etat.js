import express from 'express';

const router = express.Router();

router.get('/:etat', async (req, res) => {
    try {
        let liste = ["1", "2", "3", "4", "Cours","Attente", "Terminee", "Archivee"];

        if (liste.includes(req.params.etat)){
            let etat
            for (let i = 0; i < liste.length; i++) {
                if (req.params.etat === liste[i]) {
                    if(i < 4) etat = liste[i]
                    else if(i === 4) etat = liste[0]
                    else if(i === 5) etat = liste[1]
                    else if(i === 6) etat = liste[2]
                    else if(i === 7) etat = liste[3]
                    break
                }
            }

            const data = req.data.filter(item => item.niveau === etat);
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
