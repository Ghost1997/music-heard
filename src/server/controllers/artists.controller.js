import { CREATED } from 'http-status';
import { ArtistsService } from 'server/services';
import { NotFound } from 'utils/errors/NotFound';

class ArtistsController {
  static async create(req, res, next) {
    try {
      const { name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt } = req.body;
      const newArtists = await ArtistsService.create(
        name,
        image,
        youtubeId,
        vevoId,
        spotifyId,
        isDeleted,
        createdAt,
        updatedAt
      );
      res.locals.status = CREATED;
      res.locals.data = newArtists;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const { id } = req.params;
      const artistsObject = await ArtistsService.get(id);
      if (!artistsObject) {
        throw new NotFound(`Artists with primary key ${id} not found`);
      }
      res.locals.data = artistsObject;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const filters = { ...req.query };
      const allArtistss = await ArtistsService.getAll(filters);
      res.locals.data = allArtistss;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt } = req.body;

      const updatedArtists = await ArtistsService.update(
        id,
        name,
        image,
        youtubeId,
        vevoId,
        spotifyId,
        isDeleted,
        createdAt,
        updatedAt
      );

      res.locals.data = updatedArtists;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async partialUpdate(req, res, next) {
    try {
      const { id } = req.params;
      const { name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt } = req.body;

      const updatedArtists = await ArtistsService.partialUpdate(
        id,
        name,
        image,
        youtubeId,
        vevoId,
        spotifyId,
        isDeleted,
        createdAt,
        updatedAt
      );

      res.locals.data = updatedArtists;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const artistsDelete = await ArtistsService.destroy(id);
      res.locals.data = artistsDelete;
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export { ArtistsController };
