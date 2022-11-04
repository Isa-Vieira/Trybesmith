import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  public productService = new ProductService();

  async createProducts(req: Request, res: Response) {
    const products = req.body;

    const productMessage = await this.productService.createProducts(products);
    res.status(201).json(productMessage);
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  }
}