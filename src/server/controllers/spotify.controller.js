import { CREATED, OK } from 'http-status';
import { SpotifyService } from 'server/services';

class SpotifyController {
  static async searchArtist(req, res, next) {
    try {
      const { body } = req;
      const result = await SpotifyService.searchArtist(body);
      res.locals.status = OK;
      res.locals.data = result;
      return next();
    } catch (error) {
      return next(error);
    }
  }

}

export { SpotifyController };
