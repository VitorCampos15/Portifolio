document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", () => {
      fadeElements.forEach(el => {
        const { top } = el.getBoundingClientRect();
        if (top < window.innerHeight) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }
      });
    });
  });
  