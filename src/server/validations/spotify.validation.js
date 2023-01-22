import { Joi } from 'express-validation';

const spotifyValidation = {
  searchArtist: {
    body: Joi.object({
      search: Joi.string().required(),
    }),
  },
};

export { spotifyValidation };
