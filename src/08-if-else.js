//Estructuras de control condicionales

//if-else

const edad = 18;
if (edad >= 19) {
  //Si la condición es verdadera se ejecuta el bloque de código dentro del if
  console.log("Es mayor de edad");
} else if (edad === 18) {
  //Si la condición del if es falsa, se evalúa la condición del else if
  console.log("Tienes 18");
} else {
  console.log("Es menor de edad");
}
