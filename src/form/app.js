const opinions = [
  {
    id: "op-1",
    name: "María",
    rating: 5,
    comment: "Llegó rápido y la calidad es excelente.",
    date: "2025-01-10",
  },
  {
    id: "op-2",
    name: "Carlos",
    rating: 4,
    comment: "Buen producto. El empaque podría mejorar.",
    date: "2025-01-22",
  },
  {
    id: "op-3",
    name: "Laura",
    rating: 5,
    comment: "Muy cómodo. Compraría de nuevo.",
    date: "2025-02-03",
  },

  {
    id: "op-5",
    name: "Oscar",
    rating: 5,
    comment: "Muy cómodo. Compraría de nuevo.",
    date: "2025-02-03",
  },
];

function createOpinionElement(opinion) {
  const article = document.createElement("article");
  article.classList.add("opinion");
  article.dataset.id = opinion.id;

  const header = document.createElement("header");
  const meta = document.createElement("div");
  meta.classList.add("meta");

  const name = document.createElement("strong");
  name.textContent = opinion.name;

  const rating = document.createElement("span");
  rating.textContent = `* ${opinion.rating}/5`;

  meta.appendChild(name);
  meta.appendChild(rating);

  const date = document.createElement("small");
  date.classList.add("muted");
  date.textContent = `Fecha: ${opinion.date}`;

  header.appendChild(meta);
  header.appendChild(date);

  const comment = document.createElement("p");
  comment.textContent = opinion.comment;

  article.appendChild(header);
  article.appendChild(comment);

  return article;
}

function renderOpinions(opinions) {
  const opinionsContainer = document.getElementById("opinions");
  opinionsContainer.innerHTML = "";

  opinions.forEach((opinion) => {
    const opinionElement = createOpinionElement(opinion);
    opinionsContainer.appendChild(opinionElement);
  });
}

renderOpinions(opinions);

const CONTACT_STORAGE_KEY = "form";

function renderSavedMessage() {
  const box = document.getElementById("saved-message");
  const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
  const data = raw ? JSON.parse(raw) : null;

  if (data) {
    box.classList.remove("hidden");
    box.innerHTML = `<p><strong>Mensaje guardado:</strong></p>
    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Mensaje:</strong> ${data.message}</p>`;
  } else {
    box.classList.add("hidden");
  }
}

function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const name = String(formData.get("name")).trim();
  const message = String(formData.get("message")).trim();

  const payload = {
    name,
    message,
    date: new Date().toISOString(),
  };

  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(payload));

  renderSavedMessage();

  form.reset();
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit);
}

renderSavedMessage();
