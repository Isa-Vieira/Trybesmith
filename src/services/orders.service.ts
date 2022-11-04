import { IOrders } from '../interfaces/IOrders';
import OrdersModel from '../models/orders.model';

export default class OrderService {
  public order = new OrdersModel();

  public async getAllOrders(): Promise<IOrders[]> {
    const orders = await this.order.getAllO();
    return orders;
  }
}