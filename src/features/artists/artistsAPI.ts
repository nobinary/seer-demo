import axios from 'axios'

const videoUrl = 'https://theaudiodb.com/api/v1/json/1/mvid.php?i=1123'
const infoUrl = 'https://theaudiodb.com/api/v1/json/1/search.php?s='

export async function createArtistVideoApiRequest(artistId = 1) {
  try {
    const response = await axios.get(videoUrl + String(artistId).padStart(2, "0"));
    const artists = response.data.mvids;
    return artists;
  } catch (error) {
    const errorMsg = error;
    console.log(errorMsg);
  }
}

export async function createArtistInfoApiRequest(artistName: string) {
  try {
    const response = await axios.get(infoUrl + artistName);
    const artistInfo = response.data.artists;
    return artistInfo[0];
  } catch (error) {
    const errorMsg = error;
    console.log(errorMsg);
  }
}
