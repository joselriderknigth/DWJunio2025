

const alumno = {
    nombre: "Juan",
    apelllido: "Alvear",
    edad: 22,
    carrera: "Ingenieria"
}

console.log(alumno.nombre,
    alumno.apelllido,
    alumno.edad,
    alumno.carrera
);

//const array1 = {...alumno};

const array21 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array2, ...array21];
console.log(array3);

const parrafo = document.getElementById("parrafo");
parrafo.textContent = - `Nombre: ${alumno.array2} `;


const lista = document.getElementById("lista");
const li = `<li>Uno</li><li>otro</li>`;
lista.innerHTML = li;

//ejercicio 3 - 3
parrafo.addEventListener("click", () => {

});

