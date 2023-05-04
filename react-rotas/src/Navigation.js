import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/alunos">Alunos</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;