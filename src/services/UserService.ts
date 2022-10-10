import jwt, { Secret } from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { IUser } from '../interfaces';

export default class ProductService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async addUser(user: IUser) {
    const newUser = await this.model.addUser(user);
    const token: unknown = this.generateToken(newUser);
    return token as Secret;
  }

  private generateToken = (user: IUser): Secret => {
    const secret = process.env.JWT_SECRET;
    const payload = { user: user.username, classe: user.classe };
    const token = jwt.sign(payload, secret as Secret);
    return token as Secret;
  };

  // type Secret =  https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jsonwebtoken/index.d.ts
}