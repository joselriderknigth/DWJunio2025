
/* ----------------------------------------- */
/* 💾 contactanos FORM valida email */
/* ----------------------------------------- */

(() => {
  'use strict';

  // Guardar el selector principal en una constante
  const contactForm = document.querySelector('.contact__form');

  if (contactForm) {
    
      const emailInput = contactForm.querySelector('#email');

      // Crear una función Handler 
      const validateEmailHandler = (e) => {
          if (emailInput && !emailInput.value.includes('@')) {
              e.preventDefault();
              alert('Por favor, ingrese un correo válido.');
          }
      };
      contactForm.addEventListener('submit', validateEmailHandler);
  }
})();