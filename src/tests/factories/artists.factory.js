import { date, datatype, random } from 'faker';
import { Artists } from 'data/models';
import { dateToUTC } from 'server/utils/functions';

const buildArtists = async (artistsFks) => {
  const resArtists = {};

  resArtists.name = random.word().slice(0, 255);
  resArtists.image = random.word().slice(0, 255);
  resArtists.youtubeId = random.word().slice(0, 255);
  resArtists.vevoId = random.word().slice(0, 255);
  resArtists.spotifyId = random.word().slice(0, 255);
  resArtists.isDeleted = datatype.boolean();
  resArtists.createdAt = dateToUTC(date.past()).format('YYYY-MM-DDTHH:mm:ss[.000Z]');
  resArtists.updatedAt = dateToUTC(date.past()).format('YYYY-MM-DDTHH:mm:ss[.000Z]');

  return resArtists;
};

const createArtists = async (fakeArtists) => {
  const artists = await Artists.create(fakeArtists);
  return artists;
};

export { buildArtists, createArtists };
