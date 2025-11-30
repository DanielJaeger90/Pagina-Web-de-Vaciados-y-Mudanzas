// ================================
// script.js - Animaciones, FAQ y formulario
// ================================

// Espera a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {

  // =================================
  // 1. Animación Fade In al hacer scroll
  // =================================
  const fadeSections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
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

      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim(); // opcional
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validación básica
      if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      // Aquí se puede integrar con backend, API o servicio de envío de emails
      console.log({
        nombre: nombre,
        email: email,
        telefono: telefono,
        mensaje: mensaje
      });

      // Mensaje de confirmación al usuario
      const formMessage = document.getElementById('form-message');
      if (formMessage) {
        formMessage.textContent = "Gracias, tu solicitud ha sido enviada correctamente.";
      }

      // Resetear formulario
      form.reset();
    });
  }

  // =================================
  // 3. Acordeón FAQ
  // =================================
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.classList.contains('open');

      // Cierra todas las respuestas
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-question').forEach(qu => qu.classList.remove('active'));

      // Abre solo la seleccionada si estaba cerrada
      if (!isOpen) {
        answer.classList.add('open');
        q.classList.add('active');
      }
    });
  });

});
