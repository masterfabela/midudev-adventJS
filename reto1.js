class Oveja {
  /**
   * @type {String}
   */
  name;
  /**
   * @type {String}
   */
  color;
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];

/**
 *
 * @param {Oveja[]} ovejas
 * @returns {Array}
 */
export default function contarOvejas(ovejas) {
  return ovejas.filter((oveja) => {
    return (
      oveja.color === 'rojo' &&
      oveja.name.toLowerCase().includes('n') &&
      oveja.name.toLowerCase().includes('a')
    );
  });
}

console.log(contarOvejas(ovejas));
