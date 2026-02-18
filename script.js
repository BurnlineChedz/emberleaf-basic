(() => {
  const byId = id => document.getElementById(id);

  const yearEl = byId("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mobileToggle = byId("mobileToggle");
  const mobileMenu = byId("mobileMenu");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const animatedItems = document.querySelectorAll(".animate-up");
  if (animatedItems.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedItems.forEach(el => observer.observe(el));
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {
          const match = filter === "all" || item.dataset.category === filter;
          item.style.display = match ? "block" : "none";
        });
      });
    });
  }

  const lightbox = byId("lightbox");
  const lightboxImg = byId("lightbox-img");

  if (lightbox && lightboxImg && portfolioItems.length) {
    portfolioItems.forEach(item => {
      item.addEventListener("click", () => {
        const image = item.querySelector("img");
        if (!image) return;
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt || "Expanded portfolio image";
        lightbox.style.display = "flex";
        lightbox.setAttribute("aria-hidden", "false");
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightbox.setAttribute("aria-hidden", "true");
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && lightbox.style.display === "flex") {
        lightbox.style.display = "none";
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }
})();
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
