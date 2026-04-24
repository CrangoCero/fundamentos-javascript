//Funciones
//La función saludar toma un parámetro llamado nombre y devuelve un mensaje de saludo personalizado utilizando una plantilla de cadena (template string).
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

mensaje = saludar("Cristian");
mensaje2 = saludar("Laura");

console.log(mensaje, mensaje2);

//parametros y argumentos
//Los parámetros son las variables declaradas en la definición de la función, mientras que los argumentos son los valores que se pasan a la función cuando se llama. En el ejemplo anterior, "nombre" es un parámetro, y "Cristian" y "Laura" son argumentos que se pasan a la función saludar cuando se llama. Los argumentos son opcionales, si no se pasan, el valor del parámetro será undefined

console.log(saludar()); // Esto imprimirá "Hola, undefined!" porque no se ha pasado ningún argumento a la función saludar.

//La función sumar toma dos parámetros, a y b, y devuelve la suma de ambos.
function sumar(a, b) {
  return a + b;
}

resultado = sumar(5, 10);
console.log(`La suma de 5 y 10 es ${resultado}`);

//La función esMayorDeEdad toma un parámetro edad y devuelve true si la edad es mayor o igual a 18, y false en caso contrario.
function esMayorDeEdad(edad) {
  return edad >= 18;
}
console.log(`¿Es mayor de edad una persona de 20 años? ${esMayorDeEdad(20)}`);
console.log(`¿Es mayor de edad una persona de 16 años? ${esMayorDeEdad(16)}`);

//arrow functions
//Las arrow functions son una forma más concisa de escribir funciones en JavaScript. Se definen utilizando la sintaxis de flecha (=>) y no tienen su propio contexto de this, lo que las hace útiles para funciones anónimas o funciones que se utilizan como callbacks.

//En este caso, la función multiplicar se ha reescrito como una arrow function, lo que hace que el código sea más conciso y fácil de leer. La función toma dos parámetros, a y b, y devuelve el resultado de multiplicarlos.
const multiplicar = (a, b) => a * b;
console.log(`La multiplicación de 5 y 10 es ${multiplicar(5, 10)}`);

//La función saludar también se ha reescrito como una arrow function, lo que hace que el código sea más conciso y fácil de leer. La función toma un parámetro nombre y devuelve un mensaje de saludo personalizado utilizando una plantilla de cadena (template string).
const saludacion = (nombre) => `Hola, ${nombre}!`;
console.log(saludacion("Cristian"));

//En este caso, la función esMayorDeEdad se ha reescrito como una arrow function, lo que hace que el código sea más conciso y fácil de leer.
const esMenorDeEdad = (edad) => edad < 18;
console.log(`¿Es menor de edad una persona de 20 años? ${esMenorDeEdad(20)}`);
console.log(`¿Es menor de edad una persona de 16 años? ${esMenorDeEdad(16)}`);

//Funciones con parámetros por defecto
const crearSaludo = (nombre, saludo = "Hola") => {
  return {
    saludo,
    nombre,
    creado: Date.now(),
  };
};

const saludo1 = crearSaludo("Cristian", "¡Bienvenido!");
const saludo2 = crearSaludo("Laura");
console.log(saludo1, saludo2);
