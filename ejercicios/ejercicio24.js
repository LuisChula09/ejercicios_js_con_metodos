/*
24. Encontrar palabras que empiecen por "a"
Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

*/

const empiezaConA = (arr) => {
  let allWordsA = [];
  arr.map((word) => {
    if (word.substring(0, 1).toLowerCase() === "a") {
      allWordsA.push(word);
    }
  });
  console.log(`Arreglo con las palabras que inician con a : '${allWordsA} '`);
};

empiezaConA([
  "Casa",
  "Gato",
  "Perro",
  "Árbol",
  "Azul",
  "Amarillo",
  "Bailar",
  "Comer",
  "Azúcar",
  "Saltar",
  "Volar",
  "Arcoíris",
  "Estrella",
  "Aplaudir",
  "Cantar",
]);

empiezaConA([
  "Montaña",
  "Mar",
  "Río",
  "Amanecer",
  "Nadar",
  "Correr",
  "Luna",
  "Sol",
  "Flor",
  "Jugar",
  "Bosque",
  "Música",
  "Aire",
  "Nube",
  "Atardecer",
]);

empiezaConA([
  "Playa",
  "Arena",
  "Bailar",
  "Reír",
  "Comida",
  "Cantar",
  "Luz",
  "Oscuro",
  "Verano",
  "Invierno",
  "Abrigo",
  "Azul",
  "Rosa",
  "Aventura",
  "Amigo",
]);

empiezaConA([
  "Fuego",
  "Volar",
  "Saltar",
  "Aire",
  "Hielo",
  "Aroma",
  "Caminar",
  "Nadar",
  "Cantar",
  "Comer",
  "Abrir",
  "Cerrar",
  "Amar",
  "Abrazar",
  "Admirar",
]);
