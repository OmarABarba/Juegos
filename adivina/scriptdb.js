const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('tu_base_de_datos.db');

// Función para recuperar los personajes de la base de datos
function obtenerPersonajes(callback) {
    const query = "SELECT * FROM personajes";
    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error al obtener los personajes:', err);
            return;
        }
        callback(rows);
    });
}

// En lugar de cargar desde JSON, obtener personajes de la base de datos
db.serialize(() => {
    obtenerPersonajes((personajes) => {
        // Tu lógica de juego aquí
    });
});

// Función para insertar un nuevo personaje en la base de datos
function insertarNuevoPersonaje(nombre, respuestas) {
    const query = "INSERT INTO personajes (nombre, respuesta1, respuesta2, ...) VALUES (?, ?, ?, ...)";
    db.run(query, [nombre, ...respuestas], (err) => {
        if (err) {
            console.error('Error al insertar nuevo personaje:', err);
            return;
        }
        console.log('Nuevo personaje insertado correctamente.');
    });
}
