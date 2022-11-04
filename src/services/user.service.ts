import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  public user = new UserModel();

  public jwt = jsonwebtoken;

  public createUser(user: IUser) {
    this.user.creatUser(user);
    const token = this.generationToken(user);
    return { token };
  }

  public generationToken(user: IUser) {
    const payload = { ...user }; 
    return this.jwt
      .sign(payload, process.env.JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '1d' });
  }
}