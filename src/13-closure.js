//Closure
//Closure es la combinación de una función y el entorno léxico dentro del cual se declaró esa función. El entorno léxico consiste en cualquier variable que estaba dentro del alcance en el momento en que se creó la función. Esto permite que la función acceda a esas variables incluso después de que la función externa haya terminado de ejecutarse.

//En el siguiente ejemplo, la función crearCuentaBancaria crea un entorno léxico que incluye la variable saldo. Las funciones depositar y retirar pueden acceder a esta variable incluso después de que crearCuentaBancaria haya terminado de ejecutarse, lo que demuestra el concepto de closure.
function crearCuentaBancaria(saldoInicial) {
  let saldo = saldoInicial; // Esta variable es parte del entorno léxico de la función incrementar  y decrementar
  function depositar(cantidad) {
    saldo += cantidad;
    return `Depositaste $${cantidad}. Saldo actual: $${saldo}`;
  }
  function retirar(cantidad) {
    if (cantidad > saldo) {
      return `Fondos insuficientes. Saldo actual: ${saldo}`;
    }
    saldo -= cantidad;
    return `Retiraste $${cantidad}. Saldo actual: $${saldo}`;
  }
  return {
    depositar: depositar,
    retirar: retirar,
    saldo() {
      return `Saldo actual: ${saldo}`;
    },
  };
}

const cuentaBancaria = crearCuentaBancaria(1000);

console.log(cuentaBancaria.saldo());
console.log(cuentaBancaria.depositar(500));
console.log(cuentaBancaria.retirar(200));
console.log(cuentaBancaria.retirar(1500));
