import React, { Component } from 'react';
import { Carousel,Image } from 'react-bootstrap';
import './application.css'
class Carousels extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
    <Image
      className="d-block w-100"
      src="asserts/download3.png"
      alt="First slide"
      height="600px"

    />
    <Carousel.Caption>
      <h3>Big thing</h3>
      <p>“Online learning is not the next big thing, it is the now big thing.” – Donna J. Abernathy</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="asserts/download2.jfif"
      alt="Second slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Worth a hundred proclamations</h3>
      <p>“When it comes to the design of effective learning experiences, one provocative question is worth a hundred proclamations.” – Bernard Bull
    
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="asserts/images.png"
      alt="Third slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>The purpose is to teach</h3>
      <p>“eLearning shouldn’t be a casual joy ride on a Sunday afternoon with the cruise control engaged. 
        The sole purpose of eLearning is to teach.”  – Christopher Palm</p>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
    );
  }
}

export default Carousels;
