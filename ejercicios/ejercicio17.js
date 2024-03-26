/*
17. Capitalizar cada palabra
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

*/

const capitalizar = (string) => {
  let words = string.split(" ");
  console.log(`La cadena original es '${string}'`);
  console.log("");
  words.map((word) => {
    console.log(
      `La primera letra de la palabra '${word}' es : '${word.charAt(0)}'`
    );
  });
};

capitalizar(
  "La vida debe ser comprendida hacia atrás. Pero debe ser vivida hacia delante"
);
