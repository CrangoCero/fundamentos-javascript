//Métodos de orden superior
//Un método de orden superior es una función que toma otra función como argumento o devuelve una función como resultado. Los métodos de orden superior son una característica fundamental de la programación funcional y se utilizan para crear funciones más flexibles y reutilizables.
//Ejemplo de un método de orden superior que toma una función como argumento

//El método map() es un método de orden superior que se utiliza para crear un nuevo array con los resultados de la llamada a una función proporcionada aplicada a cada elemento del array.

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((numero) => numero * numero);
console.log(cuadrados); // Output: [1, 4, 9, 16, 25]

const personas = [
  {
    nombre: "Juan",
    edad: 30,
  },
  {
    nombre: "María",
    edad: 25,
  },
  {
    nombre: "Pedro",
    edad: 35,
  },
];

console.log(personas); // Output: [{ nombre: "Juan", edad: 30 }, { nombre: "María", edad: 25 }, { nombre: "Pedro", edad: 35 }]
const nombres = personas.map((persona) => persona.nombre); // Output: ["Juan", "María", "Pedro"]
console.log(nombres);

const personasFecha = personas.map((persona) => ({
  ...persona,
  fecha: Date.now(),
}));
console.log(personasFecha); // Output: [Wed Jan 01 2020 00:00:00 GMT+0000 (Coordinated Universal Time), Mon Feb 15 2021 00:00:00 GMT+0000 (Coordinated Universal Time), Wed Mar 30 2022 00:00:00 GMT+0000 (Coordinated Universal Time)]

//Filter es otro método de orden superior que se utiliza para crear un nuevo array con todos los elementos que cumplen una condición especificada en una función proporcionada.

const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // Output: [2, 4]

const personasMayores = personas.filter((persona) => persona.edad > 30);
console.log(personasMayores); // Output: [{ nombre: "Pedro", edad: 35 }]
  
