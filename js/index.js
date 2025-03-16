// Pour les carousels
const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },
});

// Pour les flip cards

function flipCard(card) {
  card.classList.toggle("flipped");
}

// Pour les animations d'apparition

gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll(".swiper-container");

elements.forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

const elem = document.querySelectorAll(".two");

elem.forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
