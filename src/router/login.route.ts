import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginValited from '../middlewares/login.middleware';

const router = Router();

const loginController = new LoginController();

router.post('/', loginValited, loginController.createLogin.bind(loginController));

export default router;