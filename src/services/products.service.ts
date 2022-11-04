import { IProducts } from '../interfaces/IProducts';
import ProductModel from '../models/products.model';

export default class ProductService {
  public products = new ProductModel();

  public createProducts(products: IProducts): Promise<IProducts> {
    return this.products.createProducts(products);
  }
}