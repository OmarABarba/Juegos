var bd;
function abrirBaseDatos() {
    const request = window.indexedDB.open('personajesdb', 2); // Versión 2
  
    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      const objectStore = db.createObjectStore('Personajes', { keyPath: 'id' });
    };
  
    request.onerror = function(event) {
      console.error('Error al abrir la base de datos:', event.target.errorCode);
    };
  
    request.onsuccess = function(event) {
      console.log('Base de datos abierta correctamente');
      const db = event.target.result;
  
      // Crear una transacción de solo lectura
      const transaction = db.transaction(['Personajes'], 'readonly');
  
      // Obtener un almacén de objetos para leer los datos
      const objectStore = transaction.objectStore('Personajes');
  
      // Abrir un cursor para recorrer los datos
      const request = objectStore.openCursor();
  
      request.onsuccess = function(event) {
        const cursor = event.target.result;
        if (cursor) {
          // Mostrar los datos del cursor en la consola
          console.log('id:', cursor.key);
          console.log('nombre:', cursor.value.nombre);
          console.log('hombre:', cursor.value.hombre);
          console.log('mujer:', cursor.value.mujer);
          console.log('es_estudiante:', cursor.value.es_estudiante);
          console.log('es_profesor:', cursor.value.es_profesor);
          console.log('-----------------------------------');
  
          cursor.continue(); // Avanza al siguiente registro
        } else {
          console.log('No hay más datos');
        }
      };
  
      request.onerror = function(event) {
        console.error('Error al abrir el cursor:', event.target.error);
      };
    };
  }
  
  // Llamar a la función para abrir la base de datos
  abrirBaseDatos();





