import React from "react";
import "./Styles/Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div className="site-header">
      <Navbar expand="lg">
        <Navbar.Collapse>
          <Nav>
            <div className="navbar">
              <Nav.Link className="link" href="/">
                Hem
              </Nav.Link>
              <Nav.Link className="link" href="/about">
                Om mig
              </Nav.Link>
              <Nav.Link className="link" href="/contact">
                Kontakt
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
