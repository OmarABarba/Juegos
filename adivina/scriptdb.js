
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
    compararVariableConDB(userAnswers);
    
}
function compararVariableConDB(valor) {
    var transaction = bd.transaction(['personajes'], 'readonly');
    var objectStore = transaction.objectStore('personajes');
    var cursorRequest = objectStore.openCursor();

    cursorRequest.onsuccess = function(event) {
        var cursor = event.target.result;
        if(cursor) {
            // Compara la variable con los valores de la base de datos
            if (cursor.value === valor) {
                console.log("La variable coincide con un valor en la base de datos: " + JSON.stringify(cursor.value));
            }
            cursor.continue();
        } else {
            console.log("Fin de los datos");
        }
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

  // Comenzamos el juego



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
