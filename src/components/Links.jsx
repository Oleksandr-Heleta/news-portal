import React from 'react';
import { Link } from 'react-router-dom';
import { counrties } from '../statics';

function Links({ onChangeCountry }) {
  const [country, setCountry] = React.useState(counrties[0]);

  const onSelectCountry = (e) => {
    let selectCountryId = e.target.value;
    let selectCountry;
    counrties.forEach((obj) => { if (obj.id === selectCountryId) return selectCountry = obj; });



    console.log(selectCountry);
    setCountry(selectCountry);
    onChangeCountry(selectCountry);
  };








  console.log(country.buttons)

  return (
    <header className="header">
      <Link className="header-logo header-link" to="/">
        News Portal
      </Link>

      <div>
        {
          country.buttons.map((obj, i) =>
            <Link className="header-link" to={"/" + obj.path} key={i}>
              {obj.title}
            </Link>
          )
        }
      </div>
      <div>
        <select value={country.name} onChange={onSelectCountry} >
          {counrties.map(obj => {

            if (obj.id === country.id) {
              return (<option value={obj.id} key={obj.id} selected>{obj.name}</option>);
            } else {
              return (<option value={obj.id} key={obj.id} >{obj.name}</option>);
            }
          })}
        </select>
      </div>
    </header>
  );
}

export default Links;
