/*
12. Multiplicar arreglo
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/

const multiplicarArreglo = (arr) => {
  let result = 1;
  arr.map((number) => {
    result *= number;
  });

  console.log(
    `El resultado de multiplicar los elementos del arreglo es : ${result}`
  );
};

multiplicarArreglo([5, 3, 7, 1, 4, 2]); // result 840
multiplicarArreglo([4, 1, 2, 3]); // result 24
