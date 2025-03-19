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

gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".recipes-line");

cards.forEach((card) => {
  gsap.fromTo(
    card,
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      delay: 1,
      ease: "bounce",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
