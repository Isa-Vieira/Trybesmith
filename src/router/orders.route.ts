import { Router } from 'express';
import OrdersController from '../controllers/orders.Controller';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAllController.bind(ordersController));

export default router;