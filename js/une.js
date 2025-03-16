document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".horizontal-scroll-container");
  const slides = gsap.utils.toArray(".slide");

  const totalWidth = slides.length * window.innerWidth;

  gsap.to(container, {
    x: () => -(totalWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll-section",
      start: "top top",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
    },
  });

  // Ajouter des animations individuelles pour chaque slide (optionnel)
  slides.forEach((slide, index) => {
    gsap.from(slide, {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      scrollTrigger: {
        trigger: slide,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
});
