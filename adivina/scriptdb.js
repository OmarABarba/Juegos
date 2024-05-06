let db;
const request = window.indexedDB.open('personajes');

request.onerror = function(event) {
  console.error('Error al abrir la base de datos:', event.target.errorCode);
};

request.onsuccess = function(event) {
  console.log('Base de datos abierta correctamente');
  db = event.target.result;

  const transaction = db.transaction(['personajes'], 'readonly');
  const objectStore = transaction.objectStore('personajes');
  const getRequest = objectStore.getAll();

  getRequest.onsuccess = function(event) {
    const data = event.target.result;
    console.log('Datos recuperados correctamente:', data);
  };
};

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('personajes', { keyPath: 'id', autoIncrement:true });
  
  console.log('Base de datos creada correctamente');
  // Aquí puedes agregar la lógica para crear y poblar la base de datos
};



