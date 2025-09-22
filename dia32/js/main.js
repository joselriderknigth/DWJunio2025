 const texto = document.getElementById("miTexto");
    const boton = document.getElementById("btnToggle");

    boton.addEventListener("click", () => {
      texto.classList.toggle("light");
      texto.classList.toggle("dark");
    });