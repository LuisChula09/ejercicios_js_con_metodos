/*
5. Transcribir ADN a ARN
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U

*/

const transcribir = (string) => {
  let complement = "";
  let arr = string.toUpperCase().split("");
  console.log(arr);
  /*
  arr.forEach(function (leter) {
    leter === "G" ? newarr.push("C") : newarr.push(leter);
    leter === "C" ? newarr.push("G") : newarr.push(leter);
    leter === "T" ? newarr.push("A") : newarr.push(leter);
    leter === "A" ? newarr.push("U") : newarr.push(leter);
  });*/

  arr.map((leter) => {
    switch (leter) {
      case "G":
        complement += "C";
        break;
      case "C":
        complement += "G";
        break;
      case "T":
        complement += "A";
        break;
      case "A":
        complement += "U";
        break;
      case " ":
        complement = complement;
        break;
      default:
        complement += leter;
        break;
    }
  });
  console.log(complement);
};

transcribir("GCTAGATC"); // CGAUCUAG
transcribir("acta nueva"); // UGAUNUEVU
