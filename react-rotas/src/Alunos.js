import React, { useState, useEffect } from 'react';
import './matheus.css';

class Aluno {
  constructor(id, nome, ra) {
    this.id = id;
    this.nome = nome;
    this.ra = ra;
  }
}

export default function App() {
  const [list, setList] = useState([]);
  const [nome, setNome] = useState('');
  const [ra, setRA] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('/api/alunos');
      const data = await response.json();
      const alunos = data.map((item) => new Aluno(item.id, item.nome, item.RA));
      console.log(data)
      setList(alunos);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const addAluno = async () => {
    try {
      const response = await fetch('/api/alunos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          RA: parseInt(ra),
        }),
      });

      if (response.ok) {
        setNome('');
        setRA('');
        fetchData();
      } else {
        console.log('Failed to add aluno');
      }
    } catch (error) {
      console.log('Error adding aluno:', error);
    }
  };

  const deleteAluno = async (id) => {
    try {
      const response = await fetch(`/api/alunos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchData();
      } else {
        console.log('Failed to delete aluno');
      }
    } catch (error) {
      console.log('Error deleting aluno:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Container">
      <div className="Content">
        <h2>Alunos</h2>
        <div className="AlunosGrid">
          {list.map((item) => (
            <div key={item.id} style={{marginBottom:"5px"}}>
              <strong>Aluno: {item.nome}</strong>
              <br />
              RA: {item.ra}
              <button
                className="DeleteButton"
                onClick={() => deleteAluno(item.id)}
              >
                Deletar
              </button>
            </div>
          ))}
        </div>
        <br />
        <br />
        <h2>Adicionar Aluno</h2>
        <form onSubmit={addAluno}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <br />
          <label>
            RA:
            <input
              type="text"
              value={ra}
              onChange={(e) => setRA(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
}