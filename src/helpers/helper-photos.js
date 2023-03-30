import { apiKey } from "../config";

async function getPhotoData(tag) {
  try {
    const photoResponse = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
    );

    const photoJson = await photoResponse.json();
    const photoData = photoJson.photos.photo;

    return photoData;
  } catch (e) {
    return null;
  }
}

async function getOnePhoto(photoData) {
  try {
    const photoReponse = await fetch(
      `https://live.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}.jpg`
    );

    const photo = photoReponse.url;

    return photo;
  } catch (e) {
    return null;
  }
}

async function getPhotos(photoData) {
  try {
    const photos = await Promise.all(
      photoData.map(async (photoData) => {
        const photo = await getOnePhoto(photoData);
        return photo;
      })
    );

    return photos;
  } catch (e) {
    return null;
  }
}

export async function photoLoader(tagObject) {
  const tag = tagObject.tag;
  const photoData = await getPhotoData(tag);
  const photos = await getPhotos(photoData);
  return photos;
}
