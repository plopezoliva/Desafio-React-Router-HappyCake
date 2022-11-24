import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
     <Navbar bg="danger" variant="dark">
<Container className="justify-content-start">
<Link to="/" className="text-white ms-3 text-decoration-none">
🏠Home
</Link>
<Link to="/contacto" className="text-white ms-3 text-decoration-none">
📒Contacto
</Link>
</Container>
<Navbar.Brand className="me-5">Happy Cake 🍰</Navbar.Brand>
</Navbar>

  );
};

export default NavbarMenu;
