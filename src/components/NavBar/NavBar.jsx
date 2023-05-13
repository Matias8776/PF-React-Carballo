import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <Nav.Link href="#AMD">AMD</Nav.Link>
                        <Nav.Link href="#Nvidia">Nvidia</Nav.Link>
                    </Nav>
                    <Nav>
                        <a href="#Carrito" className="contador">
                            <CartWidget />
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;