

// 1. Cambiar color de fondo a cada <li>
const lista = document.querySelectorAll("#miLista li");
lista.forEach((item, index) => {
  item.style.backgroundColor = index % 2 === 0 ? "lightblue" : "lightgreen";
});

// 2. Añadir emoji al final de cada <p>
const parrafos = document.querySelectorAll("p");
parrafos.forEach(p => {
  p.textContent += " 🙂";
});

// 3. Cambiar texto de todos los botones
const botones = document.querySelectorAll("button");
botones.forEach((btn, i) => {
  btn.textContent = `Nuevo Botón ${i + 1}`;
});