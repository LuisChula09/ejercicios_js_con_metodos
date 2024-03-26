/*
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

*/

const validPassword = (password) => {
  if (password === "2Fj(jjbFsuj") return true;
  else if (password === "eoZiugBf&g9") return true;
  else return false;
};

console.log(validPassword("2Fj(jjbFsuj"));
console.log(validPassword("eoZiugBf&g9"));
console.log(validPassword("2Fj(jjbFsujeoZ"));
console.log(validPassword("nojdhges132"));
