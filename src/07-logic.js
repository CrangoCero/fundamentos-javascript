//Operadores lógicos

let r = true;
let s = false;
console.log("r = " + r);
console.log("s = " + s);
console.log(`AND lógico r && s = ${r && s}`); //AND lógico devuelve true si ambos operandos son true
console.log(`AND lógico s && r = ${s && r}`);
console.log(`AND lógico r && r = ${r && r}`);


console.log(`OR lógico r || s = ${r || s}`);//OR lógico devuelve true si al menos uno de los operandos es true
console.log(`OR lógico s || r = ${s || r}`);
console.log(`OR lógico r || r = ${r || r}`);

console.log(`NOT lógico !r = ${!r}`); //NOT lógico devuelve el valor contrario del operando
console.log(`NOT lógico !s = ${!s}`);
