var db;
function iniciarDB(){
    var solicitud = indexedDB.open("personajesdb");
    solicitud.addEventListener("error",MostrarError);
    solicitud.addEventListener("success",Comensar);
    solicitud.addEventListener("upgradeneeded",CrearAlmacen);
}
