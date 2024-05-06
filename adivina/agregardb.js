var db;
function abrirBaseDatos() {
  const request = window.indexedDB.open('personajesdb', 2); // Versión 2

  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore('personajes', { keyPath: 'id', autoIncrement: true });
    // Insertar datos de prueba
    objectStore.add({ nombre: 'Harry Potter', hombre: true, mujer: false, es_estudiante: true, es_profesor: false, es_mago_oscuro: false, es_muggle: false, es_personaje_principal: true, es_personaje_secundario: false });
    objectStore.add({ nombre: 'Severus Snape', hombre: true, mujer: false, es_estudiante: false, es_profesor: true, es_mago_oscuro: true, es_muggle: false, es_personaje_principal: false, es_personaje_secundario: true });
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
}

abrirBaseDatos();
