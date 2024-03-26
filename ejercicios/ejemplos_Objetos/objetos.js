/* Se tienen dos objetos, el nombre de las propiedades es incorrecto, y el segundo objeto sus propiedades nombradas correctamente. Utilizando el metodo reduce 

//El proposito del metodo reduce es transformar un objeto a otro tipo de dato

*/

const persona = {
  nombre: "",
  apellidoP: "",
  apellidoM: "",
};

const person = {
  name: "",
  firstName: "",
  lastName: "",
};

const valueKey = {
  nombre: "name",
  apellidoP: "lastName",
  apellidoM: "firstName",
};
//1.Obtener llaves del arreglo a modificar

const personKeys = Object.keys(persona);

// utilizando el metodo reduce convertir el array obtenido de object.keys a un objeto
const obj = personKeys.reduce((acc, val) => {
  const currentKey = valueKey[val]; //se crea una constante la cual se encarga de guardar el valor actual del tercer arreglo, utilizando una prop dinamica, siendo 'val' el nombre de la llave actual
  const currentValue = persona[val]; //se crea esta constante para guardar el valor del elemento en el cual se esta iterando actualmente
  acc[currentKey] = currentValue; //

  return acc;
}, {});

console.log(obj);

/*
Se define el objeto persona con tres propiedades: nombre, apellidoP y apellidoM, todas inicializadas con cadenas vacías.

Se define el objeto person con tres propiedades: name, firstName y lastName, también inicializadas con cadenas vacías. Este objeto es donde queremos mapear las propiedades del objeto persona.

Se define el objeto valueKey, que actúa como un diccionario de mapeo. Mapea las propiedades de persona a las propiedades correspondientes de person. Por ejemplo, la propiedad nombre de persona se mapea a la propiedad name de person.

Se obtienen las claves del objeto persona utilizando Object.keys(persona). Esto devuelve un array con las claves del objeto persona: ["nombre", "apellidoP", "apellidoM"].

Se utiliza el método reduce en el array de claves obtenido anteriormente. reduce se utiliza para transformar el array de claves en un objeto donde las claves son las correspondientes en person y los valores son los valores asociados en persona.

En cada iteración de reduce, se toma la clave actual (val) del array de claves. Luego, se busca en el objeto valueKey la clave correspondiente (currentKey) que mapea la clave de persona a la clave de person.

Se asigna el valor de persona[val] a currentValue.

Se asigna currentValue al objeto acc utilizando la clave currentKey. Esto efectivamente mapea las propiedades de persona a las propiedades correspondientes de person.

Finalmente, se devuelve el objeto acc que contiene las propiedades de person con los valores correspondientes de persona.

El objeto resultante se imprime en la consola.

En resumen, este código toma un objeto persona, un objeto person con nombres de propiedades diferentes, y un objeto valueKey que mapea las propiedades de persona a las propiedades correspondientes de person. Luego, utiliza reduce para transformar el objeto persona en un objeto con las mismas propiedades que person, pero con los valores de persona.
*/
