//
let primerParraf =  document.querySelector("#primer-parraffo");
primerParraf.innerHTML = "Hola <br> Mundo  <style>"; 


const segundoParraf = document.querySelector("#segundo-parraffo");
segundoParraf.style.color = "blue";
segundoParraf.style.fontSize = "40px";

const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const tercerParraf =  document.querySelector("#tercer-parraffo");

boton1.addEventListener("click", () => {
   tercerParraf.style.color = "red";
});

boton2.addEventListener("click", () => {
   tercerParraf.style.color = "green";
});


const PI = 3.14;
let radio = 5;

function areacirculo(r) {
   return PI *r *r;
}

console.log("El area del circulo r1 es: " + areacirculo(radio));

const boton3= document.querySelector("#boton3");
boton3.addEventListener("click", () => {
  alert("Boton clickeado");
});