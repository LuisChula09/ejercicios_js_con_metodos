/*
6. FizzBuzz
Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
// escribe tu respuesta acá
*/
/*
const fizzBuzz = (number) => {
  let result = "";
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      result += "fizz";
      if (i % 5 === 0) result += "buzz";
    } else if (i % 5 === 0) {
      result += "buzz";
    } else {
      result += i;
    }
    result += "\n";
  }
  return result;
};
*/

//console.log(fizzBuzz(3));

const fizzBuzz2 = (number) => {
  let numbers = [];
  for (let i = 1; i <= number; i++) numbers.push(i);

  numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) console.log("fizzBuzz");
    else if (num % 3 === 0) console.log("fizz");
    else if (num % 5 === 0) console.log("buzz");
    else console.log(num);
  });
};
fizzBuzz2(50);
