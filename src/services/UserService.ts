import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { IUser } from '../interfaces';
import generateToken from '../utils/JWT';

export default class ProductService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async addUser(user: IUser) {
    const newUser = await this.model.addUser(user);
    const token: string = generateToken(newUser);
    return token;
  }
}