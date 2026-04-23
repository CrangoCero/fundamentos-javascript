//coercion: conversión de un tipo de dato a otro

//coercion implícita
let a = 5;
let b = "10";
console.log(`a = ${a}`);
console.log(`b = '${b}'`);
let c = a + b;

console.log(`a + b = ${c}`);//En este caso, JavaScript convierte el número 5 a una cadena "5" y luego concatena las dos cadenas, resultando en "510".
console.log(`b - a = ${b - a}`);//En este caso, JavaScript convierte la cadena "10" a un número 10 y luego realiza la resta, resultando en 5.
console.log(`true + a = ${true + a}`);//En este caso, JavaScript convierte el valor booleano true a un número 1 y luego realiza la suma, resultando en 6.
console.log(`a + false = ${a + false}`);//En este caso, JavaScript convierte el valor booleano false a un número 0 y luego realiza la suma, resultando en 5.

//coercion explícita
let d = 5;
let e = "10";
let f = Number(e);//En este caso, la función Number() convierte la cadena "10" a un número 10.
let g = parseInt(e);//En este caso, la función parseInt() también convierte la cadena "10" a un número 10.
console.log(`d = ${d}`);
console.log(`e = '${e}'`);
console.log(`f = Number(e) = ${f}`);
console.log(`g = parseInt(e) = ${g}`);
console.log(` typeof f = ${typeof f}`  );// typeof f = number
console.log(` typeof g = ${typeof g}`  );// typeof g = number
console.log(`d + f = ${d + f}`);
console.log(`d + g = ${d + g}`);

let floatString = "3.14159";
let floatNumber = parseFloat(floatString);
console.log(`floatString = '${floatString}'`);
console.log(`floatNumber = parseFloat(floatString) = ${floatNumber}`);
console.log(` typeof floatNumber = ${typeof floatNumber}`  );// typeof floatNumber = number

let h = String(d);//En este caso, la función String() convierte el número 5 a una cadena "5".
console.log(`h = String(d) = '${h}'`);
console.log(` typeof h = ${typeof h}`  );// typeof h = string
console.log(`h + e = ${h + e}`);//En este caso, JavaScript concatena las dos cadenas, resultando en "510".

let i = Boolean(d);//En este caso, la función Boolean() convierte el número 5 a true.
console.log(`i = Boolean(d) = ${i}`);
console.log(` typeof i = ${typeof i}`  );// typeof i = boolean



