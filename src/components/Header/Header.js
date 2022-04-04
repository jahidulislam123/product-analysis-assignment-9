import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HeaderShow from '../HeaderShow/HeaderShow';

const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Ipl 2023</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/reveiw">Reveiw</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/blog">Blogs</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  
        </div>
        
    );
};

export default Header;