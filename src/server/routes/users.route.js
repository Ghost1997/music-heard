import { Router } from 'express';
import { validate } from 'express-validation';
import { UsersController } from 'server/controllers';
import { usersValidation, options } from 'server/validations';

const router = Router();

router.post('/register', validate(usersValidation.register, options), UsersController.register);
router.post('/login', validate(usersValidation.login, options), UsersController.login);

export { router as usersRouter };
