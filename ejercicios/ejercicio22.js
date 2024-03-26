/*
22. Encontrar posiciones de números pares
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.
*/

const posiciones = (arr) => {
  arr.map((number, index) => {
    number % 2 === 0
      ? console.log(`El numero '${number}' es par y su indice es '${index}'`)
      : "";
  });
};

posiciones([1, 2, 3, 4, 6, 12, 31, 23, 22, 43, 54, 12, 99, 81]);
