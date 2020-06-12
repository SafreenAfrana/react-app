import React, { Component } from 'react';

import { Container,Col,Row,Button,Form } from 'react-bootstrap'

import './application.css'

class Contact extends Component {
  render() {
    return (
        <Container>
            <Row>
    <Col xs={6} md={4} style={{backgroundColor:"cornsilk"}}>
        <h4 style={{color:"purple"}}> News Letter</h4>
        <p>Post your Doubts</p>
        <Form>
          <input type="email" placeholder="Enter message" icon="envelope"/>
          <Button>
            <i class="fa fa-envelope"></i>
          </Button>
          
           </Form>
        
    </Col>
    <Col xs={6} md={4} style={{backgroundColor:"cornsilk"}}>
        <h4 style={{color:"purple"}}> follow us</h4>
        <p> For Further Details</p>
        <div class="social-icon">
        
          <a class="btn btn-default" href="#" ><i class="fab fa-facebook-square" style={{color:"black"}} height="10px"></i></a>
          <a class="btn btn-default" href="#" ><i class="fab fa-twitter-square" style={{color:"black"}}></i></a>
          <a  class="btn btn-default" href="#" ><i class="fab fa-google-plus-square" style={{color:"black"}}></i></a>
        </div>
    </Col>
    <Col xs={6} md={4} style={{backgroundColor:"cornsilk"}}>
        <h4 style={{color:"purple"}}>Contact Us</h4>
        <p><i class="fa fa-map-marker"> Air force Academy:<span class="number">365498 </span></i></p>
        <p> <i class="fa fa-phone"> call us:<span class="number">2334 54686 6547</span></i></p>
        <p><i class="fa fa-envelope"></i>Email us:<span class="number"><a href="mailto:@examle.com" class="info">
            elearning@example.com
        </a></span></p>
        
    </Col>
  </Row>

        </Container>
    );
  }
}

export default Contact;
