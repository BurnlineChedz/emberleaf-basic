const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileToggle && mobileMenu) {
  mobileToggle.setAttribute("aria-expanded", "false");

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Scroll reveal
const reveals = document.querySelectorAll(".animate-up");
if (reveals.length) {
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      if (rect < trigger) el.classList.add("visible");
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
}

/* FILTERS */
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

if (filterBtns.length && items.length) {
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
}

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg && items.length) {
  items.forEach(item => {
    item.addEventListener("click", () => {
      const image = item.querySelector("img");
      if (!image) return;
      lightboxImg.src = image.src;
      lightboxImg.alt = image.alt || "Portfolio preview";
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}
