import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import LoginModel from '../models/login.model';

export default class LoginService {
  public login = new LoginModel();

  public jwt = jsonwebtoken;

  public async createLogin(login: ILogin) {
    const verificaLogin = await this.login.createLogin(login);

    if (verificaLogin.length < 1) {
      return { type: 401, response: { message: 'Username or password invalid' } };
    }
    const token = this.generationToken(login);
    return { type: 200, response: { token } }; 
  }
 
  public generationToken(login: ILogin) {
    const payload = { ...login }; 
    return this.jwt
      .sign(payload, process.env.JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '1d' });
  }
}
