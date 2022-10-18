/*

Alleen maar variabelen renderen is natuurlijk een beetje saai. Vaak wil je
net iets anders doen afhankelijk van de waarde in de variabele. Dit kan je
doen met conditionals. Dit klinkt ingewikkeld, maar is niks anders dan
een soort regel voor wat er moet gebeuren.

Laten we beginnen met een voorbeeld, dan snap je het vanzelf.

*/
let isHetWoensdag = true;

if (isHetWoensdag) {
  render('Het is woensdag 🤘');
} else {
  render('Het is geen woensdag 😿');
}

/*

Je kan ook andere dingen vergelijken, bijvoorbeeld strings of integers.

*/