import { Router } from 'express';
import { validate } from 'express-validation';
import { ArtistsController } from 'server/controllers';
import { artistsValidation, options } from 'server/validations';

const router = Router();

router.get('/', validate(artistsValidation.getAll, options), ArtistsController.getAll);

router.get('/:id', ArtistsController.get);

router.post('/', validate(artistsValidation.create, options), ArtistsController.create);

router.put('/:id', validate(artistsValidation.update, options), ArtistsController.update);

router.patch('/:id', validate(artistsValidation.partialUpdate, options), ArtistsController.partialUpdate);

router.delete('/:id', validate(artistsValidation.destroy, options), ArtistsController.destroy);

export { router as artistsRouter };
