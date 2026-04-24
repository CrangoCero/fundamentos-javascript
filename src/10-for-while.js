//Bucles

//For
//El bucle for se compone de tres partes: la inicialización, la condición y la actualización. En este caso, se inicializa la variable i en 0, se establece la condición de que i sea menor que 5, y se incrementa i en 1 en cada iteración.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//El bucle for también se puede utilizar para iterar sobre los elementos de un array. En este caso, se utiliza la propiedad length del array para establecer la condición del bucle, y se accede a cada elemento del array utilizando su índice.
const numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
  console.log(`Número en el índice ${i} es ${numeros[i]}`);
}

//for...of
//El bucle for...of se utiliza para iterar sobre los elementos de un iterable, como un array. En este caso, se itera directamente sobre los elementos del array sin necesidad de utilizar un índice.
for (const numero of numeros) {
  console.log(`Número es ${numero}`);
  if (numero === 30) {
    console.log("¡Encontré el número 30!");
    break; // El bucle se detiene cuando se encuentra el número 30
  }
}

//for...in
//El bucle for...in se utiliza para iterar sobre las propiedades de un objeto. En este caso, se itera directamente sobre las propiedades del objeto sin necesidad de utilizar un índice.
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};
for (const propiedad in persona) {
  console.log(`Propiedad: ${propiedad}, Valor: ${persona[propiedad]}`);
}

//While
//El bucle while se ejecuta mientras la condición sea verdadera. En este caso, se inicializa la variable j en 0, y se ejecuta el bloque de código mientras j sea menor que 5.
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

//do...while
//El bucle do...while se ejecuta al menos una vez, ya que la condición se evalúa después de ejecutar el bloque de código. En este caso, se inicializa la variable k en 0, y se ejecuta el bloque de código mientras k sea menor que 5.
let k = 0;
do {
  k++;
  console.log(k);
} while (k < 5);
