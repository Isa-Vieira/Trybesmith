import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrdersController {
  public orderService = new OrderService();

  async getAllController(_req: Request, res: Response) {
    const orders = await this.orderService.getAllOrders();
    res.status(200).json(orders);
  }
}