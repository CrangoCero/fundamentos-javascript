// Async
// es un concepto en programación que permite que ciertas operaciones se ejecuten de manera no bloqueante, lo que significa que el programa puede continuar ejecutándose mientras espera que la operación asíncrona se complete. Esto es especialmente útil para operaciones que pueden tardar un tiempo en completarse, como solicitudes de red, lectura de archivos o temporizadores.

console.log("Async code execution started");

// Simulamos una operación asíncrona con setTimeout
setTimeout(() => {
  console.log("Async code execution completed after 2 seconds");
}, 2000);

console.log("Async code execution ended");

//Callbacks
//es una función que se pasa como argumento a otra función y se ejecuta después de que la operación asíncrona se complete.

/**
 * Simula la obtención de datos de manera asíncrona y llama a un callback con los datos obtenidos.
 *
 * @param {*} callback
 */
function getData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 2000);
}

getData((data) => {
  console.log("Data received:", data);
});

//Callbacks Hell
//es un término que se utiliza para describir una situación en la que se tienen múltiples callbacks anidados, lo que puede dificultar la lectura y el mantenimiento del código.

function getUser(gu) {
  setTimeout(() => gu({ id: 1, name: "John Doe" }), 300);
}

function getNotes(userId, gn) {
  setTimeout(() => gn(["Note 1", "Note 2"]), 300);
}

function processNotes(notes, pn) {
  setTimeout(() => pn(notes.map((note) => note.toUpperCase())), 300);
}

getUser((user) => {
  getNotes(user.id, (notes) => {
    processNotes(notes, (processedNotes) => {
      console.log("Usuario:", user.name);
      console.log("Notas:", notes);
      console.log("Resultado:", processedNotes);
    });
  });
});

// Promises
//es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Una promesa puede estar en uno de tres estados: pendiente, cumplida o rechazada.

const promise = new Promise((resolve, reject) => {
  // Simulamos una operación asíncrona
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    if (data) {
      resolve(data);
    } else {
      reject(new Error("No se pudieron obtener los datos"));
    }
  }, 2000);
});

promise
  .then((data) => {
    console.log("Datos obtenidos:", data.id, data.name);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

function waitForData(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getUserPromise() {
  return waitForData(200).then(() => ({ id: 1, name: "John Doe" }));
}

function getNotesPromise() {
  return waitForData(200).then(() => ["Note 1", "Note 2"]);
}

function processNotesPromise(notes) {
  return waitForData(200).then(() => notes.map((note) => note.toUpperCase()));
}

getUserPromise()
  .then((user) =>
    getNotesPromise(user.id).then((notes) =>
      processNotesPromise(notes).then((processedNotes) =>
        console.log(
          "Usuario:",
          user.name,
          "Notas:",
          notes,
          "Resultado:",
          processedNotes,
        ),
      ),
    ),
  )
  .catch((error) => console.error("Error:", error.message));

// Async/Await
//es una sintaxis que permite escribir código asíncrono de manera más legible y estructurada, utilizando las palabras clave async y await. Una función marcada con async devuelve una promesa, y la palabra clave await se utiliza para esperar a que una promesa se resuelva antes de continuar con la ejecución del código.

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUserAsync() {
  await wait(200);
  return { id: 1, name: "John Doe" };
}

async function getNotesAsync(userId) {
  await wait(200);
  return ["Note 1", "Note 2"];
}

async function processNotesAsync(notes) {
  await wait(200);
  return notes.map((note) => note.toUpperCase());
}

async function main() {
  try {
    const user = await getUserAsync();
    const notes = await getNotesAsync(user.id);
    const processedNotes = await processNotesAsync(notes);
    console.log(
      "Usuario:",
      user.name,
      "Notas:",
      notes,
      "Resultado:",
      processedNotes,
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
