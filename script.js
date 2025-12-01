// ================================
// script.js - Animaciones, FAQ, Formularios y Sliders
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 1. Fade-in al hacer scroll
  // ========================================
  const fadeSections = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeSections.forEach(section => observer.observe(section));

  // ========================================
  // 2. Formulario de presupuesto
  // ========================================
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

      // Aquí podrías enviar los datos con fetch/ajax a tu servidor
      console.log({ nombre, email, telefono, mensaje });

      const formMessage = document.getElementById('form-message');
      if (formMessage) {
        formMessage.textContent = "Gracias, tu solicitud ha sido enviada correctamente.";
      }

      form.reset();
    });
  }

  // ========================================
  // 3. FAQ - acordeón suave
  // ========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    answer.style.maxHeight = "0px"; // ocultar por defecto

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

      // Alternar el actual
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

  // ========================================
  // 4. Sliders / Galería
  // ========================================
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

    // Botones prev/next
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      });
    }

    // Autoplay
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 4000);

    // Mostrar la primera imagen
    showSlide(currentIndex);
  });

});
