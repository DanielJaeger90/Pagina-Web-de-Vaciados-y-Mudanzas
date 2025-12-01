// ================================
// script.js - Animaciones, FAQ, Formularios y Sliders
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // =================================
  // 1. Animación Fade In al hacer scroll
  // =================================
  const fadeSections = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeSections.forEach(section => observer.observe(section));

  // =================================
  // 2. Manejo del formulario de presupuesto
  // =================================
  const form = document.getElementById('presupuesto-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      console.log({ nombre, email, telefono, mensaje });

      const formMessage = document.getElementById('form-message');
      if (formMessage) {
        formMessage.textContent = "Gracias, tu solicitud ha sido enviada correctamente.";
      }

      form.reset();
    });
  }

// ===============================
// FAQ - Acordeón
// ===============================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  // Ocultar por defecto
  answer.style.maxHeight = "0px";

  question.addEventListener('click', () => {

    const isOpen = answer.classList.contains('open');

    // Cerrar todos los demás
    faqItems.forEach(other => {
      const otherAnswer = other.querySelector('.faq-answer');
      const otherQuestion = other.querySelector('.faq-question');

      if (otherAnswer !== answer) {
        otherAnswer.classList.remove('open');
        otherAnswer.style.maxHeight = "0px";
        otherQuestion.classList.remove('active');
      }
    });

    // Alternar actual
    if (!isOpen) {
      answer.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.classList.add('active');
    } else {
      answer.classList.remove('open');
      answer.style.maxHeight = "0px";
      question.classList.remove('active');
    }
  });
});

  // =================================
  // 4. Sliders de galería (Mudanzas y Limpieza)
  // =================================
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(container => {
    const slides = container.querySelectorAll('.slider img');
    const prevBtn = container.querySelector('.slider-prev');
    const nextBtn = container.querySelector('.slider-next');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    // Auto-play opcional
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 4000);

    // Mostrar la primera slide
    showSlide(currentIndex);
  });

});
