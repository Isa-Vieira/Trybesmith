import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  async createUserController(req: Request, res: Response) {
    const users = req.body;

    const userMessage = await this.userService.createUser(users);
    res.status(201).json(userMessage);
  }
}