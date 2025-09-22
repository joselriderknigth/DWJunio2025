let win;

document.getElementById("abrir").onclick = () => {
    win = window.open("","","width=400,height=400");
}

document.getElementById("cerrar").onclick = () => {
    if (win){
        win.close();
    }
}

document.getElementById("mover").onclick = () => {
  win.moveTo(200,200);
}

document.getElementById("redimensionar").onclick = () => {
  win.resizeTo(600,300);
}

document.getElementById("abrirGoogle").onclick = () => {
  win.location.href = "https://www.google.com";
}

const numbersButton = document.querySelector("#numbersButton");
const divs = document.querySelectorAll(".number");

numbersButton.addEventListener("click", () => {
    divs.forEach(div => {
        let nuevoNumero = Math.floor(Math.random()*100);
        div.innerText = nuevoNumero;
    })
})

const form = document.querySelector("#calculator");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const r = document.querySelector("#resultado");
const operacion = document.querySelector("#operacion");




