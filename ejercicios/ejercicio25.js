/*

25. Encontrar palabras que terminan en "s"
Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).
*/

const terminaConS = (arr) => {
  let allWordsEndS = [];
  arr.map((word) => {
    if (word.charAt(word.length - 1).toLowerCase() === "s") {
      allWordsEndS.push(word);
    }
  });
  console.log(
    `Las palabras que terminan con 's' del arreglo son : '${allWordsEndS}'`
  );
};

terminaConS([
  "Casa",
  "Gatos",
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

terminaConS([
  "Gatos",
  "Perros",
  "Árboles",
  "Azules",
  "Cantares",
  "Correr",
  "Libros",
  "Pájaros",
  "Juegos",
  "Flores",
  "Caminar",
  "Luz",
  "Oscuro",
  "Verano",
  "Invierno",
]);

terminaConS([
  "Montañas",
  "Mares",
  "Ríos",
  "Amaneceres",
  "Nadar",
  "Correr",
  "Luna",
  "Sol",
  "Flores",
  "Jugar",
  "Bosques",
  "Música",
  "Aire",
  "Nubes",
  "Atardeceres",
]);
