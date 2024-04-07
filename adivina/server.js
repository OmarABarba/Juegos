const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/agregar_personaje') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const nuevoPersonaje = JSON.parse(body);
      leerYAgregarPersonaje(nuevoPersonaje);
      res.statusCode = 200;
      res.end('Personaje agregado correctamente');
    });
  } else {
    res.statusCode = 404;
    res.end('Ruta no encontrada');
  }
});

const leerYAgregarPersonaje = (nuevoPersonaje) => {
  fs.readFile('personajes.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return;
    }

    let personajes = JSON.parse(data);
    personajes.push(nuevoPersonaje);

    fs.writeFile('personajes.json', JSON.stringify(personajes, null, 2), (err) => {
      if (err) {
        console.error('Error al escribir el archivo JSON:', err);
      } else {
        console.log('El nuevo personaje se ha agregado correctamente.');
      }
    });
  });
};

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});