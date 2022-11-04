import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProducts } from '../interfaces/IProducts';

export default class ProductModel {
  private connection = mysql;

  public async createProducts(products: IProducts): Promise<IProducts> {
    const { name, amount } = products; 
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...products };
  }

  async getAll(): Promise<IProducts[]> {
    const [rows] = await this.connection.execute<IProducts[] & RowDataPacket[]>(`
      SELECT
        id, name, amount, orderId
      FROM Trybesmith.Products
    `);

    return rows;
  }
}