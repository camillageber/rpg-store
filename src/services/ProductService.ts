import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async addProduct(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.addProduct(product);

    return newProduct;
  }
}