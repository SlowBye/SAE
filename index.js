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

const app = express();

app.use(Middle);

app.use('/', Menu);
app.use('/stats/categorie', statCategorie);
app.use('/stats/etat', statEtat);
app.use('/stats/epeires', statEpeires);

app.use('/tri/categorie', triCategorie);
app.use('/tri/epeires', triEpeires);
app.use('/tri/etat', triEtat);
app.use('/tri/nom', triNom);
app.use('/tri/date', triDate);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
