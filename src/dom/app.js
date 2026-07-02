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
