document.addEventListener("DOMContentLoaded", function() {
    var contenido = [
        { imagen: "/clue/especificos/imagenes/bosque.jpeg", texto: "Cuando de pronto apareces en la entrada a un bosque no sabes que es lo que esta pasando pero se escucha una musica dentro de la puerta donde entras para ver que esta pasando y te encuentras con 5 peculiares personajes. " },
        { imagen: "/clue/especificos/imagenes/personajes2.jpeg", texto: "Los personajes que estan en frente tuya son: Una bruja el cual lleva con una cadena a un Ogro donde la Bruja dice 'No tengas miedo el sabe comportarse bueno la mayor parte del tiempo', Un cazador el cual lleva un escudo, un Mago y un Hobbit." },
        { imagen: "/clue/especificos/imagenes/caminos2.jpeg", texto: "Del otro lado del que estaban los personajes estan 5 caminos los cuales llevana diferentes partes del bosque, los personajes toman su camino por diferentes partes del bosque.Cuando de pronto todo se pone en silecion y desaparece la luz y se escucha a alguien gritar.  " }, {}
    ];

    var currentIndex = 0;
    var imagenElement = document.getElementById("imagen");
    var parrafoElement = document.getElementById("parrafo");
    var videoElement = document.getElementById("video");
    var todasLasImagenesMostradas = false;
    var audioElement = document.getElementById("background-music");

    function mostrarVideoDespuesDeContenido() {
        if (currentIndex >= contenido.length && !todasLasImagenesMostradas) {
            todasLasImagenesMostradas = true;
            mostrarVideo();
        }
    }

    function cambiarContenido() {
        if (currentIndex < contenido.length) {
            var contenidoActual = contenido[currentIndex];
            imagenElement.src = contenidoActual.imagen;
            parrafoElement.textContent = contenidoActual.texto;
            currentIndex++;
            mostrarVideoDespuesDeContenido();
        } else {
            mostrarVideoDespuesDeContenido(); 
        }
    }

    function mostrarVideo() {
        imagenElement.style.display = "none";
        parrafoElement.style.display = "none";
        videoElement.style.display = "block";
        videoElement.play();
        videoElement.addEventListener("ended", function() {
            window.location.href = "seleccion.html";
        });
    }

    setInterval(cambiarContenido, 5000);

    audioElement.play();

    // Pausa la música después de 10 segundos
    setTimeout(function() {
        audioElement.pause();
    }, 10000);
});
