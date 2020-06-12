import React, { Component } from 'react';
import { Container,Col,Row,Image } from 'react-bootstrap'
class Courses extends Component {
  render() {
    return (
        <Container>
        <Row>
    <Col xs={6} md={4}>
      
      <a href="https://en.wikipedia.org/wiki/HTML"><h3>HTML5</h3>
      <Image src="asserts/download7.png" height="250px" class="thumbnail" /></a> </Col>
    <Col xs={6} md={4}>
    <a href="https://en.wikipedia.org/wiki/CSS"><h3>CSS</h3>
      <Image src="asserts/download8.jfif" height="250px" class="thumbnail"/></a> 
    </Col>

    <Col xs={6} md={4}>
    <a href="https://en.wikipedia.org/wiki/bootstrap"><h3>Bootstrap</h3>
        <Image src="asserts/download 9.png" height="250px" class="thumbnail" /></a> 
    </Col>
  </Row>
  <br />
  <br />
  <Row>
    <Col xs={6} md={4}>
    <a href="https://en.wikipedia.org/wiki/javascript"><h3>JavaScript</h3>
    <Image alt="js" src="asserts/download10.png" class="rounded" height="250px" /></a>
    </Col>
    <Col xs={6} md={4}>
    <a href="https://en.wikipedia.org/wiki/reactjs"><h3>React JS</h3>
    <Image alt="reactjs" src="asserts/download13.png" class="rounded" height="250px" /></a>
    </Col>
    <Col xs={6} md={4}>
    <a href="https://en.wikipedia.org/wiki/jquery"><h3>JQuery</h3>
    <Image alt="jquery" src="asserts/download12.png" class="rounded" height="250px" /></a>
    </Col>
  </Row>
      </Container>
    );
  }
}

export default Courses;
