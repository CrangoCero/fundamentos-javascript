//Operadores de comparación Igualdad y desigualdad

//Igualdad débil (==) compara los valores después de realizar coerción de tipos si es necesario
let a = 10;
let b = "10";

console.log(`a = ${a}`);
console.log(`b = '${b}'`);
console.log(`a == b = ${a == b}`); // true, porque JavaScript convierte la cadena "10" a un número 10 antes de comparar los valores
console.log(`a != b = ${a != b}`); // false, porque JavaScript convierte la cadena "10" a un número 10 antes de comparar los valores

//Igualdad estricta (===) compara tanto el valor como el tipo de dato sin realizar coerción
console.log(`a === b = ${a === b}`); // false, porque aunque los valores son iguales, los tipos de datos son diferentes (number vs string)
console.log(`a !== b = ${a !== b}`); // true, porque aunque los valores son iguales, los tipos de datos son diferentes (number vs string)

