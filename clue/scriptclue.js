document.addEventListener("DOMContentLoaded", function() {
    var contenido = [
        "Dentro del juego vas a encontrar 5 localidades, 5 personajes y 5 armas tu debes de detectar la forma por la que se encuentra al asecino.",
        "Despues de haber pasado por eso debes de pasar al area donde vas a decidir si vas a ir al mapa o a ver a los personajes y ver sus historias.",
        "Teniendo ahora las reglas pasemos a la historia todas las historias empiezan de la misma manera bien vamos a ello ahora presiona la puerta que apareció."

    ];
    var currentIndex = 0;
    var parrafo = document.getElementById("parrafo");
    var botonSeleccion = document.getElementById("boton-select");
    var cambioCompletado = false;

    function cambiarParrafo() {
        parrafo.classList.add("fade-out");
        setTimeout(function() {
            parrafo.textContent = contenido[currentIndex];
            parrafo.classList.remove("fade-out");
            currentIndex = (currentIndex + 1) % contenido.length;
            if (currentIndex === 0) {
                cambioCompletado = true;
                botonSeleccion.style.display = "block";
            }
        },500);
    }    
    var intervalID = setInterval(cambiarParrafo, 2000);

    botonSeleccion.addEventListener("click", function() {
        if (cambioCompletado) {
            window.location.href = "especificos/historia.html";
        }
    });
});

