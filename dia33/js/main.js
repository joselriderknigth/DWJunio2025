/* let fragment =document.createDocumentFragment();
let div = document.createElement("div");
div.classList.add("hello");
div.textContent= "Hello World";

fragment.appendChild(div);
document.body.appendChild(fragment); */

const texto = document.getElementById("miTexto");
    const boton = document.getElementById("btnToggle");

    let esClaro = true; // Estado inicial

    boton.addEventListener("click", () => {
      if (esClaro) {
        texto.style.color = "white";
        texto.style.backgroundColor = "black";
      } else {
        texto.style.color = "black";
        texto.style.backgroundColor = "white";
      }
      esClaro = !esClaro; // alterna el estado
    });


        const caja = document.getElementById("miCaja");
    const boton2 = document.getElementById("btnAnimar");

    boton2.addEventListener("click", () => {
      // Alterna la clase "animar"
      caja.classList.toggle("animar");
    });
