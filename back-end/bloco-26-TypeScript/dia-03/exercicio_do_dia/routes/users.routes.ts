import { Router } from 'express';
import UsersController from '../controllers/users.controllers';

const router = Router();

const usersController = new UsersController();

router.get('/users', usersController.getAll);

router.get('/users/:id', usersController.getById);

export default router;
