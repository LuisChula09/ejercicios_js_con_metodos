/*
8. Sumar rango de números
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
*/

const sumarRango = (number1, number2) => {
  let numbers = [];
  for (let i = number1; i <= number2; i++) numbers.push(i);

  const result = numbers.reduce((number, value) => number + value, 0);

  console.log(result);
};

sumarRango(1, 5);
