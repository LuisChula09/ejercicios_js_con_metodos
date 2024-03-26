/*
2. Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.
*/

const calcularImpuestos = (age, income) => {
  if (age >= 18 && income >= 1000) return income * 0.4;
  else return 0;
};

console.log(calcularImpuestos(18, 2000));
console.log(calcularImpuestos(25, 900));
console.log(calcularImpuestos(17, 1500));
console.log(calcularImpuestos(28, 2500));
