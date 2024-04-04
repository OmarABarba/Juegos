document.addEventListener("DOMContentLoaded", function() {
    var body = document.body;
    var images = ["/imagenes/intro.jpeg", "/imagenes/juego.jpeg"]; // Rutas de las imágenes
    var currentIndex = 0;
    
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        body.style.backgroundImage = "url('" + images[currentIndex] + "')";
    }, 10000); 
});
document.getElementById("clue").addEventListener("click", function() {
    alert("¡Vamos a jugar Clue!");
    window.location.href = "clue/mainclue.html";
});

document.getElementById("ad").addEventListener("click", function() {
    alert("¡Vamos a jugar Adivina quien!");
    
});

document.getElementById("clue").addEventListener("click", function() {
    this.classList.add("clue-clic");

    setTimeout(() => {
        this.classList.remove("clue-clic");
    }, 500); 
});

document.getElementById("ad").addEventListener("click", function() {
    this.classList.add("ad-clic");

    setTimeout(() => {
        this.classList.remove("ad-clic");
    }, 500); 
});

