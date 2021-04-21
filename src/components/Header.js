import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from '../images/logo.png';

function Header() {
    return (
      <div className="container">
            <div className="row">
                <Navbar collapseOnSelect expand="lg" className="w-100 my-navbar-links">
                    <Navbar.Brand>
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/o-nama" className="nav-link">O Nama</Link>
                            <Link to="/kontakt" className="nav-link">Kontakt</Link>
                        </Nav>
                        <Nav>
                            <Link to="/login" className="nav-link">Log in</Link>
                            <Link to="/register" className="nav-link">Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
      </div>
    );
  }
  
  export default Header;
  