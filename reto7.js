const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};

const test = {
  prop1: 'pantalon',
  prop2: 'camisa',
  prop3: {
    prop1: {
      prop3: 'camiseta',
    },
  },
};

console.log(hasCamiseta(test));

function hasCamiseta(object) {
  let tieneCamiseta = false;
  let values = Object.values(object);
  if (values.includes('camiseta')) {
    tieneCamiseta = true;
  } else {
    values.forEach((value) => {
      if (typeof value === 'object') {
        if (hasCamiseta(value)) {
          tieneCamiseta = true;
        }
      }
    });
  }
  return tieneCamiseta;
}

/**
 *
 * @param {Object} store
 * @param {String} product
 * @returns
 */
export default function contains(store, product) {
  let hasProduct = false;
  let values = Object.values(store);
  if (values.includes(product)) {
    hasProduct = true;
  } else {
    values.forEach((value) => {
      if (typeof value === 'object') {
        if (contains(value, product)) {
          hasProduct = true;
        }
      }
    });
  }
  return hasProduct;
}

console.log(contains(almacen, 'camiseta'));
