
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Switch>
            {
              country.buttons.map((obj, index) => <Route key={index} exact path={'/' + obj.path} component={() => <Content category={obj.path} country={country.id} />} />)
            }
            <Route render={() => <p style={{ textAlign: 'center' }}>Not Found</p>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
