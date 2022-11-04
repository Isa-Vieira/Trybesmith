import express from 'express';
import router from './router/products.route';
import routerUser from './router/users.route';
import routerOrders from './router/orders.route';

const app = express();

app.use(express.json());

app.use('/products', router);

app.use('/users', routerUser);

app.use('/orders', routerOrders);

export default app;