document.addEventListener("DOMContentLoaded", function() {
    var ubicaciones = [
        { nombre: "Cascada", imagen: "url('/imagenes/cascada.jpeg')", texto: "Descripción de la cascada..." },
        { nombre: "Hongos Gigantes", imagen: "url('/imagenes/Hongo.jpeg')", texto: "Descripción de los hongos gigantes..." },
        { nombre: "Arbol central", imagen: "url('/imagenes/arbol.jpeg')", texto: "Descripción del árbol central..." },
        { nombre: "Pantano", imagen: "url('/imagenes/pantano.jpeg')", texto: "Descripción del pantano..." },
        { nombre: "Pinos de sobras", imagen: "url('/imagenes/sombras.jpeg')", texto: "Descripción de los pinos de sobras..." }
    ];

    var personajes = [
        { nombre: "Bruja", imagen: "url('/clue/especificos/imagenes/bruja.jpeg')", texto: "Descripción de la bruja..." },
        { nombre: "Ogro", imagen: "url('/clue/especificos/imagenes/ogro.jpeg')", texto: "Descripción del ogro..." },
        { nombre: "Cazador", imagen: "url('/clue/especificos/imagenes/cazador.jpeg')", texto: "Descripción del cazador..." },
        { nombre: "Mago", imagen: "url('/clue/especificos/imagenes/mago.jpeg')", texto: "Descripción del mago..." },
        { nombre: "Hobbit", imagen: "url('/clue/especificos/imagenes/hobbit.jpeg')", texto: "Descripción del hobbit..." }
    ];

    var armas = [
        { nombre: "Daga", imagen: "url('/clue/especificos/imagenes/daga.jpg')", texto: "Descripción de la daga..." },
        { nombre: "Báculo de mago", imagen: "url('/clue/especificos/imagenes/baculo.jpg')", texto: "Descripción del báculo de mago..." },
        { nombre: "Arco", imagen: "url('/clue/especificos/imagenes/arco.jpg')", texto: "Descripción del arco..." },
        { nombre: "Espada", imagen: "url('/clue/especificos/imagenes/espada.jpg')", texto: "Descripción de la espada..." },
        { nombre: "Poción venenosa", imagen: "url('/clue/especificos/imagenes/pocion.jpg')", texto: "Descripción de la poción venenosa..." }
    ];

    document.getElementById("ubicacionBtn").addEventListener("click", function() {
        actualizarFondo("url('/imagenes/mapa.jpeg')");
        mostrarContenido("Ubicaciones disponibles: Cascada, Hongos Gigantes, Arbol central, Pantano, Pinos de sobras");
        mostrarBotones(ubicaciones, "Ubicación");
    });

    document.getElementById("personajeBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/personajes2.jpeg')");
        mostrarContenido("Personajes: Bruja, Ogro, Cazador, Mago, Hobbit");
        mostrarBotones(personajes, "Personaje");
    });

    document.getElementById("armaBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/armas.jpeg')");
        mostrarContenido("Armas: Daga, Báculo de mago, Arco, Espada, Poción venenosa");
        mostrarBotones(armas, "Arma");
    });

    function actualizarFondo(imagen) {
        document.body.style.backgroundImage = imagen;
    }

    function mostrarContenido(contenido) {
        document.querySelector("h2").textContent = contenido;
    }

    function mostrarBotones(lista, textoBase) {
        // Ocultar todos los contenedores de botones
        document.getElementById("ubicacionButtons").style.display = "none";
        document.getElementById("personajeButtons").style.display = "none";
        document.getElementById("armaButtons").style.display = "none";

        // Mostrar solo el contenedor de botones correspondiente
        var container;
        if (textoBase === "Ubicación") {
            container = document.getElementById("ubicacionButtons");
        } else if (textoBase === "Personaje") {
            container = document.getElementById("personajeButtons");
        } else if (textoBase === "Arma") {
            container = document.getElementById("armaButtons");
        }
        container.innerHTML = ""; // Limpiar cualquier contenido previo

        // Crear botones para cada elemento de la lista
        lista.forEach(function(elemento) {
            var button = document.createElement("button");
            button.textContent = elemento.nombre;
            button.addEventListener("click", function() {
                actualizarFondo(elemento.imagen);
                mostrarContenido(elemento.texto);
            });
            container.appendChild(button);
        });
        
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
    }


});





