import { Joi } from 'express-validation';

const usersValidation = {
  register: {
    body: Joi.object({
      name: Joi.string().min(3).max(60).required(),
      email: Joi.string().min(3).required().email(),
      password: Joi.string().min(3).required(),
    }),
  },
  login: {
    body: Joi.object({
      email: Joi.string().min(3).required().email(),
      password: Joi.string().min(3).required(),
    }),
  },
};

export { usersValidation };
