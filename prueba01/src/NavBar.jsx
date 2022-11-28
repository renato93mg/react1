import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Hombres</Nav.Link>
            <Nav.Link href="#features">Mujeres</Nav.Link>
            <Nav.Link href="#pricing">Niños</Nav.Link>
          </Nav>

          <CartWidget width="40px" height="40px" />

        </Container>
      </Navbar>
      <ItemListContainer greeting="Hola a todos" />
    </>
  );
}

