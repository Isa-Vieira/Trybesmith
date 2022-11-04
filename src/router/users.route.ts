import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userController = new UserController();

router.post('/', userController.createUserController.bind(userController));

export default router;