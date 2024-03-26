/*
10. Número de caracteres
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

*/

const numeroDeCaracteres = (word, chart) => {
  let count = word.split("").filter((leter) => leter === chart).length;
  console.log(
    `La palabra '${word}' incluye ${count} veces la letra '${chart}'`
  );
};

numeroDeCaracteres("Esta es una palabra", "e");
numeroDeCaracteres(
  "La vida no se ha hecho para comprenderla, sino para vivirla",
  "o"
);
numeroDeCaracteres(
  "La vida consiste no en tener buenas cartas, sino en jugar bien las que uno tiene",
  "s"
);
