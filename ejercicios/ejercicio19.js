/*
19. Encontrar el número mínimo
Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

Nota: Intentarlo hacer sin el método Math.min de JavaScript.

*/

const min = (arr) => {
  let result = [];
  const numberMin = arr.map(function (number, index) {
    return { index: index, value: number };
  });
  numberMin.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  result = numberMin.map(function (number) {
    return arr[number.index];
  });
  console.log(result[0]);
};

min([1, 19, 34, 22, 9, 87, 2, 3, 5, 6, 99]);
