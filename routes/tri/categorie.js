import express from 'express';

const router = express.Router();

router.get('/:categorie', async (req, res) => {
    try {
        let liste = ["TR - Militaires - Patrouilles", "TR - Mission Photo - courses", "TR - ESSAI", "TR - Divers", "TR - Laser",
            "TR - Non CDS", "TR - EPT", "TR - Vols Spéciaux", "TR - Parachutisme", "TR - Evenementiel"];

        let tableCorespondance = ["Militaires", "Courses", "Essai", "Divers", "Laser", "NonCDS", "EPT", "Spéciaux",
                                 "Parachutisme", "Evenementiel", "Photo", "Patrouilles"]

        if (tableCorespondance.includes(req.params.categorie)){
            let categorie
            for (let i = 0; i < tableCorespondance.length; i++) {
                if(req.params.categorie === tableCorespondance[10]) categorie = liste[1]
                else if(req.params.categorie === tableCorespondance[11]) categorie = liste[0]
                if (req.params.categorie === tableCorespondance[i]) {
                    if (i < 10) categorie = liste[i]
                    else continue
                }
            }

            const data = req.data.filter(item => item.category === categorie);

            res.status(201).json(data);
        }
        else {
            res.status(404).send('La catégorie n\'existe pas');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
