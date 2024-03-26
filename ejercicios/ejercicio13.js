/*
Remover ceros
Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
*/

const removerCeros = (arr) => {
  let arraynotZero = [];

  arraynotZero = arr.filter((number) => number !== 0);
  arraynotZero.map((num) => {
    console.log(num);
  });
};

removerCeros([0, 1, 2, 3, 0, 5, 6, 12, 8, 0, 0, 34, 0, 21]);
