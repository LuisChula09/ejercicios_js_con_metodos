/*
20. Generar contraseña
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.
*/

const password = (string) => {
  let arr = string.toLowerCase().split("");
  let pass = "";
  arr.map((leter) => {
    switch (leter) {
      case "a":
        pass += 4;
        break;
      case "e":
        pass += 3;
        break;
      case "i":
        pass += 1;
        break;
      case "o":
        pass += 0;
        break;
      case " ":
        pass = pass;
        break;
      default:
        pass += leter;
        break;
    }
  });
  console.log(pass);
};

password("hola probando"); //h0l4 pr0b4nd0
password("Microsoft");
password("particulares");
password("cor res ponder	");
