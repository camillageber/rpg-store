import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'secret';

const generateToken = (payload: IUser) => jwt.sign(payload, secret);

export default generateToken;