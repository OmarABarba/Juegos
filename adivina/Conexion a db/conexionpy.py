import sqlite3
from flask import Flask, render_template

app = Flask(__name__)

def connect_db():
    conn = sqlite3.connect(r"C:\Users\barba\Documents\GitHub\Juegos\adivina\personajes.db")
    return conn

@app.route('/')
def index():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM tabla')
    data = cursor.fetchall()
    conn.close()
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
