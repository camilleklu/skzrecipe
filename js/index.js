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
      duration: 3,
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
      duration: 3,
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
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sélectionner toutes les images
  const icons = document.querySelectorAll(".skzoo img");

  icons.forEach((icon, index) => {
    let direction = index % 2 === 0 ? 1 : -1; // Alterne gauche/droite
    let startY = index * 300; // Espacement vertical initial plus grand
    let delay = index * 0.2; // Décalage temporel
    let slalomWidth = gsap.utils.random(300, 500); // Largeur du slalom augmentée
    let travelY = gsap.utils.random(1000, 1500); // Distance verticale augmentée

    // Position initiale des images
    gsap.set(icon, { y: startY });

    // Animation de déplacement en slalom
    gsap.to(icon, {
      x: direction * slalomWidth, // Variation de l'amplitude du slalom
      y: `+=${travelY}`, // Variation de la distance verticale
      rotation: direction * gsap.utils.random(10, 20), // Rotation aléatoire
      ease: "power1.inOut",
      delay: delay, // Décalage entre chaque animation
      scrollTrigger: {
        trigger: icon,
        start: "top 80%", // Ajustez ce point de départ pour une meilleure visibilité
        end: "bottom -20%",
        scrub: true,
      },
    });
  });
});
