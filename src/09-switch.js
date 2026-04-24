//Estructuras de control de flujo condicional

//Switch

const dia = "lunes";
//El switch evalúa la expresión y ejecuta el bloque de código correspondiente al caso que coincida con el valor de la expresión
switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
  case "viernes":
    console.log("Hoy es un día laborable");
    break;
  case "sábado":
  case "domingo":
    console.log("Hoy es fin de semana");
    break;
  default:
    console.log("No es un día válido");
}
