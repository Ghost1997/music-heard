import { Artists } from 'data/models';
import { NotFound } from 'server/utils/errors';

class ArtistsRepository {
  static async create(name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt) {
    const createdArtists = await Artists.create({
      name,
      image,
      youtubeId,
      vevoId,
      spotifyId,
      isDeleted,
      createdAt,
      updatedAt,
    });

    return createdArtists;
  }
  static get(id) {
    return Artists.findByPk(id, { include: [] });
  }

  static getAll(filters) {
    return Artists.findAll({
      where: filters,
      include: [],
    });
  }

  static async update(id, name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt) {
    return this.partialUpdate({
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

  static async partialUpdate({ id, name, image, youtubeId, vevoId, spotifyId, isDeleted, createdAt, updatedAt }) {
    const foundArtists = await Artists.findByPk(id);
    if (!foundArtists) throw new NotFound(`Artists with primary key ${id} not found`);
    if (name !== undefined) foundArtists.name = name;
    if (image !== undefined) foundArtists.image = image;
    if (youtubeId !== undefined) foundArtists.youtubeId = youtubeId;
    if (vevoId !== undefined) foundArtists.vevoId = vevoId;
    if (spotifyId !== undefined) foundArtists.spotifyId = spotifyId;
    if (isDeleted !== undefined) foundArtists.isDeleted = isDeleted;
    if (createdAt !== undefined) foundArtists.createdAt = createdAt;
    if (updatedAt !== undefined) foundArtists.updatedAt = updatedAt;
    await foundArtists.save();
    return foundArtists.reload();
  }

  static async destroy(id) {
    const foundArtists = await Artists.findByPk(id);
    if (!foundArtists) throw new NotFound(`Artists with primary key ${id} not found`);
    await foundArtists.destroy();
    return foundArtists;
  }
}

export { ArtistsRepository };
