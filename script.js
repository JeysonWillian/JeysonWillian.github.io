//Link Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

//Botão Voltar
let topoBtn = document.getElementById("topoBtn");

window.onscroll = function () {
  scrollFuntion();
};

function scrollFuntion() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topoBtn.style.display = "block";
  } else {
    topoBtn.style.display = "none";
  }
}

topoBtn.addEventListener("click", function () {
  window.scroll({ top: 0, behavior: "smooth" });
});
