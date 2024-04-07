// Una vez que el archivo JSON está cargado, trabajamos con los datos
fetch('personajes.json')
  .then(response => response.json())
  .then(data => {
    const characters = data;
    let currentQuestionIndex = 0;
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
    const questionElement = document.getElementById('question');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    let userAnswers = []; 
    let characterValues = [];
    let nombreValues =[];
    let igualIndex = -1;
    let bad = 0;
    let nuevoNombre = '';

    function askQuestion() {
      questionElement.textContent = questions[currentQuestionIndex];
    }

    function nextQuestion(answer) {
      userAnswers.push(answer);
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        evaluateCharacter();
      } else {
        askQuestion();
      }
    }
    
    function evaluateCharacter() {
      const userResponses = userAnswers;
      console.log("Respuestas del usuario:", userResponses);

      characters.forEach(character => {
        let values = [
          character.hombre,
          character.mujer,
          character.es_estudiante,
          character.es_profesor,
          character.es_mago_oscuro,
          character.es_muggle,
          character.es_personaje_principal,
          character.es_personaje_secundario
        ];
        let nombres = [
          character.nombre
        ];
        nombreValues.push(nombres)
        characterValues.push(values);
        console.log(characterValues);
        console.log(nombreValues);
      });

      characterValues.forEach((values, index) => {
        console.log(`Comparando personaje ${index + 1} con las respuestas del usuario:`);
        console.log("Valores del personaje:", values);
        console.log("Respuestas del usuario:", userAnswers);

        if (values.length !== userAnswers.length) {
          console.log("Las matrices tienen longitudes diferentes, no son iguales.");
          return; 
        }

        let areEqual = true; 
        for (let i = 0; i < values.length; i++) {
          if (values[i] !== userAnswers[i]) {
            areEqual = false;
            break;
          }
        }

        if (areEqual) {
          console.log("Las matrices son iguales.");
          igualIndex = index;
        } else {
          console.log("Las matrices no son iguales.");
        }
      });

      if (igualIndex !== -1){
        const nombrePersonaje = nombreValues[igualIndex];
        console.log(`El personaje que coincide con las respuestas del usuario es: ${nombrePersonaje}`);
        const resultElement = document.getElementById('resultElement');
        resultElement.textContent = `El personaje que coincide con las respuestas del usuario es: ${nombrePersonaje}`;
        questionElement.style.display = 'none';
        reiniciarJuego();
      } else {
        console.log("Ninguna matriz fue igual.");

        nuevoNombre = prompt("No se encontró ninguna coincidencia. Por favor, ingrese el nombre del personaje correspondiente:");

        if (nuevoNombre) {

          nombreValues.push(nuevoNombre);

          const resultElement = document.getElementById('resultElement');
          resultElement.textContent = `El personaje que coincide con las respuestas del usuario es: ${nuevoNombre}`;
          const questionsContainer = document.getElementById('questionsContainer');
          questionElement.style.display = 'none';
          console.log(userAnswers);

          // Enviar los datos del nuevo personaje al servidor
          enviarRespuestasJson(nuevoNombre, userAnswers);

        } else {
          console.log("El usuario canceló la operación.");
        }  
      }
    }

    function reiniciarJuego() {
      setTimeout(() => {
        location.reload(); 
      }, 2000);
    }

    function enviarRespuestasJson(nombre, respuestas) {
      const nuevoPersonaje = {
        nombre: nombre,
        hombre: respuestas[0],
        mujer: respuestas[1],
        es_estudiante: respuestas[2],
        es_profesor: respuestas[3],
        es_mago_oscuro: respuestas[4],
        es_muggle: respuestas[5],
        es_personaje_principal: respuestas[6],
        es_personaje_secundario: respuestas[7]
      };

      fetch('http://localhost:3000/agregar_personaje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoPersonaje)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al agregar el nuevo personaje');
        }
        console.log('El nuevo personaje se ha agregado correctamente.');
        reiniciarJuego();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    // Agregar event listeners a los botones
    yesBtn.addEventListener('click', () => {
      nextQuestion(true); 
    });

    noBtn.addEventListener('click', () => {
      nextQuestion(false); 
    });

    // Empezar el juego
    askQuestion();
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
