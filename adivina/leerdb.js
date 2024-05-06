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
    console.log("all fine2");
    verContenidoDB();
}
function crear(evento) {
    bd = evento.target.result;
    console.log("need");
    
    }
window.addEventListener("load",abrir);

    function verContenidoDB() {
        var transaction = bd.transaction(['personajes'], 'readonly');
        var objectStore = transaction.objectStore('personajes');
        var cursorRequest = objectStore.openCursor();
    
        cursorRequest.onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor) {
                console.log("ID: " + cursor.key + ", Datos: " + JSON.stringify(cursor.value));
                cursor.continue();
            } else {
                console.log("Fin de los datos");
            }
        };
    
        cursorRequest.onerror = function(event) {
            console.log("Error al abrir el cursor:", event.target.error);
        };
    }
    
    