import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/navbar.jsx';
import Carousels from './components/carousel.jsx';
import Cards from './components/card.jsx'
import Courses from './components/courses';
import Lecturers from './components/lecturers';
import Contact from './components/Contacts';
import './components/application.css'

class App extends Component {
  render() {
    return (
      <div>
      <Navbars />
      
      <Carousels />
      <br />
      <div  class="col-md-12">
                        <h1 style={{color: "crimson"}}>About Us</h1>
      </div>
      <br/>
      <Cards />
      <br />
      <div  class="col-md-12">
                        <h1 style={{color: "darkblue"}}>Courses</h1>
      </div>
      <br/>
      <Courses />
      <br />
      <br />
      <div  class="col-md-12">
                        <h1 style={{color: "black"}}>Lecturers</h1>
      </div>
      <br/>
      <Lecturers />
      <br />
      <br />
      <div  class="col-md-12">
                        <h1 style={{color:"darkblue"}}>Connect Us</h1>
      </div>
      <br/>
      <Contact />
      <br />
      </div>
    );
  }
}



export default App;
