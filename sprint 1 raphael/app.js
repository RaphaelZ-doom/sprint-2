const depoimentos = [
  {
    nome: "Carlos M.",
    mensagem:
      "Comecei apostando em jogos de futebol por diversão, mas em poucos meses estava endividado, mentindo para minha família e vendendo objetos pessoais. Foi difícil admitir, mas precisei de ajuda profissional para sair desse ciclo. Hoje, faço terapia e participo de grupos de apoio. Compartilho minha história para mostrar que é possível recomeçar.",
    data: "10/05/2025",
  },
  {
    nome: "Julia R.",
    mensagem:
      "Perdi meu emprego e quase meu casamento por causa das apostas online. Eu achava que controlava, mas a verdade é que estava sempre tentando recuperar o que perdi. Demorou, mas consegui dar um basta. Encontrei forças em minha filha e decidi mudar. Ainda luto diariamente, mas estou vencendo, um dia de cada vez.",
    data: "09/05/2025",
  },
];

const container = document.querySelector("section");

// Adicionar depoimentos existentes
depoimentos.forEach((depoimento) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${depoimento.nome}</h3>
    <p>"${depoimento.mensagem}"</p>
    <small>${depoimento.data}</small>
  `;

  container.appendChild(card);
});

// modal de postar experiência
document.addEventListener("DOMContentLoaded", () => {
  const addExperienceBtn = document.getElementById("add-experience-btn");
  const miniWindow = document.getElementById("mini-window");
  const closeBtn = document.querySelector(".close-btn");
  const submitExperienceBtn = document.getElementById("submit-experience-btn");
  const experienceInput = document.getElementById("experience-input");

  // Abrir a mini janela
  addExperienceBtn.addEventListener("click", () => {
    miniWindow.style.display = "block";
  });

  // Fechar a mini janela
  closeBtn.addEventListener("click", () => {
    miniWindow.style.display = "none";
  });

  // Fechar ao clicar fora
  window.addEventListener("click", (event) => {
    if (event.target === miniWindow) {
      miniWindow.style.display = "none";
    }
  });

  // Adicionar depoimento
  submitExperienceBtn.addEventListener("click", () => {
    const experienceText = experienceInput.value.trim();

    if (experienceText) {
      const newComment = document.createElement("div");
      newComment.classList.add("card");
      newComment.innerHTML = `
        <h3>Usuário Anônimo</h3>
        <p>"${experienceText}"</p>
        <small>${new Date().toLocaleDateString()}</small>
      `;
      container.appendChild(newComment);

      experienceInput.value = "";
      miniWindow.style.display = "none";
    } else {
      alert("Por favor, escreva uma experiência antes de enviar.");
    }
  });
});