document.getElementById("loadData").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.innerHTML = "<p>Cargando datos...</p>";

  try {
    // Definir promesas de las 3 APIs
    const storePromise = fetch("https://fakestoreapi.com/products").then(res => res.json());
    const userPromise = fetch("https://randomuser.me/api/?results=3").then(res => res.json());
    const gamesPromise = fetch("https://api.rawg.io/api/games?key=581546eb6316441da5054fc729c15008").then(res => res.json());

    // Ejecutarlas en paralelo
    const [storeData, userData, gamesData] = await Promise.all([storePromise, userPromise, gamesPromise]);

    // Mostrar en consola
    console.log("🛒 FakeStore:", storeData);
    console.log("👤 RandomUser:", userData);
    console.log("🎮 RAWG Games:", gamesData);

    // Mostrar algo simple en pantalla
    output.innerHTML = `
      <h3>Resultados:</h3>
      <p><b>Productos:</b> ${storeData.length}</p>
      <p><b>Usuarios:</b> ${userData.results.length}</p>
      <p><b>Juegos (RAWG):</b> ${gamesData.results ? gamesData.results.length : 'Requiere API key válida'}</p>
    `;

  } catch (error) {
    console.error("Error cargando APIs:", error);
    output.innerHTML = "<p style='color:red;'>Error cargando datos. Revisa la consola.</p>";
  }
});