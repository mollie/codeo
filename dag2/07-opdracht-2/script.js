let imageURLs = await downloadImages();

/*
Loop hier over de URLs heen (weet je nog?) en maak voor elke URL een img tag.
Je kan dit doen met document.createElement('img');

Vervolgens kun je de URL aan de img tag toevoegen met img.src
*/





// De code hieronder hoef je niet aan te passen.
async function downloadImages() {
  return await fetch('https://xenn.at/codeo/images').then(res => JSON.parse(res));
}