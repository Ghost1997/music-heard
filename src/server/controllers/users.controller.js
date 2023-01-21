import { CREATED, OK } from 'http-status';
import { UsersService } from 'server/services';

class UsersController {
  static async register(req, res, next) {
    try {
      const { body } = req;
      const newUser = await UsersService.register(body);
      res.locals.status = CREATED;
      res.locals.data = newUser;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { body } = req;
      const result = await UsersService.login(body);
      res.locals.status = OK;
      res.locals.data = result;
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export { UsersController };
