import fetch from 'node-fetch';

const middleData = async (req, res, next) => {
    try {
        let response = await fetch('https://mada.formation4f.com/php/index.php/Accueil');
        let data = await response.json();
        req.data = data;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur lors de la récupération des données');
    }
};

export default middleData;