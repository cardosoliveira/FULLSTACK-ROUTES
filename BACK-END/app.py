from flask import Flask, jsonify, request

app = Flask(__name__)

alunos = [
    {
        'id': 1,
        'nome': 'Matheus Cardoso de Oliveira',
        'RA': 2102191
    },
    {
        'id': 2,
        'nome': 'Leonardo da Cunha Farias',
        'RA': 2102416
    },
    {
        'id': 3,
        'nome': 'Jhonny Oliver Alba de Almeida',
        'RA': 2102959
    },
    {
        'id': 4,
        'nome': 'Nataniel Nunes de Lima',
        'RA': 2102545
    },
    {
        'id': 5,
        'nome': 'Nathalie Harenza Pereira',
        'RA': 2102695
    },
    {
        'id': 6,
        'nome': 'Yuri Komesu Augusto',
        'RA': 2102029
    },
]

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(alunos)

if __name__ == '__main__':
    app.run(debug=True)
