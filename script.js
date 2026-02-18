document.getElementById("year").textContent = new Date().getFullYear();

const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

mobileToggle.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
});

// Scroll reveal
const reveals = document.querySelectorAll(".animate-up");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < trigger) el.classList.add("visible");
  });
});
/* FILTERS */
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    items.forEach(item => {
      item.style.display = (category === "all" || item.dataset.category === category)
        ? "block"
        : "none";
    });
  });
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

items.forEach(item => {
  item.addEventListener("click", () => {
    const src = item.querySelector("img").src;
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
