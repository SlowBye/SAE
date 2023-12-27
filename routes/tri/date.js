import express from 'express';

const router = express.Router();

router.get('/:date', async (req, res) => {
    try {
        const requestedDate = new Date(req.params.date);
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Expression régulière pour yyyy-mm-dd

        if (!dateRegex.test(req.params.date) || isNaN(requestedDate.getTime())) {
            res.status(400).send('Le format de la date est incorrect. Utilisez yyyy-mm-dd');
            return;
        }

        const data = req.data.filter(event => {
            for (let i = 0; i < event.nbrPeriode; i++) {
                const eventStartDate = new Date(event.dateDebut[i]);
                const eventEndDate = new Date(event.dateFin[i]);

                if (
                    (requestedDate >= eventStartDate && requestedDate <= eventEndDate) ||
                    (requestedDate.toISOString().split('T')[0] === eventStartDate.toISOString().split('T')[0] &&
                     requestedDate.toISOString().split('T')[0] === eventEndDate.toISOString().split('T')[0])
                ) {
                    return true;
                }
            }
            return false;
        });

        if (data.length === 0) {
            res.status(404).send('Aucun événement pour cette date');
        } else {
            res.status(200).json(data);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;

