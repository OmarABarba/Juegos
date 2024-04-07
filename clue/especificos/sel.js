
document.addEventListener("DOMContentLoaded", function() {
    // Agregar eventos de clic a los botones
    document.getElementById("ubicacionBtn").addEventListener("click", function() {
        actualizarFondo("url('/imagenes/mapa.jpeg')", "50% auto"); 
        mostrarContenido("Ubicación: Bosque Encantado");
    });

    document.getElementById("personajeBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/personajes2.jpeg')");
        mostrarContenido("Personajes: Bruja, Ogro, Cazador, Mago, Hobbit");
    });

    document.getElementById("armaBtn").addEventListener("click", function() {
        actualizarFondo("url('/clue/especificos/imagenes/armas.jpeg')"); 
        mostrarContenido("Armas: Daga, colmillo de lobo, arco, epada, poscion venenosa, solo una pieza de cada cosa");
    });

    
    function actualizarFondo(fondo) {
        document.body.style.backgroundImage = fondo;
    }
    function actualizarFondo(fondo, tamaño) {
        document.body.style.backgroundImage = fondo;
        document.body.style.backgroundSize = tamaño;
    }

    
    function mostrarContenido(contenido) {
        document.querySelector("h2").textContent = contenido;
    }
});


