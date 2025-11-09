
// ===========================
// Carrusel Avanzado con JS
// ===========================
const track = document.querySelector('.carousel__track');
const btnNext = document.querySelector('.carousel__btn--next');
const btnPrev = document.querySelector('.carousel__btn--prev');
const slides = document.querySelectorAll('.carousel__track img');
const total = slides.length;

let index = 0;
let isTransitioning = false;

// Función de actualización visual
function updateCarousel() {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Evitar doble clic mientras anima
track.addEventListener('transitionend', () => {
  isTransitioning = false;
});

// Botón siguiente
btnNext.addEventListener('click', () => {
  if (isTransitioning) return;
  isTransitioning = true;
  index = (index + 1) % total;
  updateCarousel();
});

// Botón anterior
btnPrev.addEventListener('click', () => {
  if (isTransitioning) return;
  isTransitioning = true;
  index = (index - 1 + total) % total;
  updateCarousel();
});

// Autoplay automático cada 5 segundos
let autoplay = setInterval(() => {
  index = (index + 1) % total;
  updateCarousel();
}, 5000);

// Pausar autoplay al pasar el mouse
track.addEventListener('mouseenter', () => clearInterval(autoplay));
track.addEventListener('mouseleave', () => {
  autoplay = setInterval(() => {
    index = (index + 1) % total;
    updateCarousel();
  }, 5000);
});

// Lazy loading + fade-in
slides.forEach(img => {
  img.loading = 'lazy';
  img.addEventListener('load', () => img.classList.add('loaded'));
});


/* ===== Accordion ===== */
const acc = document.querySelectorAll('.accordion');
acc.forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

/* ===== Tabs ===== */
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.tab__content--${tab.dataset.tab}`).classList.add('active');
  });
});


const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
