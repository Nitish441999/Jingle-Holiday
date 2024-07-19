import React, { useEffect } from 'react';
// import { Link } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  useEffect(() => {
    const textElement = document.querySelector('#brand h2');

    if (textElement) {
      textElement.innerHTML = textElement.innerText
        .split('')
        .map((char, i) => `<span style={{transform: 'rotate(${i * 8.3}deg)'}}>${char}</span>`)
        .join('');
    }
  }, []);

  return (
    <div>
      
    <Navbar expand="lg" className=" fixed-top">
      <Container fluid>
        <Navbar.Brand id="brand" href="#"> <h2>Jingle Holiday Bazar</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            id="nav-menu"
            navbarScroll
          >
               <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="Domestic" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/north">NORTH</NavDropdown.Item>
                <NavDropdown.Item href="/west">WEST</NavDropdown.Item>
                <NavDropdown.Item href="/east">EAST</NavDropdown.Item>
                <NavDropdown.Item href="/south">SOUTH</NavDropdown.Item>
              
              
            </NavDropdown>

                <NavDropdown title="International" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/thailand">Thailand</NavDropdown.Item>
                <NavDropdown.Item href="/belgium">Belgium</NavDropdown.Item>
                <NavDropdown.Item href="/canada">Canada</NavDropdown.Item>
                <NavDropdown.Item href="/singapur">Singapore</NavDropdown.Item>
                <NavDropdown.Item href="/germany">Germany</NavDropdown.Item>
                <NavDropdown.Item href="/maldives">Maldives</NavDropdown.Item>
                <NavDropdown.Item href="/iceland">Iceland</NavDropdown.Item>
                <NavDropdown.Item href="/malaysia">Malaysia</NavDropdown.Item>
                <NavDropdown.Item href="/Switzerland">Switzerland</NavDropdown.Item>
                <NavDropdown.Item href="/nepal">Nepal</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  View More Place
                </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Page" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/destinations">Destination</NavDropdown.Item>
                <NavDropdown.Item href="hotels">Hotels</NavDropdown.Item>
                <NavDropdown.Item href="gallery">Gallery</NavDropdown.Item>
              
              
            </NavDropdown>
            <NavDropdown title="Package" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/domesticpackage">
                  Domestic Packages
                </NavDropdown.Item>
                <NavDropdown.Item href="/internationalpackages">
                  International packages
                </NavDropdown.Item>
              
              
            </NavDropdown>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
 



      {/* <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Jingle Holiday Bazar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" id="nav-mainu" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <NavDropdown title=" Domestic" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">NORTH</NavDropdown.Item>
                <NavDropdown.Item href="#action3">WEST</NavDropdown.Item>
                <NavDropdown.Item href="#action3">EAST</NavDropdown.Item>
                <NavDropdown.Item href="#action3">SOUTH</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title=" International" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/thailand">Thailand</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Belgium</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Canada</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Singapore</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Germany</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Maldives</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Iceland</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Malaysia</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Switzerland</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Nepal</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  View More Place
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title=" Page" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Destination</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Hotels</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Gallery</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Package" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Domestic Packages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  International packages
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <nav className="navbar navbar-expand-lg  position-fixed w-100 " style={{top:"0",left:"0", border:"2px solid red"}}>
  <div className="container-fluid" id='nav-menu' style={{height:"100%", display:"flex", alignItems:"center", justifyContent:"space-around",}}>
    <Link className="navbar-brand" to="/">Jingle Holiday Bazar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/contact">Contact Us</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Domestic
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">NORTH</Link></li>
            <li><Link className="dropdown-item" to="/">WEST</Link></li>
            <li><Link className="dropdown-item" to="/">EAST</Link></li>
            <li><Link className="dropdown-item" to="/">SOUTH</Link></li>
          </ul>
        </li>



        <li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            International
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/thailand">Thailand</Link></li>
            <li><Link className="dropdown-item" to="/">Belgium</Link></li>
            <li><Link className="dropdown-item" to="/">Canada</Link></li>
            <li><Link className="dropdown-item" to="/">Dubai</Link></li>
            <li><Link className="dropdown-item" to="/">Singapore</Link></li>
            <li><Link className="dropdown-item" to="/">Germany</Link></li>
            <li><Link className="dropdown-item" to="/">Maldives</Link></li>
            <li><Link className="dropdown-item" to="/">Iceland</Link></li>
            <li><Link className="dropdown-item" to="/">Malaysia</Link></li>
            <li><Link className="dropdown-item" to="/">Switzerland</Link></li>
            <li><Link className="dropdown-item" to="/">Nepal</Link></li>
            <li><Link className="dropdown-item" to="/">View More Place</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Page
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Destination</Link></li>
            <li><Link className="dropdown-item" to="/">Hotels</Link></li>
            <li><Link className="dropdown-item" to="/">Gallery</Link></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Package
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Domestic Packages</Link></li>
            <li><Link className="dropdown-item" to="/">International packages</Link></li>
            
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav> */}
    </div>
  );
};

export default Header;
