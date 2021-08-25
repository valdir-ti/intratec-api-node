import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.get('/', (_, res) => {
  return res.send('API ok!')
});

router.post('/users', createUserController.handle); 
router.post('/tags', createTagController.handle); 

export { router };