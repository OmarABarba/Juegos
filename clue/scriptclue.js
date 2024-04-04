document.addEventListener("DOMContentLoaded", function() {
    var contenido = [
        "Primer texto alternativo.",
        "Segundo texto alternativo.",
        "Tercer texto alternativo."
    ];

    var currentIndex = 0;

    setInterval(function() {
        // Incrementa el índice del contenido y asegúrate de que no exceda la longitud del array
        currentIndex = (currentIndex + 1) % contenido.length;
        // Obtén el párrafo por su id y actualiza su contenido con el texto correspondiente en el array
        document.getElementById("parrafo").textContent = contenido[currentIndex];
    }, 5000); // Cambiar el contenido cada 5 segundos (5000 milisegundos)
});
