document.addEventListener("DOMContentLoaded", function() {
    var contenido = [
        "Dentro del juego vas a encontrar 5 localidades, 5 personajes y 5 armas tu debes de detectar la forma por la que se encuentra al asecino.",
        "Después de haber pasado por eso debes de pasar al área donde vas a decidir si vas a ir al mapa o a ver a los personajes y ver sus historias.",
        "Teniendo ahora las reglas pasemos a la historia todas las historias empiezan de la misma manera bien vamos a ello ahora presiona la puerta que apareció."
    ];
    
    var currentIndex = 0;
    var parrafo = document.getElementById("parrafo");
    var botonSeleccion = document.getElementById("boton-select");

    // Mostrar la puerta desde el inicio
    botonSeleccion.style.display = "block";

    function cambiarParrafo() {
        parrafo.classList.add("fade-out");
        setTimeout(function() {
            parrafo.textContent = contenido[currentIndex];
            parrafo.classList.remove("fade-out");
            currentIndex = (currentIndex + 1) % contenido.length;
        }, 500);
    }    

    var intervalID = setInterval(cambiarParrafo, 10000);

    botonSeleccion.addEventListener("click", function() {
        window.location.href = "especificos/historia.html";
    });
});

