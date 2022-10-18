/*

Tot nu toe heb je 'render()' gebruikt om dingen naar het scherm te schrijven.  Maar hoe werkt dat eigenlijk? 
We gaan nu onze eigen render functie schrijven. Let's go.

We beginnen met het selecteren van de container die in de HTML staat:

*/
let container = document.querySelector('.container');

/*

'document' is een speciale variabele die ingebouwd zit in elke browser. Je kan het gebruiken om de browser te
vertellen bepaalde acties uit te voeren.

In dit geval gebruiken we de 'querySelector' functionaliteit. Hiermee kun je bepaalde tags (weet je nog?) uit
de HTML selecteren.

We vertellen de browser dat we op zoek zijn naar een HTML tag met de class 'container'. Deze dus:

<div class="container"></div>

Nu we de container hebben, kunnen we de browser vertellen wat we naar de container willen schrijven. Dit doen
we zo:

*/

container.innerText = 'Het werkt!';

/*

Laten we dit samenvoegen tot een functie.

*/