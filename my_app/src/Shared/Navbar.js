
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import NavbarLogin from './NavbarLogin';

function NavBar() {
  return (
    <div>
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/page1">Link</Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products/new">New Product</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/admin">
                Admin
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
        <NavbarLogin/>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default NavBar;