  const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tabpanel");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Quitar selección de todas
        tabs.forEach(t => t.setAttribute("aria-selected", "false"));
        panels.forEach(p => {
          p.classList.remove("active");
        });

        // Activar la pestaña actual
        tab.setAttribute("aria-selected", "true");
        const panelId = tab.getAttribute("aria-controls");
        document.getElementById(panelId).classList.add("active");
      });
    });