import React from 'react';

const NavBar = () => {
  return (
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Sobre Mim</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Curriculo">Currículo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Portifolio">Portifólio</a>
      </li>
    </ul>
  );
};

export default NavBar