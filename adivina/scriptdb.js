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
    console.log("all fine")
}
function crear(evento) {
    bd = evento.target.result;
    agregardb();
    }

window.addEventListener("load",abrir);
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
    comparardb(userAnswers);
    
}
function comparardb(userAnswers) {
    var transaccion = bd.transaction(["personajes"], "readonly");
    var almacen = transaccion.objectStore("personajes");
    var solicitud = almacen.get(clave);

    solicitud.addEventListener("success", function(event) {
        var objeto = event.target.result;
        if (objeto) {
            var valorAlmacenado = objeto.valor;
            // Aquí puedes comparar valorAlmacenado con las respuestas del usuario, por ejemplo:
            if (arraysIguales(userAnswers, valorAlmacenado)) {
                console.log("Las respuestas del usuario son iguales al valor almacenado en IndexedDB.");
            } else {
                console.log("Las respuestas del usuario no son iguales al valor almacenado en IndexedDB.");
            }
        } else {
            console.log("No se encontró ningún objeto con la clave especificada en IndexedDB.");
        }
    });
}

// Función para comparar dos arrays
function arraysIguales(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


yesBtn.addEventListener('click', () => {
    nextQuestion(true);
});

noBtn.addEventListener('click', () => {
    nextQuestion(false);
});

  // Comenzamos el juego
askQuestion();



