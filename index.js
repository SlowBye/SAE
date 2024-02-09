import express from 'express';
import Middle from './routes/middleData.js';
import Menu from './routes/menu.js';
import statCategorie from './routes/stats/categorie.js';
import statEtat from './routes/stats/etat.js';
import statEpeires from './routes/stats/epeires.js';
import triCategorie from './routes/tri/categorie.js';
import triEpeires from './routes/tri/epeires.js';
import triEtat from './routes/tri/etat.js';
import triNom from './routes/tri/nom.js';
import triDate from './routes/tri/date.js';
import cors from 'cors';

const app = express();
app.use(cors());

/**
 * Middleware pour traiter les données.
 * @module Middle
 */
app.use(Middle);

/**
 * Page de menu.
 * @module Menu
 */
app.use(Menu);

/**
 * Route pour les statistiques de catégorie.
 * @module statCategorie
 */
app.use('/stat/categorie', statCategorie);

/**
 * Route pour les tri par catégorie.
 * @module triCategorie
 */
app.use('/tri/categorie', triCategorie);

/**
 * Route pour les tri par état.
 * @module triEtat
 */
app.use('/tri/etat', triEtat);

/**
 * Route pour les statistiques d'état.
 * @module statEtat
 */
app.use('/stat/etat', statEtat);

/**
 * Route pour les statistiques d'epeires.
 * @module statEpeires
 */
app.use('/stat/epeires', statEpeires);

/**
 * Route pour les tri par epeires.
 * @module triEpeires
 */
app.use('/tri/epeires', triEpeires);

/**
 * Route pour les tri par nom.
 * @module triNom
 */
app.use('/tri/nom', triNom);

/**
 * Route pour les tri par date.
 * @module triDate
 */
app.use('/tri/date', triDate);

/**
 * Port d'écoute du serveur.
 * @constant {number} PORT
 * @default
 */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
