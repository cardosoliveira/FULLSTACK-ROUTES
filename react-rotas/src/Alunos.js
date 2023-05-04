import React, { useState, useEffect } from 'react';
import '../src/matheus.css';

export default function Rick() {

  const [list, setList] = useState([]);

  const getApiData = async () => {
    const response = await fetch("/api/data").then((response) =>
      response.json()
    );
    setList(response);
    console.log(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className='Container'>
      <div className='Content'>
        {list.map((item, i) => (
          <>
            <header>
              <p><strong>Alunos: {item.nome}</strong></p>
            </header>
            <div className='Form'>
              <section>
                <div>
                  <p style={{ fontSize: '15px' }}>
                    RA: {item.RA}
                  </p>
                </div>
              </section>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}