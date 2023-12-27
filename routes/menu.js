import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'views', 'Menu.html');
  res.status(201).sendFile(filePath);
});

export default router;
