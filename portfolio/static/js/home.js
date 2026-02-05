document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".stack-cards-container");
  const cards = document.querySelectorAll(".stack-cards__item");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const start = container.offsetTop;
    const end = start + container.offsetHeight - window.innerHeight;

    const progress = Math.min(
      1,
      Math.max(0, (scrollY - start) / (end - start)),
    );

    const activeIndex = Math.floor(progress * cards.length);

    cards.forEach((card, index) => {
      if (index < activeIndex) {
        card.classList.add("slide-up");
      } else {
        card.classList.remove("slide-up");
      }
    });
  });
});

const abstractImg = document.querySelector(".abstract-img");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  abstractImg.style.transform = `translate(${scrollY * 0.15}px, ${scrollY * -0.05}px)`;
});
