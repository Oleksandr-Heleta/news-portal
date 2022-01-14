
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Links from './components/Links';
import { counrties } from './statics';
import { Content } from './pages';


function App() {
  const [country, setCountry] = React.useState(counrties[0]);
  function onChangeCountry(selectCountry) {
    setCountry(selectCountry);
  }
  return (

    <Router>
      <div>
        <Links onChangeCountry={onChangeCountry} />
        <div className="content">
          {
            country.buttons.map(obj => <Route exact path={'/' + obj.path} component={() => <Content category={obj.path} country={country.id} />} />)
          }

        </div>
      </div>
    </Router>
  );
}

export default App;
