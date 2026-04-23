//Strings
const nombre = "JavaScript";
const version = "ES6";
console.log(nombre, version);

//String concatenation
const mensaje = "Bienvenido a " + nombre + " versión " + version;
console.log(mensaje);

//Template literals

//Interpolación de variables
const mensajePlantilla = `Bienvenido(a) al curso de ${nombre} en su versión ${version}`;
console.log(mensajePlantilla);

//Expresiones dentro de template literals
const a = 5;
const b = 10;
console.log(`La suma de ${a} y ${b} es ${a + b}`);

//Multilínea con template literals
const multilinea = `Esta es una cadena
que se extiende en
múltiples líneas.`;
console.log(multilinea);
