import React, { Component } from 'react';

import { Image, Button, Nav, Form, FormControl} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'


class Navbars extends Component {
    render() {
    return (
        
        <Navbar bg="dark" className="col-lg-12 col-md-4 col-xs-2" variant="dark">
    <Navbar.Brand href="asserts/download.png"><Image src="asserts/download.png" width="60px" height="5px" fluid />

    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#courses">Courses</Nav.Link>
      <Nav.Link href="#lectures">Lectures</Nav.Link>
      <Nav.Link href="#contacts">Contacts</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="md-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
        

        
        
        )
    
    }
}

export default Navbars;
