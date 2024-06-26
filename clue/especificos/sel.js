document.addEventListener("DOMContentLoaded", function() {
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


    const { historia, indice } = obtenerHistoriaAleatoria(historiasKiller);
    console.log("Historia aleatoria:", historia);
    console.log("Índice de la historia:", indice);
    const index = indice;
    const historiasModificadas = reemplazarObjetoEnIndice(historiasNorm, historia, indice);
console.log(historiasModificadas)
    

var ubicaciones = [
    { nombre: "Cascada", imagen: "url('/imagenes/cascada.jpeg')", texto: historiasModificadas[0].historias },
    { nombre: "Hongos Gigantes", imagen: "url('/imagenes/Hongo.jpeg')", texto: historiasModificadas[1].historias },
    { nombre: "Arbol central", imagen: "url('/imagenes/arbol.jpeg')", texto: historiasModificadas[2].historias },
    { nombre: "Pantano", imagen: "url('/imagenes/pantano.jpeg')", texto: historiasModificadas[3].historias },
    { nombre: "Pinos de sobras", imagen: "url('/imagenes/sombras.jpeg')", texto: historiasModificadas[4].historias }
];

var personajes = [
    { nombre: "Bruja", imagen: "url('/clue/especificos/imagenes/bruja.jpeg')", texto: historiasModificadas[3].historias },
    { nombre: "Troll", imagen: "url('/clue/especificos/imagenes/ogro.jpeg')", texto: historiasModificadas[4].historias },
    { nombre: "Cazador", imagen: "url('/clue/especificos/imagenes/cazador2.jpeg')", texto: historiasModificadas[0].historias },
    { nombre: "Mago", imagen: "url('/clue/especificos/imagenes/mago.jpeg')", texto:historiasModificadas[2].historias },
    { nombre: "Hobbit", imagen: "url('/clue/especificos/imagenes/hobbit.jpeg')", texto: historiasModificadas[1].historias }
];

var armas = [
    { nombre: "Daga", imagen: "url('/clue/especificos/imagenes/daga.jpeg')", texto: historiasModificadas[1].historias },
    { nombre: "Báculo de mago", imagen: "url('/clue/especificos/imagenes/baculo.jpeg')", texto: historiasModificadas[2].historias },
    { nombre: "Arco", imagen: "url('/clue/especificos/imagenes/arco.jpeg')", texto: historiasModificadas[0].historias },
    { nombre: "Espada", imagen: "url('/clue/especificos/imagenes/espada.jpeg')", texto: historiasModificadas[4].historias },
    { nombre: "Poción venenosa", imagen: "url('/clue/especificos/imagenes/posion.jpeg')", texto: historiasModificadas[3].historias }
];
//////////////////////////////
//////////////////////////////
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
            button.classList.add("custom-button"); // Agrega la clase "custom-button" al botón
            button.addEventListener("click", (function(elementoActual) {
                return function() {
                    actualizarFondo(elementoActual.imagen);
                    mostrarContenido(elementoActual.texto);
                };
            })(elemento)); // Pasamos elemento como parámetro a la función de cierre
            container.appendChild(button);
        });

        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
    }

    document.getElementById("ubicacionBtn").addEventListener("click", function() {
        actualizarFondo("url('/imagenes/mapa.jpeg')");
        mostrarContenido("Ubicaciones disponibles: Cascada, Hongos Gigantes, Arbol central, Pantano, Pinos de sobras");
        mostrarBotones(ubicaciones, "Ubicación");
        document.getElementById("enviar-btn").style.display = "none";
        document.getElementById("opcionesPersonaje").style.display = "none";
        document.getElementById("opcionesArma").style.display = "none";
        document.getElementById("opcionesLugar").style.display = "none";
        
    });

    document.getElementById("personajeBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/personajes2.jpeg')");
        mostrarContenido("Personajes: Bruja, Ogro, Cazador, Mago, Hobbit");
        mostrarBotones(personajes, "Personaje");
        document.getElementById("enviar-btn").style.display = "none";
        document.getElementById("opcionesPersonaje").style.display = "none";
        document.getElementById("opcionesArma").style.display = "none";
        document.getElementById("opcionesLugar").style.display = "none";
    });

    document.getElementById("armaBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/armas.jpeg')");
        mostrarContenido("Armas: Daga, Báculo de mago, Arco, Espada, Poción venenosa");
        mostrarBotones(armas, "Arma");
        document.getElementById("enviar-btn").style.display = "none";
        document.getElementById("opcionesPersonaje").style.display = "none";
        document.getElementById("opcionesArma").style.display = "none";
        document.getElementById("opcionesLugar").style.display = "none";
    });


    let seleccion = {
        personaje:"", 
        lugar:"",
        arma:""
    };
    
    document.getElementById("enviar-btn").style.display = "none";

    document.getElementById("botsel").addEventListener("click", function() {
        mostrarContenido("Selecciona los valores para ver si descubriste al asesino");
        actualizarFondo("url('/clue/especificos/imagenes/bosque.jpeg')");
        document.getElementById("ubicacionButtons").style.display = "none";
        document.getElementById("personajeButtons").style.display = "none";
        document.getElementById("armaButtons").style.display = "none";
        
        // Mostrar el menú desplegable de opciones de asesino
        document.getElementById("opcionesPersonaje").style.display = "inline";
        document.getElementById("opcionesArma").style.display = "inline";
        document.getElementById("opcionesLugar").style.display = "inline";
        // Mostrar el botón de enviar solo cuando se presiona "Seleccionar asesino"
        document.getElementById("enviar-btn").style.display = "inline";
    });
    
    document.getElementById("opcionesPersonaje").addEventListener("change", function() {
        // Obtener el valor seleccionado del menú desplegable
        seleccion.personaje = document.getElementById("opcionesPersonaje").value;
    });
    document.getElementById("opcionesArma").addEventListener("change", function() {
        // Obtener el valor seleccionado del menú desplegable y almacenarlo en el objeto de selección
        seleccion.arma = document.getElementById("opcionesArma").value;
    });
    
    document.getElementById("opcionesLugar").addEventListener("change", function() {
        // Obtener el valor seleccionado del menú desplegable y almacenarlo en el objeto de selección
        seleccion.lugar = document.getElementById("opcionesLugar").value;
    });
    let comparar;
    document.getElementById("enviar-btn").addEventListener("click", function() {
        if (seleccion.personaje !== "" && seleccion.arma !== "" && seleccion.lugar !== "") {
            console.log("Selección completa:", seleccion);
            // Aquí puedes realizar alguna acción adicional si es necesario
            let comparar = compararhist(historia,seleccion)
            console.log("Los objetos son iguales:", comparar);
            if (comparar) {
                alert("Excelente, lo has conseguido. ¡Es el asesino!");
                // Redireccionar a otra página después de cerrar la alerta
                window.location.href = "../mainclue.html";
            } else {
                alert("Lo siento, no es el asesino.");
                window.location.href = "../mainclue.html";
            }
        } else {
            console.log("Por favor selecciona un asesino antes de enviar.");
            alert("Por favor selecciona un asesino antes de enviar.");
        }
        // Ocultar el menú desplegable después de seleccionar una opción y hacer clic en enviar
        document.getElementById("opcionesPersonaje").style.display = "none";
        document.getElementById("opcionesPersonaje").style.display = "none";
        document.getElementById("opcionesArma").style.display = "none";
        document.getElementById("opcionesLugar").style.display = "none";
        // Ocultar el botón de enviar después de hacer clic
        document.getElementById("enviar-btn").style.display = "none";
    });

    function compararhist(historia,seleccion){
        let comparar={
        personaje:"", 
        lugar:"",
        arma:""
        }
        console.log(seleccion)
        
        for (i in seleccion){
            comparar.personaje = seleccion.personaje
            comparar.lugar= seleccion.lugar
            comparar.arma = seleccion.arma
        }
        console.log(comparar)

        for (let key in seleccion) {
            if (seleccion.hasOwnProperty(key)) { // Verifica que la propiedad exista en seleccion
            comparar[key] = seleccion[key];
            }
        }
        
        let objetosIguales = true;
        
        for (let key in comparar) {
            if (historia[key] !== comparar[key]) {
            objetosIguales = false;
            break;
            }
        }
        return objetosIguales;
        }
        
    console.log("Valor de bandera fuera de la función de clic:", comparar);
});
