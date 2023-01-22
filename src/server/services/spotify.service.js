import { BadRequest, Unauthorized } from 'server/utils/errors';
import SpotifyWebApi from 'spotify-web-api-node';
import { messages } from 'server/utils/constants/messages';
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

class SpotifyService {
  static async searchArtist(data) {
    const { search } = data;
    let result = [];
    await setSpotifyAccessToken();

    await spotifyApi
      .searchArtists(search)
      .then((res) => {
        result = processSearchResult(res);
      })
      .catch((err) => {
        console.log(err);
        throw new Unauthorized(messages.spotifyAPIError);
      });

    return result;
  }
}

// Sunction to set Access Token for Spotify API
const setSpotifyAccessToken = async () => {
  let { body } = await spotifyApi.clientCredentialsGrant();
  spotifyApi.setAccessToken(body['access_token']);
};

// Function to process search Artist API result
const processSearchResult = (data) => {
  let result = [];

  result = data?.body?.artists?.items?.map((ele) => {
    let obj = {
      spotifyId: ele?.id || null,
      name: ele?.name || null,
      image: ele?.images[0]?.url || null,
      type: ele?.type,
    };
    return obj;
  });

  return result;
};

export { SpotifyService };
