import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

const productController = new ProductController();

router.post('/', productController.createProducts.bind(productController));

export default router;