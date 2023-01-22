import { UsersRepository } from 'data/repositories';
import { BadRequest, Unauthorized } from 'server/utils/errors';
import { messages } from 'server/utils/constants/messages';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

class UsersService {
  static async register(data) {
    const { email, password, name } = data;

    let hashedPassword = null;

    // find user with same email
    const userExist = await UsersRepository.getAll({ email });

    // email already in use throw else hash password
    if (userExist.length) throw new BadRequest(messages.emailAlredyInUse);
    else hashedPassword = await bcrypt.hashSync(password, 10);

    const obj = {
      name,
      email,
      password: hashedPassword,
      isAdmin: false,
    };

    return UsersRepository.create(obj);
  }

  static async login(data) {
    const { email, password } = data;

    // find user with email
    const user = await UsersRepository.getOne({ email });

    // email already in use throw else hash password
    if (!user) throw new Unauthorized(messages.incorrectEmailPassword);

    // check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Unauthorized(messages.incorrectEmailPassword);

    // delete password field
    delete user.password;

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { algorithm: 'HS256' });
    user.token = token;

    return user;
  }
}

export { UsersService };
