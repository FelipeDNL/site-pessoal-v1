import React from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <ul className="nav nav-pills nav-fill">

      <li className="nav-item">
        <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" href="/">Sobre Mim</a>
      </li>

      <li className="nav-item">
        <a className={`nav-link ${location.pathname === '/Curriculo' ? 'active' : ''}`} href="/Curriculo">Currículo</a>
      </li>

      <li className="nav-item">
        <a className={`nav-link ${location.pathname === '/Portifolio' ? 'active' : ''}`} href="/Portifolio">Portifólio</a>
      </li>

    </ul>
  );
};

export default NavBar