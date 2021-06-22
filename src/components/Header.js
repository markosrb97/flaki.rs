import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import phoneIcon from '../images/iconmonstr-phone-2.svg'
import emailIcon from '../images/iconmonstr-email-2.svg'

function Header() {
    return (
        <>
            <section className='header-top'>
                <div className='container header-top-inner'>
                    <div class="contact-header">
                        <div class="phone-header">
                            <span class="phone-header-icon"><img src={phoneIcon}></img></span>
                            <a href="tel:+381 60 444-67-09" title="Telefon">+381 60 444-67-09</a>
                        </div>
                        <div class="email-header">
                            <span class="email-header-icon"><img src={emailIcon}></img></span>
                            <a href="mailto:info@doutora.rs" title="Email">info@doutora.rs</a>
                        </div>
                    </div>
                    <div className='login-register-header'>
                        <div className='register-header'>
                            <Link to='/register' className="nav-link">Register</Link>
                        </div>
                        <div className='login-header'>
                            <Link to='/login' className="nav-link">Login</Link>
                        </div>
                        
                    </div>
                </div>
            </section>

            <div className="container">
                <Navbar className='p-0' variant="light">
                    <Navbar.Brand>
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/o-nama" className="nav-link">O Nama</Link>
                        <Link to="/kontakt" className="nav-link">Kontakt</Link>
                        <Link to="/login" className="nav-link">Log in</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </div>
        </>
      );
  }
  
  export default Header;
  