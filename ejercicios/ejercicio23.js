/*

23. Duplicar elementos de un arreglo
Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
*/

const duplicar = (arr) => {
  let numbersMultiplied = [];

  arr.map((number) => {
    numbersMultiplied.push(number * 2);
  });

  numbersMultiplied.map((number, index) => {
    console.log(
      `El numero '${arr[index]}' multiplicado por dos es : '${number}'`
    );
  });
  /*
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `El numero '${arr[i]}' multiplicado por dos es : '${numbersMultiplied[i]}'`
    );
  }
  */
};

duplicar([1, 2, 3, 4, 6, 12, 31, 23, 22, 43, 54, 12, 99, 81]);
