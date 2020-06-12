import React, { Component } from 'react';
import { Card,CardGroup,Button } from 'react-bootstrap'
class Cards extends Component {
  render() {
    return (
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="asserts/download6.jfif" height="150px" />
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
            Your attitude,will determine your altitude.
            If you think education is expensive, try ignorance.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Read more</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="asserts/download5.jfif" height="150px" />
          <Card.Body>
            <Card.Title>The Need</Card.Title>
            <Card.Text>
            If Learning  material... is designed to be highly 
            relevant and delivered in context then it is likely to be useful
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Read more</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="asserts/download4.jfif" height="150px" />
          <Card.Body>
            <Card.Title>Time Management</Card.Title>
            <Card.Text>
            “eLearning doesn't just "happen"! It requires careful planning and implementation.”
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Read more</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      

    );
  }
}

export default Cards;
