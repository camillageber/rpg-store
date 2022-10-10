import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();
const productController = new ProductController();

router.post('/', productController.addProduct);
router.get('/', productController.getAllProducts);

export default router;