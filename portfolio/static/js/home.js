const abstractImg = document.querySelector(".abstract-img");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  abstractImg.style.transform = `translate(${scrollY * 0.15}px, ${scrollY * -0.05}px)`;
});

