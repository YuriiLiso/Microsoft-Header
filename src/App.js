import React from 'react';
import './general.scss';

export const App = () => {

  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="/"></a>
        <div className="surface">Surface</div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__link"><button className="nav__button">Computers</button></li>
            <li className="nav__link"><button className="nav__button">Computers for Business</button></li>
            <li className="nav__link"><button className="nav__button">Accessories</button></li>
            <li className="nav__link"><button className="nav__button">Shop now</button></li>
            <li className="nav__link"><button className="nav__button">Support</button></li>
          </ul>
        </nav>
        <div className="action">
          <div className="action__all-micro">All Microsoft</div>
          <div className="action__search">Search</div>
          <div className="action__cart">Cart</div>
          <div className="action__form">
            <div className="action__sign-in">Singn in</div>
            <div className="action__profile"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
