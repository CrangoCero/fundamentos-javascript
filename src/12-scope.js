//Scope
//El alcance de las variables en JavaScript se divide en dos tipos: global, local y de bloque. El scope determina la accesibilidad de las variables en diferentes partes del código.

//Global Scope
//Las variables declaradas fuera de cualquier bloque de código son consideradas variables globales y pueden ser accedidas desde cualquier parte de la aplicación.

//Local Scope
//Las variables declaradas dentro de un bloque de código son consideradas variables locales y solo pueden ser accedidas dentro de ese bloque.

//Block Scope
//Las variables declaradas con let o const dentro de un bloque de código (como un if, for, while, etc.) son consideradas variables de bloque y solo pueden ser accedidas dentro de ese bloque.



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
