import { Joi } from 'express-validation';

const artistsValidation = {
  getAll: {
    query: Joi.object({
      id: Joi.number().integer(),
      name: Joi.string().max(255),
      image: Joi.string().max(255),
      youtubeId: Joi.string().max(255),
      vevoId: Joi.string().max(255),
      spotifyId: Joi.string().max(255),
      isDeleted: Joi.boolean(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    }),
  },
  create: {
    body: Joi.object({
      name: Joi.string().max(255).required(),
      image: Joi.string().max(255),
      youtubeId: Joi.string().max(255).required(),
      vevoId: Joi.string().max(255),
      spotifyId: Joi.string().max(255).required(),
      isDeleted: Joi.boolean(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      name: Joi.string().max(255).required(),
      image: Joi.string().max(255).required(),
      youtubeId: Joi.string().max(255).required(),
      vevoId: Joi.string().max(255).required(),
      spotifyId: Joi.string().max(255).required(),
      isDeleted: Joi.boolean().required(),
      createdAt: Joi.date().required(),
      updatedAt: Joi.date().required(),
    }),
  },
  partialUpdate: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      name: Joi.string().max(255),
      image: Joi.string().max(255),
      youtubeId: Joi.string().max(255),
      vevoId: Joi.string().max(255),
      spotifyId: Joi.string().max(255),
      isDeleted: Joi.boolean(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    }),
  },
  destroy: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
  },
};

export { artistsValidation };
