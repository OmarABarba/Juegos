document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ubicacionBtn").addEventListener("click", function() {
        actualizarFondo("url('/imagenes/mapa.jpeg')", "auto");
        mostrarContenido("Ubicaciones disponibles: Cascada, Hongos Gigantes, Arbol central, Pantano, Pinos de sobras");
        mostrarBotones("ubicacionButtons", 5, "Ubicación");
    });

    document.getElementById("personajeBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/personajes2.jpeg')");
        mostrarContenido("Personajes: Bruja, Ogro, Cazador, Mago, Hobbit");
        mostrarBotones("personajeButtons", 5, "Personaje");
    });

    document.getElementById("armaBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/armas.jpeg')", "cover");
        mostrarContenido("Armas: Daga, baculo de mago, arco, espada, poción venenosa, solo una pieza de cada cosa");
        mostrarBotones("armaButtons", 5, "Arma");
    });

    function actualizarFondo(fondo, tamaño = "cover") {
        document.body.style.backgroundImage = fondo;
        document.body.style.backgroundSize = tamaño;
    }

    function mostrarContenido(contenido) {
        document.querySelector("h2").textContent = contenido;
    }

    function mostrarBotones(containerId, cantidad, textoBase) {
        // Ocultar todos los contenedores de botones
        document.getElementById("ubicacionButtons").style.display = "none";
        document.getElementById("personajeButtons").style.display = "none";
        document.getElementById("armaButtons").style.display = "none";

        // Mostrar solo el contenedor de botones correspondiente
        var container = document.getElementById(containerId);
        container.innerHTML = ""; // Limpiar cualquier contenido previo

        for (var i = 1; i <= cantidad; i++) {
            var button = document.createElement("button");
            button.textContent = textoBase + " " + i;
            button.addEventListener("click", function() {
                console.log("Se hizo clic en el botón " + textoBase + " " + i);
            });
            container.appendChild(button);
        }
        
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
    }
});


