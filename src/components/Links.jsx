import React from 'react';
import { Link } from 'react-router-dom';
import { counrties } from '../statics';
import Sort from './Sort';

function Links(props) {
  const [country, setCountry] = React.useState(counrties[0]);
  const [activeBtn, setActiveBtn] = React.useState(window.location.pathname.slice(1));

  const onActiveBtn = (path) => {
    console.log(window.location.pathname);
    setActiveBtn(path);
  };

  const onSelectCountry = (id) => {
    let selectCountryId = id;
    let selectCountry;
    counrties.forEach((obj) => {
      if (obj.id === selectCountryId) return (selectCountry = obj);
    });

    setCountry(selectCountry);
    props.onChangeCountry(selectCountry);
  };

  return (
    <header className="header">
      <Link className="header-logo header-link" to="/">
        News Portal
      </Link>

      <div>
        {country.buttons.map((obj, i) => (
          <Link
            className={activeBtn === obj.path ? 'header-link header-link_active' : 'header-link'}
            to={'/' + obj.path}
            key={i}
            onClick={() => onActiveBtn(obj.path)}>
            {obj.title}
          </Link>
        ))}
      </div>
      <div>
        <Sort
          onClickSelectCountry={onSelectCountry}
          activeCountry={country}
          counrties={counrties}
        />
      </div>
    </header>
  );
}

export default Links;
