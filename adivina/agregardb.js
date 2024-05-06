var datosJSON = [];

// Función para leer el archivo JSON y almacenar los datos globalmente
function leerJSON() {
  // Ruta del archivo JSON
  const url = 'personajes.json';

  // Realizar la petición para obtener el archivo JSON
  return fetch(url)
    .then(response => {
      // Verificar si la respuesta es correcta
      if (!response.ok) {
        throw new Error('Error al obtener el archivo JSON');
      }
      // Parsear el cuerpo de la respuesta como JSON
      return response.json();
    })
    .then(data => {
      // Almacenar los datos JSON en la variable global
      datosJSON = data;
    })
    .catch(error => {
      // Manejar los errores
      console.error('Error:', error);
    });
}

// Ejemplo de uso de los datos globalmente
// Puedes acceder a los datosJSON en cualquier parte de tu código después de que se haya resuelto la promesa
leerJSON().then(() => {
  // Llamar a la función para abrir la base de datos una vez que se hayan obtenido los datos JSON
  abrirBaseDatos();
});

//-------------------------------ALMACENAR VALORES JSON----------------------------------------------------//

var db;

function abrirBaseDatos() {
  console.log("se esta ejecutando")
  const request = window.indexedDB.open('personajesdb');

  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore('personajes', { keyPath: 'id', autoIncrement: true });

    // Insertar datos desde un JSON
    const datos = datosJSON

    datos.forEach(function(personaje) {
      objectStore.add(personaje);
    });
  };

  request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction(['personajes'], 'readonly'); // Cambiado a 'personajes'
    const objectStore = transaction.objectStore('personajes'); // Cambiado a 'personajes'

    objectStore.openCursor().onsuccess = function(event) {
      const cursor = event.target.result;
      if (cursor) {
        console.log('id:', cursor.key);
        console.log('nombre:', cursor.value.nombre);
        // ... (otras propiedades)
        cursor.continue();
      } else {
        console.log('No hay más datos');
      }
    };
  };

  request.onerror = function(event) {
    console.error('Error al abrir la base de datos:', event.target.errorCode);
  };
}
