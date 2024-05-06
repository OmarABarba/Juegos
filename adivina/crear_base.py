import sqlite3
import json

# Nombre del archivo JSON
archivo_json = r"C:\Users\barba\Documents\GitHub\Juegos\adivina\personajes.json"

# Nombre de la base de datos SQLite
nombre_base_datos = "personajes.db"

# Función para crear la tabla y insertar los datos
def crear_tabla_insertar_datos():
    # Conectar a la base de datos
    conexion = sqlite3.connect(nombre_base_datos)
    cursor = conexion.cursor()

    # Crear la tabla "Personajes"
    cursor.execute('''CREATE TABLE IF NOT EXISTS Personajes (
                        id INTEGER PRIMARY KEY,
                        nombre TEXT,
                        hombre INTEGER,
                        mujer INTEGER,
                        es_estudiante INTEGER,
                        es_profesor INTEGER,
                        es_mago_oscuro INTEGER,
                        es_muggle INTEGER,
                        es_personaje_principal INTEGER,
                        es_personaje_secundario INTEGER
                    )''')

    # Leer los datos del archivo JSON
    with open(archivo_json) as archivo:
        datos_personajes = json.load(archivo)

    # Insertar los datos en la tabla
    for personaje in datos_personajes:
        cursor.execute('''INSERT INTO Personajes 
                        (nombre, hombre, mujer, es_estudiante, es_profesor, es_mago_oscuro, es_muggle, es_personaje_principal, es_personaje_secundario)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''', 
                    (personaje['nombre'], personaje['hombre'], personaje['mujer'], personaje['es_estudiante'], 
                    personaje['es_profesor'], personaje['es_mago_oscuro'], personaje['es_muggle'], 
                    personaje['es_personaje_principal'], personaje['es_personaje_secundario']))

    # Confirmar los cambios y cerrar la conexión
    conexion.commit()
    conexion.close()

# Llamar a la función para crear la tabla e insertar los datos
crear_tabla_insertar_datos()

