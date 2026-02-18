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
