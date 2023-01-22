import { Router } from 'express';
import { validate } from 'express-validation';
import { SpotifyController } from 'server/controllers';
import { spotifyValidation, options } from 'server/validations';
import { authMiddleware, checkAdmin } from 'server/middlewares';
const router = Router();

router.post('/searchArtist', authMiddleware, checkAdmin, validate(spotifyValidation.searchArtist, options), SpotifyController.searchArtist);


export { router as spotifyRouter };
