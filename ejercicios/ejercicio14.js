/*
14. Sumar arreglo entre el rango
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
*/

const sumarArreglo = (arr, posinit, posfinal) => {
  let numbersSum = [];
  arr.map((number, index) => {
    index >= posinit && index <= posfinal ? numbersSum.push(number) : " ";
  });
  const result = numbersSum.reduce((acc, val) => acc + val, 0);
  console.log(numbersSum);
  console.log(`La suma de los numeros del arreglo es ${result}`);
};

sumarArreglo([1, 19, 34, 22, 9, 87, 2, 3, 5, 6, 99], 2, 8);
