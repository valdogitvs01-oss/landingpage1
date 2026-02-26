// =======================
// Typing Animation
// =======================
const words = [
  "Website Profesional",
  "SEO Optimal",
  "Pengadaan IT Terpercaya"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typingEffect() {
  const currentWord = words[wordIndex];
  typingElement.textContent = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typingEffect, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typingEffect, isDeleting ? 60 : 120);
}

typingEffect();

// =======================
// Smooth Scroll
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// =======================
// Scroll Animation
// =======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
},{ threshold: 0.2 });

document.querySelectorAll(".card, .about, .contact, .terms")
  .forEach(el => observer.observe(el));

// =======================
// Mobile Menu
// =======================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// =======================
// Form Validation
// =======================
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
  e.target.reset();
});