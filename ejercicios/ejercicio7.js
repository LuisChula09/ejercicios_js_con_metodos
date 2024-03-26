/*
7. Contar rango de números
Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.
*/

const contarRango = (number) => {
  let arrayNumbers = [];
  for (let i = 0; i < number; i++) arrayNumbers.push(i);
  console.log(`Longitud inicial del arreglo : ${arrayNumbers.length}`);
  console.log(`Arreglo inicial ${arrayNumbers}`);
  arrayNumbers.shift();
  arrayNumbers.pop();

  console.log(
    `longitud del arreglo despues de eliminar la primera y ultima posición ${arrayNumbers.length}`
  );
  arrayNumbers.map((num) => {
    console.log(`${num}`);
  });
};

contarRango(12);
