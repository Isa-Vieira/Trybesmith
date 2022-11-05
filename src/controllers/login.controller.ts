import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  public loginService = new LoginService();

  async createLogin(req: Request, res: Response) {
    const login = req.body;

    const loginMessage = await this.loginService.createLogin(login);
    return res.status(loginMessage.type).json(loginMessage.response);
  }
}
