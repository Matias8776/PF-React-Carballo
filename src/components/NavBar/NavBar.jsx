import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/' className= 'brand'>E-commerce</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={`/categoria/AMD`} className='categoria'>AMD</NavLink>
                        <NavLink to={`/categoria/NVIDIA`} className='categoria'>NVIDIA </NavLink>
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