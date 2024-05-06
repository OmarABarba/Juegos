
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
var valuesArray = [];

const questionElement = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function askQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
    verContenidoDB();
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
    
    comparar();
    
}
function comparar() {
    let usuario=[{
        hombre:"", 
        mujer:"",
        arma:"",
        es_estudiante:"",
        es_profesor:"",
        es_mago_oscuro: "", 
        es_muggle: "", 
        es_personaje_principal: "", 
        es_personaje_secundario:""
        
        }]
        for (let i = 0; i < usuario.length; i++) {
            usuario[i].hombre = userAnswers[0];
            usuario[i].mujer = userAnswers[1];
            usuario[i].arma = userAnswers[2];
            usuario[i].es_estudiante = userAnswers[3];
            usuario[i].es_profesor = userAnswers[4];
            usuario[i].es_mago_oscuro = userAnswers[5];
            usuario[i].es_muggle = userAnswers[6];
            usuario[i].es_personaje_principal = userAnswers[7];
            usuario[i].es_personaje_secundario = userAnswers[8];
        }
        
    
    userAnswers
    console.log("Respuestas del usuario:", usuario);
    console.log("Valores de la base de datos:", valuesArray);
    

}


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
            // console.log(valuesArray); // Imprimir la matriz completa
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
