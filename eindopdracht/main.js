import {downloadFotos} from './downloadFotos';

async function start() { 
  let fotoContainer = document.querySelector('foto-container');

  // Schrijf je code hier, de namen moeten in alfabetische volgorde
  let namen = ['Nayeli', 'Umeyme'];
  let fotos = await downloadFotos(namen);
  console.log(fotos);

  /*
   Nu je de foto's hebt, kun je ze naar het scherm schrijven als afbeelding
   Je kan een afbeelding maken met:

   let foto = document.createElement('img');

   Je moet zelf nog zorgen dat de je de URL van de foto goed zet
  */


  // Als je je foto hebt, kun je deze toevoegen aan de HTML met:
  // fotoContainer.appendChild(foto);
}

start();

