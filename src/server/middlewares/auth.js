import * as jwt from 'jsonwebtoken';
import { messages } from 'server/utils/constants/messages';
import { Unauthorized } from 'server/utils/errors';
import { UsersRepository } from 'data/repositories';
const authMiddleware = async (req, res, next) => {
  try {
    // get token from request header
    const token = req.headers.authorization;
    if (!token) throw new Unauthorized(messages.unauthorized);

    // decode JWT token and get userId
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decodedToken;

    // find user from Id
    const user = await UsersRepository.getOne({ id });
    if (!user) throw new Unauthorized(messages.unauthorized);

    // set user in req after removing password
    delete user.password;
    req.user = user;

    return next();
  } catch (err) {
    next(err);
  }
};

const checkAdmin =  (req, res, next) => {
  // check user is admin or not
  const { isAdmin } = req.user
  if (!isAdmin) throw new Unauthorized(messages.unauthorized);

  return next();
};

export { authMiddleware, checkAdmin };
