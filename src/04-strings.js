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

//Métodos principales de strings
const texto = "Hola Mundo";
console.log(texto.length); // Longitud de la cadena

console.log(texto.slice(0, 4)); // Devuelve una subcadena desde la posición 0 hasta la posición 4 (sin incluirla)
console.log(texto.slice(5)); // Devuelve la subcadena desde la posición 5 hasta el final
console.log(texto.slice(-5)); // Devuelve los últimos 5 caracteres

console.log(texto.substring(0, 4)); // Devuelve una subcadena desde la posición 0 hasta la posición 4 (sin incluirla)

console.log(texto.split(" ")); // Divide la cadena en un array de palabras utilizando un delimitador. En este caso, " " (espacio)

console.log(texto.trim()); // Elimina espacios en blanco al inicio y al final de la cadena
console.log(texto.trimStart()); // Elimina espacios en blanco al inicio de la cadena
console.log(texto.trimEnd()); // Elimina espacios en blanco al final de la cadena

console.log(texto.toUpperCase()); // Convierte a mayúsculas
console.log(texto.toLowerCase()); // Convierte a minúsculas

console.log(texto.includes("Mundo")); // Verifica si contiene una subcadena
console.log(texto.includes("JavaScript")); // Verifica si contiene una subcadena

console.log(texto.startsWith("Hola")); // Verifica si empieza con una subcadena
console.log(texto.endsWith("JavaScript")); // Verifica si termina con una subcadena

console.log(texto.replace("Mundo", "JavaScript")); // Reemplaza "Mundo" por "JavaScript"
console.log(texto.replaceAll("Mundo", "JavaScript")); // Reemplaza todas las apariciones de "Mundo" por "JavaScript"

console.log(texto.indexOf("Mundo")); // Devuelve la posición de la primera aparición de "Mundo"
console.log(texto.lastIndexOf("Mundo")); // Devuelve la posición de la última aparición de "Mundo"

console.log(texto.search("Mundo")); // Devuelve la posición de la primera aparición de "Mundo"

console.log(texto.charAt(0)); // Devuelve el carácter en la posición 0
console.log(texto.charCodeAt(0)); // Devuelve el código Unicode del carácter en la posición 0

console.log(texto.repeat(2)); // Repite la cadena 2 veces

console.log(texto.concat(" y ", "JavaScript")); // Concatena dos cadenas

