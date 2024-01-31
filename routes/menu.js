import express from 'express';
import path from 'path';

const router = express.Router();

router.use('/static', express.static(path.join(process.cwd(), 'views/static')));

router.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'views', 'index.html');
  res.sendFile(filePath);
});

export default router;
