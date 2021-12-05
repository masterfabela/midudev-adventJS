function crearGuionesCapa(altura, nCapa) {
  let guiones = '';
  for (let i = 0; i < altura - nCapa; i++) {
    guiones += '_';
  }
  return guiones;
}

function crearTronco(altura) {
  const guionesCapa1 = crearGuionesCapa(altura, 1);
  const tronco =
    guionesCapa1 +
    '#' +
    guionesCapa1 +
    '\n' +
    guionesCapa1 +
    '#' +
    guionesCapa1;
  return tronco;
}

function crearAsteriscos(asteriscosAnteriorCapa) {
  let asteriscos = '';
  if (asteriscosAnteriorCapa === 0) {
    return '*';
  }
  for (let i = 0; i < asteriscosAnteriorCapa + 2; i++) {
    asteriscos += '*';
  }
  return asteriscos;
}

function crearCapa(altura, nCapa, asteriscosAnteriorCapa) {
  console.log(asteriscosAnteriorCapa);
  return (
    crearGuionesCapa(altura, nCapa) +
    crearAsteriscos(asteriscosAnteriorCapa) +
    crearGuionesCapa(altura, nCapa) +
    '\n'
  );
}

export default function createXmasTree(height) {
  let numeroCapaActual = 1;
  let arbol = '';
  let capaAnterior = '';
  while (numeroCapaActual <= height) {
    capaAnterior = crearCapa(
      height,
      numeroCapaActual,
      capaAnterior.split('').filter((char) => char === '*').length
    );
    arbol += capaAnterior;
    numeroCapaActual++;
  }
  arbol = arbol + crearTronco(height);
  return arbol;
}

console.log(createXmasTree(7));
