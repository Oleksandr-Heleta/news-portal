
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Links from './components/Links';
import {Home, Sport, Politic, Busines} from './pages';

function App() {
  return (
    
    <Router>
    <div>
      <Links/>
      <div className="content">
        <Route exact path='/' component={Home}/>
        <Route exact path='/sport' component={Sport}/>
        <Route exact path='/politic' component={Politic}/>
        <Route exact path='/busines' component={Busines}/>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
