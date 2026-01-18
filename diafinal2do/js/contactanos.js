
/* ----------------------------------------- */
/* 💾 contactanos FORM valida email */
/* ----------------------------------------- */
document.querySelector('.contact__form').addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;

  if (!email.includes('@')) {
    e.preventDefault();
    alert('Por favor ingrese un correo válido');
  }
});
