/*
4. Imprimir un arreglo
Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:
*/

const imprimirArreglo = (arr) => {
  arr.forEach((value) => {
    console.log(value);
  });
};

imprimirArreglo([2, "Hola", "Juan", "Mar", 6, 19.4, "Plato"]);
