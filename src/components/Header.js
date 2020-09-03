import React from 'react'
import {Link} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Card } from 'react-bootstrap';


export default function Header() {
    return (
       


<Navbar   collapseOnSelect expand='sm' bg="secondary" variant="dark">
  <Navbar.Brand  href="#home">Weather App</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  style={{direction:'rtl'}}  className="ml-auto" >
      <Nav.Link   style={{ textAlign:'right' ,fontSize:'20px'}} as={Link} to='/' href="b" >Home</Nav.Link> 
        <Nav.Link  style={{textAlign:'right',fontSize:'20px'}} as={Link} to='/f' href="b" >Favorites</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>



        



    )
}
