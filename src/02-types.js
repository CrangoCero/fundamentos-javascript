//Tipos de datos en JavaScript

//Tipos primitivos
const texto = "Hola, mundo!"; //String
const numero = 10; //Number
const booleano = true; //Boolean
const nulo = null; //Null
const indefinido = undefined; //Undefined
const simbolo = Symbol("id"); //Symbol
const grande = 123456789n; //BigInt

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof grande);

//Tipos de datos complejos
const objeto = { nombre: "Juan", edad: 30 }; //Object
const arreglo = [1, 2, 3, 4, 5]; //Array
const funcion = function() { return "Hola"; }; //Function

console.log(typeof objeto);
console.log(typeof arreglo);
console.log(typeof funcion);