/*
We gaan het vierkantje van gister bewegen met de toetsen op je keyboard. Dit lijkt een beetje
op wat we gister gemaakt hebben met het klikken van de muis.

Hiervoor hebben we nodig:
- Query selector om het rode vierkant te selecteren
- Een event listener om naar te luisteren wanneer je op een toets drukt
- Een stukje style om het rode rode vierkant te verplaatsen

Bonus: 
- Zet het vierkant elke keer dat je op enter drukt terug in de linker bovenhoek
- Maak van het vierkant een rechthoek, en draai het 90 graden elke keer dat je op spatie drukt
*/
let vierkant = document.querySelector('.box');
vierkant.style.top = '0px';
vierkant.style.left = '0px';

let graden = 0;

let kleuren = [
  'rgb(62, 189, 208)',
  'rgb(30, 30, 122)',
  'rgb(233, 70, 100)',
  'rgb(150, 232, 0)',
];

document.addEventListener('keydown', drukOpToets);

function drukOpToets(event) {
  if (event.key === 'ArrowRight') {
    vierkant.style.left = parseInt(vierkant.style.left) + 100 + "px";
  }

  if (event.key === 'ArrowLeft') {
    vierkant.style.left = parseInt(vierkant.style.left) - 100 + "px";
  }

  if (event.key === 'ArrowUp') {
    vierkant.style.top = parseInt(vierkant.style.top) - 100 + "px";
  }

  if (event.key === 'ArrowDown') {
    vierkant.style.top = parseInt(vierkant.style.top) + 100 + "px";
  }

  if (event.key === ' ') {
    graden += 90;
    vierkant.style.transform = 'rotate(' + graden + 'deg)';
  }

  if (event.key === 'a') {
    vierkant.style.background = kiesEenKleur();
  }
}

let nummer = 0;

function kiesEenKleur() {
  nummer += 1;

  if (nummer === kleuren.length) {
    nummer = 0;
  }

  return kleuren[nummer];
}