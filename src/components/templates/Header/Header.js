import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/" className="logo">
            Carborit
          </Link>
          <p className="slogan">A simple vehicle bookmarking app.</p>
        </div>

        <div className="header-navigation">
          <Link to="/favorites" className="myfavorites">
            Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
