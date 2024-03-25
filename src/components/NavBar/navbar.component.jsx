import React from 'react';
import { Button,Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./navbar.style.css";
import { FiShoppingCart } from "react-icons/fi";
import "../../App.css";


const Navbar = ({ toggleSidebar }) => {
  return (
    <div>
      <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
        <Container>
          <Nav className='container-fluid'>
            <Nav.Link className='custom-button ms-auto' as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About" className='custom-button'>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" className='custom-button'>
              Contact
            </Nav.Link>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              {/* Your toggle button content */}
              <Button
                className='custom-button sidebar-toggle'
                style={{ width: "3rem", height: "3rem", padding: "0.1rem" }}
                variant='outline'
              >
                <FiShoppingCart className='sidebar-toggle' onClick={toggleSidebar}/>
              </Button>
            </div>
          </Nav>
        </Container>
      </NavbarBs>
    </div>
  );
};

export default Navbar;
