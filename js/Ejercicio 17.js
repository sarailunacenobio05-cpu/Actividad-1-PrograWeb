const manejarTareas = (() => {
    let tareas = [];

    const obtenerTareas = () => {
        let datos = localStorage.getItem("mis_tareas");
        return datos ? JSON.parse(datos) : [];
    };

    const guardarTareas = () => {
        localStorage.setItem("mis_tareas", JSON.stringify(tareas));
    };

    return {
        inicializar: function() {
            tareas = obtenerTareas();
            this.renderizarTareas();
        },

        agregarTarea: function(texto) {
            if (texto.trim() === "") {
                alert("La tarea no puede estar vacía.");
                return;
            }

            let nueva = {
                id: Date.now(),
                texto: texto
            };

            tareas.push(nueva);
            guardarTareas();
            this.renderizarTareas();
        },

        eliminarTarea: function(id) {
            if (confirm("¿Estás seguro de eliminar esta tarea?")) {
                tareas = tareas.filter(t => t.id !== id);
                guardarTareas();
                this.renderizarTareas();
            }
        },

        renderizarTareas: function() {
            let lista = document.getElementById("listaTareas");
            lista.innerHTML = "";

            if (tareas.length === 0) {
                lista.innerHTML = "<li style='padding: 10px; color: #888;'>No hay tareas pendientes.</li>";
                return;
            }

            tareas.forEach(t => {
                let li = document.createElement("li");
                li.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px; margin-top: 8px; border: 1px solid #d4cde1; border-radius: 8px; background: #faf9fc;";
                
                li.innerHTML = `
                    <span>${t.texto}</span>
                    <button type="button" style="background-color: #e63946; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px;">Eliminar</button>
                `;

                li.querySelector("button").addEventListener("click", () => {
                    this.eliminarTarea(t.id);
                });

                lista.appendChild(li);
            });
        }
    };
})();

document.addEventListener("DOMContentLoaded", () => {
    manejarTareas.inicializar();

    document.getElementById("Bagregar").addEventListener("click", () => {
        let input = document.getElementById("tarea");
        manejarTareas.agregarTarea(input.value);
        input.value = "";
    });
});