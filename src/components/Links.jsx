import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <header className="header">
      <Link className="header-logo header-link" to="/">
        News Portal
      </Link>

      <div>
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/politic">
          politic
        </Link>
        <Link className="header-link" to="/busines">
          busines
        </Link>
        <Link className="header-link" to="/sport">
          sport
        </Link>
      </div>
      <div>
        <input type="text" />
        <button>find</button>
      </div>
    </header>
  );
}

export default Links;
