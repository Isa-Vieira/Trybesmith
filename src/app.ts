import express from 'express';
import router from './router/products.route';
import routerUser from './router/users.route';
import routerOrders from './router/orders.route';
import routerLogin from './router/login.route';

const app = express();

app.use(express.json());

app.use('/products', router);

app.use('/users', routerUser);

app.use('/orders', routerOrders);

app.use('/login', routerLogin);

export default app;