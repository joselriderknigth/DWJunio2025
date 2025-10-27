const divContenido = document.getElementById("contenido");

    function cargarContenido(archivo) {
      fetch(archivo)         // 🔹 Usamos fetch para traer el archivo
        .then(respuesta => respuesta.text())
        .then(data => {
          divContenido.classList.remove("fade-in"); // reset animación
          divContenido.innerHTML = data;           // insertamos contenido
          void divContenido.offsetWidth;           // "reflow" para reiniciar animación
          divContenido.classList.add("fade-in");   // aplicamos animación
        })
        .catch(error => {
          divContenido.innerHTML = `<p style="color:red;">Error al cargar: ${error}</p>`;
        });
    }

    document.getElementById("btn1").addEventListener("click", () => {
      cargarContenido("contenido1.html");
    });

    document.getElementById("btn2").addEventListener("click", () => {
      cargarContenido("contenido2.html");
    });