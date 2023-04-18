import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';
import Matheus from './Matheus';
import Navigation from './Navigation';

const App = () => {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route path="/matheus" component={Matheus} />
        </div>
      </Router>
    );
  };
  
  export default App;