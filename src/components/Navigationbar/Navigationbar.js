import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FaLaptopCode, FaShoppingCart } from "react-icons/fa";



const Navigationbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><FaLaptopCode/>OpelTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Equipos" id="basic-nav-dropdown0">
              <NavDropdown.Item href="#action/3.1">PC Escritorio</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Notebooks</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Componentes Internos" id="basic-nav-dropdown1">
              <NavDropdown.Item href="#action/3.1">Procesadores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Placas de vídeo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Memorias RAM</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Periféricos" id="basic-nav-dropdown2">
              <NavDropdown.Item href="#action/3.1">Monitores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Teclados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Mouse</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Auriculares</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="light"><FaShoppingCart/> 0</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;