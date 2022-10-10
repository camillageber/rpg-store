import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import ProductService from '../services/ProductService';

export default class ProductController {
  service: ProductService;
  
  constructor() {
    this.service = new ProductService();
  }

  addProduct = async (req: Request, res: Response) => {
    const product = req.body as IProduct;
    const newProduct = await this.service.addProduct(product);
    res.status(201).json(newProduct);
  };
}