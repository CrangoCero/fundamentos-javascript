//Scope

//Global Scope
//Las variables declaradas fuera de cualquier bloque de código son consideradas variables globales y pueden ser accedidas desde cualquier parte de la aplicación.

const variableGlobal = "Soy una variable global";

function mostrarVariableGlobal() {
  console.log(variableGlobal); // Esto imprimirá "Soy una variable global"
  const variableLocal = "Soy una variable local";
  console.log(variableLocal); // Esto imprimirá "Soy una variable local"
  if (true) {
    const variableBloque = "Soy una variable de bloque";
    console.log(variableBloque); // Esto imprimirá "Soy una variable de bloque"
  }
}

mostrarVariableGlobal();
