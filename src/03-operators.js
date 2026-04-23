//Operadores

//Operadores Aritméticos
let a = 10;
let b = 5;

console.log(" a = " + a);
console.log(" b = " + b);
console.log(" Suma a + b = " + (a + b)); //Suma
console.log(" Resta a - b = " + (a - b)); //Resta
console.log(" Multiplicación a * b = " + a * b); //Multiplicación
console.log(" División a / b = " + a / b); //División
console.log(" Módulo a % b = " + (a % b)); //Modulo
console.log(" Exponenciación a ** b = " + a ** b); //Exponenciación

//Operadores de Asignación
let c = 10;
console.log(" c = " + c);
c += 5; //Suma y asigna c = c + 5
console.log(" Suma y asigna c += 5 = " + c);
let d = 10;
console.log(" d = " + d);
d -= 5; //Resta y asigna d = d - 5
console.log(" Resta y asigna d -= 5 = " + d);
let e = 10;
console.log(" e = " + e);
e *= 5; //Multiplicación y asigna e = e * 5
console.log(" Multiplicación y asigna e *= 5 = " + e);
let f = 10;
console.log(" f = " + f);
f /= 5; //División y asigna f = f / 5
console.log(" División y asigna f /= 5 = " + f);
let g = 10;
console.log(" g = " + g);
g %= 3; //Modulo y asigna g = g % 3
console.log(" Módulo y asigna g %= 3 = " + g);
let h = 10;
console.log(" h = " + h);
h **= 5; //Exponenciación y asigna h = h ** 5
console.log(" Exponenciación y asigna h **= 5 = " + h);

//Operadores de incremento y decremento
let i = 10;
console.log(" i = " + i);
i++; //Incremento i = i + 1
console.log(" Incremento i++ = " + i);

let j = 10;
console.log(" j = " + j);
j--; //Decremento j = j - 1
console.log(" Decremento j-- = " + j);

//Operadores especiales

let k = 1 / 0; //División por cero da como resultado Infinity
console.log("k = 1 / 0 = " + k);
let l = -1 / 0; //División por cero da como resultado -Infinity
console.log("l = -1 / 0 = " + l);
let m = 0 / 0; //División de cero por cero da como resultado NaN (Not a Number)
console.log("m = 0 / 0 = " + m);

//Operadores de comparación
let n = 10;
let o = 5;
console.log("n = " + n);
console.log("o = " + o);
console.log("Mayor que n > o = " + (n > o)); //Mayor que
console.log("Menor que n < o = " + (n < o)); //Menor que
console.log("Mayor o igual que n >= o = " + (n >= o)); //Mayor o igual que
console.log("Menor o igual que n <= o = " + (n <= o)); //Menor o igual que
console.log("Igual que n == o = " + (n == o)); //Igual que
console.log("Diferente que n != o = " + (n != o)); //Diferente que

//Operadores de igualdad estricta
let p = 10;
let q = "10";
console.log("p = " + p);
console.log("q = '" + q + "'");
console.log("Igualdad estricta p === q = " + (p === q)); //Igualdad estricta compara valor y tipo
console.log("Desigualdad estricta p !== q = " + (p !== q)); //Desigualdad estricta compara valor y tipo no iguales

//Operadores lógicos
let r = true;
let s = false;
console.log("r = " + r);
console.log("s = " + s);
console.log("AND lógico r && s = " + (r && s)); //AND lógico devuelve true si ambos operandos son true
console.log("OR lógico r || s = " + (r || s)); //OR lógico devuelve true si al menos uno de los operandos es true
console.log("NOT lógico !r = " + !r); //NOT lógico devuelve el valor contrario del operando