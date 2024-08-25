import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation from react-router-dom
import '../styles/navbar.css';

const NavBar = () => {
    const location = useLocation();

    return (
        <>
            <div className="navbar-container">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/" className="logo">SIYA.</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <NavLink
                                    to="/about"
                                    className="bar-links"
                                    activeClassName="active"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/projects"
                                    className="bar-links"
                                    activeClassName="active"
                                >
                                    Projects
                                </NavLink>
                                <NavLink to="/contact">
                                    <Button
                                        variant="outline-success"
                                        className={`btn-contact ${location.pathname === '/contact' ? 'active' : ''}`}
                                    >
                                        Contact me
                                    </Button>
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default NavBar;
