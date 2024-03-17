import React from 'react';
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./navbar.style.css";

const Navbar = () => {
  return (
    <div>
      <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
        <Container >
          <Nav className='container-fluid'>
            <Nav.Link className='custom-button ms-auto' as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About" className='custom-button '>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" className='custom-button '>
              Contact
            </Nav.Link>
            
            <Button className='custom-button'
            style={{ width: "3rem", height: "3rem" }}
            variant='outline'
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.5" cy="18.5" r="1.5" />
              <circle cx="9.5" cy="18.5" r="1.5" />
              <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
            </svg>
          </Button>
         
          </Nav>
          
        </Container>
      </NavbarBs>
    </div>
  );
};

export default Navbar;
