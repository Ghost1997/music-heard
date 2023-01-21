import { ArtistsRepository } from 'data/repositories';

class ArtistsService {
  static create(name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt) {
    return ArtistsRepository.create(name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt);
  }
  static get(id) {
    return ArtistsRepository.get(id);
  }

  static getAll(args) {
    return ArtistsRepository.getAll(args);
  }

  static update(id, name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt) {
    return ArtistsRepository.update(id, name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt);
  }

  static partialUpdate(id, name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt) {
    return ArtistsRepository.partialUpdate({
      id,
      name,
      image,
      youtubeId,
      vevoId,
      spotifyId,
      isDeleted,
      createdAt,
      updatedAt,
    });
  }

  static destroy(id) {
    return ArtistsRepository.destroy(id);
  }
}

export { ArtistsService };
