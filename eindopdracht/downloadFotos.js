const knownAlbums = [
  'bohdan-emilio-jeremiah',
  'fiona-juleiny',
  'nayeli-umeyme',
  'rahiana-youssra',
  'cahide-sharon',
];

export async function downloadFotos(namen) {
  if (!namen) {
    throw new Error('downloadFotos verwacht een array met namen');
  }

  const album = namen.join('-').toLowerCase();

  if (!knownAlbums.includes(album)) {
    throw new Error('downloadFotos kent deze namen niet, staan ze wel in alfabetische volgorde?');
  }

  try {
    return fetch(`https://xenn.at/codeo/images/${album}`).then(res => res.json());
  } catch(e) {
    throw new Error('Er ging iets mis bij het downloaden van de foto\', je kan even om hulp vragen');
  }
}