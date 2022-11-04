import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IOrders } from '../interfaces/IOrders';

export default class ProductModel {
  private connection = mysql;

  public async getAllO(): Promise<IOrders[]> {
    const [rows] = await this.connection.execute<IOrders[] & RowDataPacket[]>(

      `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) AS productsIds
        FROM Trybesmith.Orders
        INNER JOIN Trybesmith.Products
        ON Orders.id = Products.orderId
        GROUP BY id`,
    );
    return rows;
  }
}