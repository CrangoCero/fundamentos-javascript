//Array
//Un array es una estructura de datos que puede contener una colección de elementos, cada uno identificado por un índice. En JavaScript, los arrays son objetos que pueden almacenar cualquier tipo de dato, incluyendo números, cadenas de texto, objetos e incluso otros arrays. Los arrays son dinámicos, lo que significa que pueden crecer o reducir su tamaño según sea necesario.

//Creación de un array
//Se puede crear un array utilizando la palabra clave new y el constructor Array.
const array = new Array('hola', 'mundo', 1, 2, 3, true, null, undefined);
console.log(array); // Output: ["hola", "mundo", 1, 2, 3, true, null, undefined]

//El constructor Array también se puede utilizar para crear un array vacío o con una longitud específica.
const arrayVacio = new Array();
console.log(arrayVacio); // Output: []

//Crear un array con una longitud específica
const arrayConLongitud = new Array(5);
console.log(arrayConLongitud); // Output: [undefined, undefined, undefined, undefined, undefined]

//También se puede crear un array utilizando la sintaxis de corchetes [].
const frutas = ["manzana", "banana", "naranja"];
const numeros = [1, 2, 3, 4, 5];
const mix = [1, "hola", true, null, undefined];
console.log(frutas); // Output: ["manzana", "banana", "naranja"]
console.log(numeros); // Output: [1, 2, 3, 4, 5]
console.log(mix); // Output: [1, "hola", true, null, undefined]

//El método push() se utiliza para agregar uno o más elementos al final de un array. Este método modifica el array original y devuelve la nueva longitud del array.
frutas.push("uva");
console.log(frutas); // Output: ["manzana", "banana", "naranja", "uva"]

//El método unshift() se utiliza para agregar uno o más elementos al inicio de un array. Este método modifica el array original y devuelve la nueva longitud del array.
frutas.unshift("fresa");
console.log(frutas); // Output: ["fresa", "manzana", "banana", "naranja", "uva"]

//El método splice() se utiliza para eliminar elementos de un array. El primer argumento es el índice desde donde se comenzará a eliminar, y el segundo argumento es la cantidad de elementos a eliminar.
frutas.splice(2, 1);
console.log(frutas); // Output: ["fresa", "manzana", "naranja", "uva"]

//El método splice() también se puede utilizar para agregar elementos a un array. El primer argumento es el índice desde donde se comenzará a agregar, el segundo argumento es la cantidad de elementos a eliminar (en este caso, 0), y los argumentos restantes son los elementos que se agregarán.
frutas .splice(1, 2, "kiwi", "melón");
console.log(frutas); // Output: ["fresa", "kiwi", "melón", "uva"]

//Acceso a elementos de un array
//Se puede acceder a los elementos de un array utilizando su índice. El índice de un array comienza en 0, lo que significa que el primer elemento tiene un índice de 0, el segundo elemento tiene un índice de 1, y así sucesivamente.
console.log(frutas[0]); // Output: "fresa"
console.log(frutas[1]); // Output: "kiwi"
console.log(frutas[2]); // Output: "melón"
console.log(frutas[3]); // Output: "uva"

//Modificación de elementos de un array
//Se pueden modificar los elementos de un array utilizando su índice.
const primerFruta = frutas[0];
frutas[0] = "cereza";
console.log(primerFruta); // Output: "fresa"
console.log(frutas); // Output: ["cereza", "kiwi", "melón", "uva"]

//El método shift() se utiliza para eliminar el primer elemento de un array. Este método modifica el array original y devuelve el elemento eliminado.
const primerFrutaEliminada = frutas.shift();
console.log(primerFrutaEliminada); // Output: "cereza"
console.log(frutas); // Output: ["kiwi", "melón", "uva"]

//El método pop() se utiliza para eliminar el ultimo elemento de un array. Este método modifica el array original y devuelve el elemento eliminado.
const ultimoFruta = frutas.pop();
console.log(ultimoFruta); // Output: "uva"
console.log(frutas); // Output: ["kiwi", "melón"]

//El método reverse() se utiliza para invertir el orden de los elementos de un array. Este método modifica el array original y devuelve el array invertido.
frutas.reverse();
console.log(frutas); // Output: ["melón", "kiwi"]

//El método sort() se utiliza para ordenar los elementos de un array. Este método modifica el array original y devuelve el array ordenado.
frutas.sort();
console.log(frutas); // Output: ["kiwi", "melón"]