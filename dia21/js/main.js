let indice = 0;
const carrusel = document.getElementById('carruselContenido');
const total = carrusel.children.length;
let autoplay;

const sidebar = document.getElementById("sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const pin = document.getElementById("pin");
let fixed = false;

const btnRegister = document.getElementById("btn-register");
const registerForm = document.getElementById("register-form-section");

function moverCarrusel(direccion) {
  indice = (indice + direccion + total) % total;
  carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

function iniciarAutoplay() {
  autoplay = setInterval(() => {
    moverCarrusel(1);
  }, 5000);
}

function detenerAutoplay() {
  clearInterval(autoplay);
}

const items = document.querySelectorAll('.carrusel-item');
items.forEach(item => {
  item.addEventListener('mouseenter', detenerAutoplay);
  item.addEventListener('mouseleave', iniciarAutoplay);
});

menuToggle.addEventListener("mouseenter", () => {
  if (!fixed) sidebar.classList.toggle("active");
});

sidebar.addEventListener("mouseleave", () => {
  if (!fixed) sidebar.classList.toggle("active");
});


pin.addEventListener("click", () => {
  fixed = !fixed;
  if (fixed) {
    sidebar.classList.add("active");
    pin.textContent = "Menú fijo";
  } else {
    sidebar.classList.remove("active");
    pin.textContent = "Fijar menú";
  }
});

btnRegister.addEventListener("click", () => {
  registerForm.style.display = "block";
  registerForm.scrollIntoView({ behavior: "smooth" }); 
});