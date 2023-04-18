import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Sobre = () => {
    const location = useLocation();
    const history = useHistory();
    const {id}  = useParams();
  return (
    <div>
      <h1>Sobre {id}</h1>
      <h1>Path: {location.pathname}</h1>
      <p>Esta é a página Sobre.</p>
    </div>
  );
};

export default Sobre;