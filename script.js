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
      const telefono = document.getElementById('telefono').value.trim(); // opcional
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

  // =================================
  // 3. FAQ - Preguntas frecuentes
  // =================================
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      answer.classList.toggle('open');
    });
  });

  // =================================
  // 4. Sliders de galería (Mudanzas y Limpieza)
  // =================================
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(container => {
    const slider = container.querySelector('.slider');
    const prevBtn = container.querySelector('.slider-prev');
    const nextBtn = container.querySelector('.slider-next');
    let currentIndex = 0;
    const slides = slider.querySelectorAll('img');
    const totalSlides = slides.length;

    // Inicializar posición
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    });

    // Auto-play opcional (descomentarlo si quieres)
    // setInterval(() => {
    //   currentIndex = (currentIndex + 1) % totalSlides;
    //   updateSlider();
    // }, 5000);
  });

});
