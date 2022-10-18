/*

Dan is er nog een object, dit is een soort woordenboek. Elk item heeft een zogenaamde sleutel (key) 
en een waarde (value). Dit ziet er zo uit:

*/
let woordenboek = {
  codeo: 'Programmeerkamp georganiseerd door Mollie',
  browser: 'App om websites te bekijken',
}

// Keys kunnen van alles zijn, bijvoorbeeld ook een nummer:
woordenboek = {
  codeo: 'Programmeerkamp georganiseerd door Mollie',
  browser: 'App om websites te bekijken',
  huisnummer: 126,
}

// Of zelfs arrays of andere objecten:
woordenboek = {
  codeo: 'Programmeerkamp georganiseerd door Mollie',
  browsers: ['Chrome', 'Safari'],
  adres: {
    straat: 'Keizersgracht',
    huisnummer: 123,
    plaats: 'Amsterdam'
  }
}