from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'  # Host do seu banco de dados
app.config['MYSQL_USER'] = 'matheus'  # Usuário do seu banco de dados
app.config['MYSQL_PASSWORD'] = 'Simone@007'  # Senha do seu banco de dados
app.config['MYSQL_DB'] = 'DB_ALUNOS'  # Nome do seu banco de dados

mysql = MySQL(app)

@app.route('/api/alunos', methods=['GET'])
def get_alunos():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM TB_ALUNOS")
    data = cur.fetchall()
    cur.close()

    alunos = []
    for item in data:
        aluno = {
            'id': item[0],
            'nome': item[1],
            'RA': item[2]
        }
        alunos.append(aluno)

    return jsonify(alunos)

@app.route('/api/alunos', methods=['POST'])
def add_aluno():
    nome = request.json['nome']
    RA = request.json['RA']
    
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO TB_ALUNOS (nome, RA) VALUES (%s, %s)", (nome, RA))
    mysql.connection.commit()
    cur.close()
    
    return jsonify({'message': 'Aluno adicionado com sucesso'})


@app.route('/api/alunos/<int:id>', methods=['DELETE'])
def delete_aluno(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM TB_ALUNOS WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Aluno excluído com sucesso'})

if __name__ == '__main__':
    app.run(debug=True)