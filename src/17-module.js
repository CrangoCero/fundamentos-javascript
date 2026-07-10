//ESM
//esto es un modulo de javascript, para poder usarlo en nodejs debemos agregar "type": "module" en el package.json

import { PI, add, subtract } from "./math.js";

console.log(PI);
console.log(add(1, 2));
console.log(subtract(4, 2));
