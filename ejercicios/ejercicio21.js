/*
21. Encontrar números pares en un arreglo
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.
*/

const pares = (arr) => {
  let numberspair = [];
  arr.map((number) => {
    number % 2 === 0 ? numberspair.push(number) : "";
  });
  console.log(numberspair);
};

pares([1, 2, 3, 4, 6, 12, 31, 23, 22, 43, 54, 12, 99, 81]);
