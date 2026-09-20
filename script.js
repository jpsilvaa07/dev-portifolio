function scrollToSection() {
  document
    .getElementById("about")
    .scrollIntoView({
      behavior: "smooth"
    });
}

/* Galaxy Particles */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const stars = Array.from(
  { length: 160 },
  () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.6,
    s: Math.random() * 0.6
  })
);

function draw() {

  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = "white";

  stars.forEach(star => {

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.r,
      0,
      Math.PI * 2
    );

    ctx.fill();

    star.y += star.s;

    if (star.y > h) {
      star.y = 0;
    }

  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {

  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

});

/* Scroll Reveal */
const reveals = document.querySelectorAll(
  ".glass, .project"
);

function revealOnScroll() {

  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < trigger) {

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

}

reveals.forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";

});

window.addEventListener(
  "scroll",
  revealOnScroll
);

/* Typing Effect */
const text =
  "Desenvolvedor Back-end Java | APIs REST | Spring Boot | MySQL";

let i = 0;

function typeWriter() {

  if (i < text.length) {

    document.getElementById("typing")
      .innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 40);
  }

}

typeWriter();