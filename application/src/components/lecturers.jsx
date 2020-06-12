import React, { Component } from 'react';
import { Container,Col,Row,Image } from 'react-bootstrap'
class Lecturers extends Component {
  render() {
    return (
    <Container>
        <Row>
    <Col xs={6} style={{paddingLeft:"100px"}}>
    <a href="asserts/lect1.jpg"><h3>James</h3>
    <Image src="asserts/lect1.jpg" height="250px" width="300px"  class="rounded" /></a>
    </Col>
    <Col xs={6} style={{paddingLeft:"100px"}}>
    <a href="asserts/lect3.jpg"><h3>Willy</h3>
    <Image  src="asserts/lect3.jpg" height="250px" width="300px"  class="rounded" /></a>
    </Col>
  </Row>
            <br />
            <br />
            <Row>
    <Col xs={6} style={{paddingLeft:"100px"}}>
    <a href="asserts/lect1.jpg"><h3>Annie</h3>
    <Image src="asserts/lect4.jpg" height="250px" width="300px"  class="rounded" /></a>
    </Col>
    <Col xs={6} style={{paddingLeft:"100px"}}>
    <a href="asserts/lect2.jpg"><h3>John Doe</h3>
    <Image  src="asserts/lect2.jpg" height="250px" width="300px"  class="rounded" /></a>
    </Col>
  </Row>
    </Container>
    );
  }
}

export default Lecturers;
