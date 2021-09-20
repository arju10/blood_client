import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
const Topbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">Blood Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto ">
              <Nav.Link href="/donate">Donate</Nav.Link>
              <Nav.Link href="/request">Request For Blood</Nav.Link>
              <Nav.Link href="/donorList">Donor List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="/register">
                Login/Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
