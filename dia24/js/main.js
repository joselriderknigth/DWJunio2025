const textarea = document.getElementById('texto1');
const boton1 = document.getElementById('boton1');
const parraf = document.getElementById('parrafo');

boton1.addEventListener('click', () => {
   parraf.innerText = textarea.value;
});

// -------------------------

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const boton2 = document.getElementById('boton2');
const resul1 = document.getElementById('resul1');

boton2.addEventListener('click', () => {
   resul1.innerText = parseFloat(numero1.value) + parseFloat(numero2.value);
});