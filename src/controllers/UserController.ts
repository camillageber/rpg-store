import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  service : UserService;

  constructor() {
    this.service = new UserService();
  }

  addUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    const token = await this.service.addUser(newUser);
  
    res.status(201).json({ token });
  };
}