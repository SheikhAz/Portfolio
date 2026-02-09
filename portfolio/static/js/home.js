document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     AUTO UPWARD PROJECT ANIMATION
  ========================== */

  const cards = document.querySelectorAll(".stack-cards__item");
  let index = 0;

  setInterval(() => {
    // reset when all cards are animated
    if (index >= cards.length) {
      cards.forEach((card) => card.classList.remove("slide-up"));
      index = 0;
      return;
    }

    cards[index].classList.add("slide-up");
    index++;
  }, 2000); // speed (2s)

  /* =========================
     ABOUT IMAGE PARALLAX
  ========================== */

  const abstractImg = document.querySelector(".abstract-img");

  if (abstractImg) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      abstractImg.style.transform = `translate(${scrollY * 0.15}px, ${scrollY * -0.05}px)`;
    });
  }
});

/* =========================
   BAR ANIMATION RESET + FIX
========================== */

window.addEventListener("load", () => {
  // Reset bar animations safely
  document.querySelectorAll(".bar").forEach((bar) => {
    bar.style.animation = "none";
    bar.offsetHeight; // force reflow
    bar.style.animation = "";
  });

  // 🔥 IMPORTANT: push bar layer behind content
  const barsLayer = document.querySelector(".bar-animation");
  if (barsLayer) {
    setTimeout(() => {
      barsLayer.style.zIndex = "-1";
    }, 1200); // wait till bar animation finishes
  }
});
