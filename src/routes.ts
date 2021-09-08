import { Router } from 'express'

import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentsController'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

const createTagController = new CreateTagController()
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.get('/', (_, res) => {
  return res.send('API ok!')
})

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.use(ensureAuthenticated)
router.use(ensureAdmin)
router.post('/tags', createTagController.handle) 
router.post('/compliments', createComplimentController.handle) 

export { router }
