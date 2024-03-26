/*
5. Número de Likes
Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.
*/

/*
para realizar esta funcion se investigo el metodo to fixed 
valor.toFixed([digitos])
 donde 'valor' es el numero que se recibe en la funcion
 '.tofixed' es un metodo que formatea un numero usando una notación de punto fijo
*/

const likes = (number) => {
  if (number < 1000) return `El numero de likes es ${number.toString()}`;
  else if (number >= 1000 && number < 1000000)
    return `El numero de likes es ${(number / 1000).toFixed(0)}K`;
  else return `El numero de likes es  ${(number / 1000000).toFixed(1)}M`;
};

console.log(likes(950));
console.log(likes(1001));
console.log(likes(24560));
console.log(likes(99999));
console.log(likes(2345678));
