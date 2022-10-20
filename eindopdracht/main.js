async function start() { 
  let fotos = await downloadFotos();

  // Schrijf je code hier, je kan de console.log weghalen
  console.log(fotos);
}

async function downloadFotos() {
  return fetch('https://xenn.at/codeo/images').then(res => res.json());
}

start();