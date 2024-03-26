/*
3. IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/

const bmi = (weight, height) => {
  let imc = weight / (height * height);

  if (imc < 18.5)
    return `El indice de masa corporal es  ${imc} \n Bajo de peso`;
  else if (imc >= 18.5 && imc <= 24.9)
    return `El indice de masa corporal es  ${imc} \n Peso 'Normal'`;
  else if (imc >= 25 && imc <= 29.9)
    return `El indice de masa corporal es  ${imc} \n 'Sobrepeso'`;
  else if (imc >= 30) return `El indice de masa corporal es  ${imc} \n Obeso`;
};

console.log(bmi(55, 1.8));
console.log(bmi(70, 1.6));
console.log(bmi(80, 1.9));
console.log(bmi(120, 1.95));
