// Http
// El objeto XMLHttpRequest (XHR) es una API que permite realizar solicitudes HTTP desde el navegador de manera asíncrona, lo que significa que se pueden enviar y recibir datos sin tener que recargar la página completa. Esto permite crear aplicaciones web más interactivas y dinámicas, ya que se pueden actualizar partes específicas de la página sin interrumpir la experiencia del usuario.

const FAKE_API_URL = "https://api.escuelajs.co/api/v1/products";

//fetch es una API moderna que permite realizar solicitudes HTTP de manera más sencilla y legible que XMLHttpRequest. Utiliza Promesas para manejar las respuestas, lo que facilita el manejo de errores y la encadenación de operaciones asíncronas.

//fetch GET
fetch(FAKE_API_URL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

//fetch POST
fetch(FAKE_API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo producto",
    price: 100,
    description: "Descripción del nuevo producto",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
