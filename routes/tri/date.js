import express from 'express';

const router = express.Router();

/**
 * Route GET pour récupérer les éléments triés par date.
 * @module triDate
 * @name GET /tri/date/:date/:year?
 * @function
 * @memberof module:triDate
 * @param {Object} req - L'objet de requête Express.
 * @param {string} req.params.date - Le paramètre de l'URL contenant la date à filtrer.
 * @param {Object} req.params.year - Le paramètre de l'URL contenant l'année à filtrer (optionnel).
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie un objet JSON contenant les éléments triés par date et un header X-reponse personalisé.
 * @throws {Error} - Renvoie une erreur si la récupération des données échoue.
 */
router.get('/:date/:year?', async (req, res) => {
    try {
        const requestedDate = new Date(req.params.date);
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Expression régulière pour yyyy-mm-dd

        if (!dateRegex.test(req.params.date) || isNaN(requestedDate.getTime())) {
            res.status(400).send('Le format de la date est incorrect. Utilisez yyyy-mm-dd');
            return;
        }

        const { year } = req.params;

        let filteredData = req.data.filter(event => {
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

        if (year) {
            filteredData = filteredData.filter(event => {
                const itemYear = new Date(event.dateDebut[0]).getFullYear();
                return itemYear.toString() === year.toString();
            });
        }

        if (filteredData.length === 0) {
            res.setHeader('X-reponse', 'Echec');
            res.status(404).send('Aucun événement pour cette date');
        } else {
            res.setHeader('X-reponse', 'Reussi');
            res.status(201).json(filteredData);
        }
    } catch (err) {
        console.log(err);
        res.setHeader('X-reponse', 'Echec');
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

export default router;
