import 'reflect-metadata';
import express from 'express';

import './database';

const app = express();
const PORT = 3000;

app.get('/', (_, res) => {
  return res.send('API Intratec!')
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
