/*
18. Encontrar el número máximo
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.

*/
const max = (arr) => {
  let result = [];
  const orderList = arr.map(function (number, index) {
    return { index: index, value: number };
  });
  orderList.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  result = orderList.map(function (number) {
    return arr[number.index];
  });

  let pos = arr.length;
  console.log(result[pos - 1]);
};

max([1, 19, 34, 22, 9, 87, 2, 3, 5, 6, 99]);
