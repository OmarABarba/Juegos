function comprobaciondb(nombreDB, archivoJS) {
    // Intentar abrir la base de datos
    var solicitud = window.indexedDB.open(nombreDB);

    // Manejar el evento de éxito cuando la base de datos existe
    solicitud.onsuccess = function(event) {
        console.log("La base de datos existe, no se ejecutará otro archivo JavaScript.");
    };

    // Manejar el evento de error cuando la base de datos no existe
    solicitud.onerror = function(event) {
        // Si hay un error al abrir la base de datos, ejecutar el archivo JavaScript especificado
        var script = document.createElement('script');
        script.src = archivoJS;
        document.head.appendChild(script);
    };
}

// Llamar a la función con el nombre de la base de datos y el nombre del archivo JavaScript
comprobaciondb("personajesdb", "agregardb.js");





const questions = [
    "¿Es hombre?",
    "¿Es mujer?",
    "¿Es un estudiante de Hogwarts?",
    "¿Es un profesor en Hogwarts?",
    "¿Es un mago oscuro?",
    "¿Es un muggle?",
    "¿Es un personaje principal?",
    "¿Es un personaje secundario?"
  ];
