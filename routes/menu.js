import express from 'express';
import path from 'path';

const router = express.Router();

router.use('/static', express.static(path.join(process.cwd(), 'views/static')));

/**
 * Route GET pour récupérer la page d'accueil.
 * @module Menu
 * @name GET /
 * @function
 * @memberof module:Menu
 * @param {Object} req - L'objet de requête Express.
 * @param {Object} res - L'objet de réponse Express.
 * @returns {void} - Renvoie la page d'accueil.
 */
router.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'views', 'index.html');
  res.sendFile(filePath);
});

export default router;
