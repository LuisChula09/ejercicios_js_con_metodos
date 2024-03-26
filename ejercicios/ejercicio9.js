/*
Número de aes (letra "a")
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":
*/

const numeroDeAes = (word) => {
  let count = word.split("").filter((leter) => leter === "a").length;
  console.log(`La palabra '${word}' incluye ${count} veces la letra 'a'`);
};

numeroDeAes("Esta es una palabra");
