import mysql.connector

host = 'localhost'
user = 'matheus'
password = 'Simone@007'

# Conectando ao servidor MySQL
conn = mysql.connector.connect(host=host, user=user, password=password)

database = 'DB_ALUNOS'

# Criando o banco de dados
cursor = conn.cursor()
cursor.execute(f"CREATE DATABASE {database}")

# Conectando ao banco de dados recém-criado
conn = mysql.connector.connect(host=host, user=user, password=password, database=database)

# Criando a tabela "TB_ALUNOS"
cursor = conn.cursor()
cursor.execute("CREATE TABLE TB_ALUNOS (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), RA INT)")

# Inserindo registros na tabela "TB_ALUNOS"
alunos = [
    ('Matheus Cardoso de Oliveira', 2102191),
    ('Jhonny Oliver Alba de Almeida', 2102959),
    ('Nathalie Harenza Pereira', 2102695),
]

insert_query = "INSERT INTO TB_ALUNOS (nome, RA) VALUES (%s, %s)"
cursor.executemany(insert_query, alunos)
conn.commit()

conn.close()