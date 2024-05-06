
// ----------------------------------------------Adivina--------------------------------------//
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

let currentQuestionIndex = 0; // Inicializamos el índice de la pregunta actual
let userAnswers = [];
let valuesArray = [];

const questionElement = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function askQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
    
}

function nextQuestion(answer) {
    userAnswers.push(answer);
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        finishGame();
    } else {
        askQuestion();
    }
}



function finishGame() {
    console.log("Respuestas del usuario:", userAnswers);
    verContenidoDB();
    // console.log(valuesArray)
    comparar();
    
}
// console.log("Valores de la base de datos:", valuesArray);

function comparar() {
    let usuario = {
        hombre: userAnswers[0],
        mujer: userAnswers[1],
        es_estudiante: userAnswers[2],
        es_profesor: userAnswers[3],
        es_mago_oscuro: userAnswers[4],
        es_muggle: userAnswers[5],
        es_personaje_principal: userAnswers[6],
        es_personaje_secundario: userAnswers[7]
    };

    console.log("Respuestas del usuario:", usuario);
    console.log("Respuestas db:", valuesArray);

    if (valuesArray.length === 0) {
        console.log("Aún no se han cargado los datos de la base de datos.");
        return;
    }

    const valoresBooleanosPorIndice = valuesArray.map(objeto => {
        return Object.values(objeto).filter(valor => typeof valor === 'boolean');
    });

    console.log("Valores booleanos por índice:", valoresBooleanosPorIndice);

    const indice = encontrarVectorEnMatriz(userAnswers, valoresBooleanosPorIndice);
    if (indice !== -1) {
        console.log("El vector se encontró en la fila:", indice);
        const nombrePersonaje = valuesArray[indice].nombre; // Suponiendo que el nombre del personaje está almacenado en la propiedad 'nombre' de cada objeto en valuesArray
        alert("El personaje es: " + nombrePersonaje);
    } else {
        console.log("El vector no se encontró en la matriz.");
    }
}




function encontrarVectorEnMatriz(vector, matriz) {
    for (let i = 0; i < matriz.length; i++) {
        const fila = matriz[i];
        if (fila.length !== vector.length) {
            continue; // Si las longitudes no son iguales, pasa a la siguiente fila
        }
        let esIgual = true;
        for (let j = 0; j < fila.length; j++) {
            if (fila[j] !== vector[j]) {
                esIgual = false;
                break; // Si un elemento no coincide, marca como no igual y sal del bucle
            }
        }
        if (esIgual) {
            return i; // Si encontramos una fila igual al vector, devolvemos su índice
        }
    }
    return -1; // Si no se encuentra el vector en la matriz, devolvemos -1
}

let isFinishGameCalled = false;
function verContenidoDB() {
    var transaction = bd.transaction(['personajes'], 'readonly');
    var objectStore = transaction.objectStore('personajes');
    var cursorRequest = objectStore.openCursor();
    
    cursorRequest.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            valuesArray.push(cursor.value); // Agregar los datos a la matriz
            cursor.continue();
        } else {
            console.log("Fin de los datos");
            if (!isFinishGameCalled) {
                finishGame(); // Llamar finishGame solo cuando todos los datos están listos y si no ha sido llamado antes
                isFinishGameCalled = true; // Establecer la bandera a true para indicar que finishGame() ya fue llamado
            }
        }
    return valuesArray;
    };

    cursorRequest.onerror = function(event) {
        console.log("Error al abrir el cursor:", event.target.error);
    };
}




yesBtn.addEventListener('click', () => {
    nextQuestion(true);
});

noBtn.addEventListener('click', () => {
    nextQuestion(false);
});



//---------------------CONEXION------------------//
var bd;
function abrir(){
    var solicitud = indexedDB.open("personajesdb");
    solicitud.addEventListener("error",Mosterror);
    solicitud.addEventListener("success",comenzar);
    solicitud.addEventListener("upgradeneeded",crear);
}

function Mosterror(evento){
    alert("Tenemos error");
}
function comenzar(evento){
    bd = evento.target.result;
    console.log("all fine");
    askQuestion();
    
}
function crear(evento) {
    bd = evento.target.result;
    agregardb();
    }

window.addEventListener("load",abrir);
