/*

27. Traducir números a palabras
Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
*/

const numerosAPalabras = (arr) => {
  let word = "";
  const leters = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    z,
  ];

  arr.map((number, index) => {
    if (number[index] === leters[index]) word += number;
  });
};

numerosAPalabras([
  3, 7, 15, 22, 11, 8, 9, 2, 18, 5, 20, 13, 4, 16, 6, 19, 1, 23, 14, 12, 10, 21,
  17, 24,
]);
numerosAPalabras([
  12, 22, 9, 5, 1, 17, 8, 19, 14, 11, 4, 23, 20, 10, 6, 16, 3, 2, 13, 21, 18,
  24, 15, 7,
]);
numerosAPalabras([
  24, 18, 4, 13, 9, 21, 15, 5, 8, 11, 6, 20, 2, 16, 14, 3, 10, 12, 1, 19, 23,
  17, 22, 7,
]);
