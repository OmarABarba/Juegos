const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/agregar_personaje', (req, res) => {
  const nuevoPersonaje = req.body;

fs.readFile('personajes.json', 'utf8', (err, data) => {
    if (err) {
    console.error(err);
    res.status(500).send('Error al leer el archivo JSON');
    return;
    }

    let personajes = JSON.parse(data);
    personajes.push(nuevoPersonaje);

    fs.writeFile('personajes.json', JSON.stringify(personajes), 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al escribir en el archivo JSON');
        return;
      }

      console.log('Nuevo personaje agregado:', nuevoPersonaje);
      res.status(200).send('¡Nuevo personaje agregado!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
