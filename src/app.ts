import express from 'express';
import router from './router/products.route';

const app = express();

app.use(express.json());

app.use('/products', router);

export default app;