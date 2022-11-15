import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Weather</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#features">Maps</Nav.Link>
            <Nav.Link href="#pricing">Fav Cities</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
