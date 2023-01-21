import request from 'supertest';
import { buildArtists, createArtists } from './factories';
import { startDatabase } from './utils';
import { Artists } from 'data/models';
import { app } from 'server/app';

const ENDPOINT = '/artists';

describe('Artists tests', () => {
  beforeEach(async () => {
    await startDatabase();
  });

  afterAll(async () => {
    await app.close();
  });

  test('/POST - Response with a new created artists', async () => {
    const fakeArtists = await buildArtists({});

    const response = await request(app).post(ENDPOINT).send(fakeArtists);

    expect(response.status).toBe(201);
    expect(response.statusCode).toBe(201);

    const responseArtists = response.body.data;

    const artists = await Artists.findByPk(responseArtists.id);

    expect(artists.name).toBe(fakeArtists.name);
    expect(artists.image).toBe(fakeArtists.image);
    expect(artists.youtubeId).toBe(fakeArtists.youtubeId);
    expect(artists.vevoId).toBe(fakeArtists.vevoId);
    expect(artists.spotifyId).toBe(fakeArtists.spotifyId);
    expect(artists.isDeleted).toBe(fakeArtists.isDeleted);
    expect(artists.createdAt.toJSON()).toEqual(fakeArtists.createdAt);
    expect(artists.updatedAt.toJSON()).toEqual(fakeArtists.updatedAt);
  });

  test('/GET - Response with a artists', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);

    const response = await request(app).get(`${ENDPOINT}/${fakeArtists.id}`);

    const { statusCode, status } = response;
    const { data } = response.body;

    expect(status).toBe(200);
    expect(statusCode).toBe(200);

    expect(data.id).toBe(fakeArtists.id);
    expect(data.name).toBe(fakeArtists.name);
    expect(data.image).toBe(fakeArtists.image);
    expect(data.youtubeId).toBe(fakeArtists.youtubeId);
    expect(data.vevoId).toBe(fakeArtists.vevoId);
    expect(data.spotifyId).toBe(fakeArtists.spotifyId);
    expect(data.isDeleted).toBe(fakeArtists.isDeleted);
    expect(data.createdAt).toBe(fakeArtists.createdAt.toJSON());
    expect(data.updatedAt).toBe(fakeArtists.updatedAt.toJSON());
  });
  test('/GET - Response with a artists not found', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);
    const { id } = fakeArtists;
    await fakeArtists.destroy();

    const response = await request(app).get(`${ENDPOINT}/${id}`);
    const { statusCode } = response;
    expect(statusCode).toBe(404);
  });
  test('/GET - Response with a list of artistss', async () => {
    const response = await request(app).get(ENDPOINT);

    const { statusCode, status } = response;
    const { data } = response.body;

    expect(status).toBe(200);
    expect(statusCode).toBe(200);

    const allArtists = await Artists.findAll();
    expect(data.length).toBe(allArtists.length);
  });
  test('/PUT - Response with an updated artists', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);

    const anotherFakeArtists = await buildArtists({});

    const response = await request(app).put(`${ENDPOINT}/${fakeArtists.id}`).send({
      name: anotherFakeArtists.name,
      image: anotherFakeArtists.image,
      youtubeId: anotherFakeArtists.youtubeId,
      vevoId: anotherFakeArtists.vevoId,
      spotifyId: anotherFakeArtists.spotifyId,
      isDeleted: anotherFakeArtists.isDeleted,
      createdAt: anotherFakeArtists.createdAt,
      updatedAt: anotherFakeArtists.updatedAt,
    });

    const { status } = response;
    const { data } = response.body;

    expect(status).toBe(200);
    expect(response.statusCode).toBe(200);

    expect(data.name).toBe(anotherFakeArtists.name);
    expect(data.image).toBe(anotherFakeArtists.image);
    expect(data.youtubeId).toBe(anotherFakeArtists.youtubeId);
    expect(data.vevoId).toBe(anotherFakeArtists.vevoId);
    expect(data.spotifyId).toBe(anotherFakeArtists.spotifyId);
    expect(data.isDeleted).toBe(anotherFakeArtists.isDeleted);
    expect(data.createdAt).toBe(anotherFakeArtists.createdAt);
    expect(data.updatedAt).toBe(anotherFakeArtists.updatedAt);

    const updatedArtists = await Artists.findByPk(fakeArtists.id);

    expect(updatedArtists.name).toBe(anotherFakeArtists.name);
    expect(updatedArtists.image).toBe(anotherFakeArtists.image);
    expect(updatedArtists.youtubeId).toBe(anotherFakeArtists.youtubeId);
    expect(updatedArtists.vevoId).toBe(anotherFakeArtists.vevoId);
    expect(updatedArtists.spotifyId).toBe(anotherFakeArtists.spotifyId);
    expect(updatedArtists.isDeleted).toBe(anotherFakeArtists.isDeleted);
    expect(updatedArtists.createdAt.toJSON()).toEqual(anotherFakeArtists.createdAt);
    expect(updatedArtists.updatedAt.toJSON()).toEqual(anotherFakeArtists.updatedAt);
  });

  test('/PUT - Artists does not exists, artists cant be updated', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);
    const { id } = fakeArtists;
    await fakeArtists.destroy();

    const response = await request(app).put(`${ENDPOINT}/${id}`).send({
      name: artistsDict.name,
      image: artistsDict.image,
      youtubeId: artistsDict.youtubeId,
      vevoId: artistsDict.vevoId,
      spotifyId: artistsDict.spotifyId,
      isDeleted: artistsDict.isDeleted,
      createdAt: artistsDict.createdAt,
      updatedAt: artistsDict.updatedAt,
    });

    const { statusCode } = response;
    expect(statusCode).toBe(404);
  });
  test('/PATCH - Response with an updated artists (no updates)', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);

    const response = await request(app).patch(`${ENDPOINT}/${fakeArtists.id}`).send({});

    const { status } = response;

    expect(status).toBe(200);
    expect(response.statusCode).toBe(200);
  });

  test('/PATCH - Response with an updated artists', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);

    const anotherFakeArtists = await buildArtists({});

    const response = await request(app).patch(`${ENDPOINT}/${fakeArtists.id}`).send({ name: anotherFakeArtists.name });

    const { status } = response;
    const { data } = response.body;

    expect(status).toBe(200);
    expect(response.statusCode).toBe(200);

    expect(data.name).toBe(anotherFakeArtists.name);

    const updatedArtists = await Artists.findByPk(fakeArtists.id);

    expect(updatedArtists.name).toBe(anotherFakeArtists.name);
  });

  test('/PATCH - Artists does not exists, artists cant be updated', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);
    const { id } = fakeArtists;
    const name = fakeArtists.name;
    await fakeArtists.destroy();

    const response = await request(app).patch(`${ENDPOINT}/${id}`).send({ name: name });

    const { statusCode } = response;
    expect(statusCode).toBe(404);
  });
  test('/DELETE - Response with a deleted artists', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);

    const response = await request(app).delete(`${ENDPOINT}/${fakeArtists.id}`);

    const { status } = response;
    const { data } = response.body;

    expect(status).toBe(200);
    expect(response.statusCode).toBe(200);

    expect(data.id).toBe(fakeArtists.id);

    const deletedArtists = await Artists.findByPk(fakeArtists.id);
    expect(deletedArtists).toBe(null);
  });

  test('/DELETE - Artists does not exists, artists cant be deleted', async () => {
    const artistsDict = await buildArtists({});
    const fakeArtists = await createArtists(artistsDict);
    const { id } = fakeArtists;
    await fakeArtists.destroy();

    const response = await request(app).delete(`${ENDPOINT}/${id}`);

    const { statusCode } = response;
    expect(statusCode).toBe(404);
  });
});
