export default function sumPairs(numbers, result) {
  let resultado;
  numbers.forEach((numeroLento, indiceLento) => {
    if (!resultado) {
      numbers.forEach((numeroRapido, indiceRapido) => {
        if (indiceLento != indiceRapido) {
          if (numeroLento + numeroRapido === result) {
            resultado = [numeroLento, numeroRapido];
          }
        }
      });
    }
  });
  return resultado || null;
}

console.log(sumPairs([3, 5, 7, 2], 10));
