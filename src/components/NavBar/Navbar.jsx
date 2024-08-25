import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {

  return (
    <div className='navbar'>

      <Navbar bg="navbar" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            <LinkContainer to="/">
                <Nav.Link>Sobre Mim</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/curriculo">
                <Nav.Link>Curriculo</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/portifolio">
                <Nav.Link>Portifolio</Nav.Link>
              </LinkContainer>
            
          </Nav>

        </Navbar.Collapse>

      </Navbar>

    </div>
  );
};

export default NavBar