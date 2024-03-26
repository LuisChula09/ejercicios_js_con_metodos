/*
11. Sumar arreglo
Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

*/

const sumarArreglo = (arr) => {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  console.log(`La suma de todos los elementos del arreglo es : ${sum}`);
};

sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8]);
sumarArreglo([3, 7, 2, 12, 4, 6, 8, 5]);
sumarArreglo([6, 3, 1, 5, 7, 2, 8]);
sumarArreglo([7, 52, 2, 4, 3, 6, 1, 8]);
sumarArreglo([5, 8, 6, 3, 7, 31, 4, 2]);
