//Objetos
//Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, lo que se conoce como un método.
//Se puede crear un objeto utilizando la palabra clave new y el constructor Object.
const persona = new Object();
persona.nombre = "Juan";
persona.edad = 30;
console.log(persona); // Output: { nombre: "Juan", edad: 30 }

//También se puede crear un objeto utilizando la sintaxis de llaves {}. Esto crea un objeto vacío.
//Crear un objeto con propiedades
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  color: "Rojo",
  año: 2020,
};

console.log(coche); // Output: { marca: "Toyota", modelo: "Corolla", color: "Rojo", año: 2020 }
console.log(coche.marca); // Output: "Toyota"
console.log(coche["modelo"]); // Output: "Corolla"
const color = coche.color;
console.log(color); // Output: "Rojo"
//El operador de acceso a propiedades (.) se utiliza para acceder a las propiedades de un objeto.
//El operador de acceso a propiedades también se puede utilizar para acceder a las propiedades de un objeto anidado.
//El operador de encadenamiento opcional (?.) se utiliza para acceder a las propiedades de un objeto de forma segura. Si la propiedad no existe, devuelve undefined en lugar de lanzar un error.
console.log(coche.propietario?.nombre); // Output: undefined

//La destructuración de objetos es una expresión de JavaScript que permite extraer datos de objetos y asignarlos a variables de una manera más concisa y legible.
const { marca, modelo, color: colorCoche } = coche;
console.log(marca); // Output: "Toyota"
console.log(modelo); // Output: "Corolla"
console.log(colorCoche); // Output: "Rojo"

//El operador de propagación (...) se utiliza para copiar los elementos de un array o un objeto a otro array o objeto.
const coche2 = { ...coche };
console.log(coche2); // Output: { marca: "Toyota", modelo: "Corolla", color: "Rojo", año: 2020 }

//El operador de propagación también se puede utilizar para modificar las propiedades de un objeto al copiarlo.
const coche3 = { ...coche, marca: "Honda" };
console.log(coche3); // Output: { marca: "Honda", modelo: "Corolla", color: "Rojo", año: 2020 }

//Object.keys() se utiliza para obtener un array de las claves de un objeto.
const clavesCoche = Object.keys(coche);
console.log(clavesCoche); // Output: ["marca", "modelo", "color", "año"]

//Object.values() se utiliza para obtener un array de los valores de un objeto.
const valoresCoche = Object.values(coche);
console.log(valoresCoche); // Output: ["Toyota", "Corolla", "Rojo", 2020]

//Object.entries() se utiliza para obtener un array de pares clave-valor de un objeto.
const entradasCoche = Object.entries(coche);
console.log(entradasCoche); // Output: [["marca", "Toyota"], ["modelo", "Corolla"], ["color", "Rojo"], ["año", 2020]]