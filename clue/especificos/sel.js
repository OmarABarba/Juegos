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
        { nombre: "Cazador", imagen: "url('/clue/especificos/imagenes/cazador2.jpeg')", texto: "Descripción del cazador..." },
        { nombre: "Mago", imagen: "url('/clue/especificos/imagenes/mago.jpeg')", texto: "Descripción del mago..." },
        { nombre: "Hobbit", imagen: "url('/clue/especificos/imagenes/hobbit.jpeg')", texto: "Descripción del hobbit..." }
    ];
    

    var armas = [
        { nombre: "Daga", imagen: "url('/clue/especificos/imagenes/daga.jpeg')", texto: "Descripción de la daga..." },

        { nombre: "Báculo de mago", imagen: "url('/clue/especificos/imagenes/baculo.jpeg')", texto: "Descripción del báculo de mago..." },

        { nombre: "Arco", imagen: "url('/clue/especificos/imagenes/arco.jpeg')", texto: "Descripción del arco..." },

        { nombre: "Espada", imagen: "url('/clue/especificos/imagenes/espada.jpeg')", texto: "Descripción de la espada..." },

        { nombre: "Poción venenosa", imagen: "url('/clue/especificos/imagenes/posion.jpeg')", texto: "Descripción de la poción venenosa..." }
    ];
// LOGICA
    const historiasKiller = [
        { historias:"El cazador estaria en la cascada tratando de arreglar su arco y se veria mollesto", personaje:"Cazador", lugar:"Cascada", arma:"Arco",killer: true
        },

        {historias: "El Hobbit se encontraba con el pantalon manchado y el personaje tenia un poco de lodo en el hongos en el cabello no se veria su daga por ningun lado",personaje: "Hobbit", lugar:"Hongos", arma: "Daga",killer: true},

        { historias: "El mago se encontraria en el Arbol central y se veria su baculo caliente como si lo hubiera usado hace poco",personaje:"Mago", lugar:"Arbol", arma:"Baculo",killer: true
        },

        {historias: "La bruja se encontraba con el vestido manchado y el personaje tenia un poco de lodo en el vestido se ve que esconde un frasco vacio",personaje:"Bruja", lugar:"Pantano", arma: "Pocion"},
        
        {historias: "El troll esta en el bsoque de sombras asustado con un morete en la cara y no se veria su espada",personaje:"Troll", lugar:"Sombras", arma:"Espada",killer: true
        }
        
    
    ]

    const historiasNorm = [
        { historias:"El cazador estaria en la cascada tomando un cafe con su arco en la roca de aun lado ", personaje:"Cazador", lugar:"Cascada", arma:"Arco",killer: false
        },
        {historias: "El Hobbit se encontraba en el bosque de hongos giganes con su daga en la cintura.",personaje: "Hobbit", lugar:"Hongos", arma: "Daga",killer: false},
        { historias: "El mago se encontraria en el Arbol central tomando notas del arol y el baculo estaria en la espalda",personaje:"Mago", lugar:"Arbol", arma:"Baculo",killer: false
        },
        {historias: "La bruja se encontraba con el vestido sin manchar y el personaje se encuentra en el pantano y se veria un frasco lleno",personaje:"Bruja", lugar:"Pantano", arma: "Pocion", killer: false},
        
        { historias: "El troll esta en el bsoque de sombras tranquilo biendo las sombras con su espada",personaje:"Troll", lugar:"Sombras", arma:"Espada",killer: false
        }   
    ]

    function obtenerHistoriaAleatoria(historiasArray) {
        
        const indiceAleatorio = Math.floor(Math.random() * historiasArray.length);
        const historiaAleatoria = historiasArray[indiceAleatorio];
        return { historia: historiaAleatoria, indice: indiceAleatorio };
    }
    
    function reemplazarObjetoEnIndice(matriz, objeto, indice) {
                if (indice < 0 || indice >= matriz.length) {
            console.error("El índice proporcionado está fuera de los límites de la matriz.");
            return matriz;
        }
    
                matriz[indice] = objeto;
    
        
        return matriz;
    }
    
    


    // Uso de la función
    const { historia, indice } = obtenerHistoriaAleatoria(historiasKiller);
    console.log("Historia aleatoria:", historia);
    console.log("Índice de la historia:", indice);
    const index = indice;
    const historiasModificadas = reemplazarObjetoEnIndice(historiasNorm.slice(), historia, indice);


console.log("Historias modificadas:", historiasModificadas);
const hist = historiasModificadas;
////////////
function mostrarTexto(hist) {
    return `${hist.historias} ${hist.personaje} está en ${hist.lugar} con ${historia.arma}.`;
}




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
        lista.forEach(
            function(elemento) {
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
    
    document.getElementById("ubicacionBtn").addEventListener("click", function() {
        actualizarFondo("url('/imagenes/mapa.jpeg')");
        
    });
    document.getElementById("ubicacionBtn").addEventListener("click", function() {
        actualizarFondo("url('/imagenes/mapa.jpeg')");
        
    });
    
     // Función para crear botones y agregar funcionalidad de mostrar texto al presionarlos
     function crearBotones() {
        const container = document.getElementById("botonesContainer");

        historias.forEach(function(historia, index) {
            const button = document.createElement("button");
            button.textContent = `Historia ${index + 1}`;
            button.addEventListener("click", function() {
                const texto = mostrarTexto(historia);
                const parrafo = document.createElement("p");
                parrafo.textContent = texto;
                document.body.appendChild(parrafo);

                // Cambiar el texto del Hobbit después de 2 segundos
                if (historia.personaje === "Hobbit") {
                    setTimeout(function() {
                        const descripcionHobbit = document.getElementById("descripcionHobbit");
                        descripcionHobbit.textContent = "Nuevo texto para el Hobbit después de 2 segundos.";
                    }, 2000);
                }
            });
            container.appendChild(button);
        });
    }

    crearBotones();
});





