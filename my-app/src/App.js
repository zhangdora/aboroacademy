import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from "./home/Home";
import About from "./about/About";
import Events from "./events/Events";
import Contact from "./contact/Contact";
import Train from "./train/Train";
import Tutorials from "./tutorials/Tutorials";
import Foundation from "./foundation/Foundation";
import Schedule from "./schedule/Schedule";
import CoachBio from "./coachBio/CoachBio";
import Team from "./team/Team";
import logo from "./common/logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="wrapper">
            <ul className="header">
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/train">Train with us</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li className="logoTab"><Link to="/"><img className="headerLogo" src={logo}/></Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/foundation">Foundation</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/team">Our Team</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={About} ></Route>
            <Route path="/train" component={Train} ></Route>
            <Route path="/tutorials" component={Tutorials} ></Route>
            <Route path="/events" component={Events} ></Route>
            <Route path="/contact" component={Contact} ></Route>
            <Route path="/foundation" component={Foundation} ></Route>
            <Route path="/schedule" component={Schedule} ></Route>
            <Route path="/team" component={Team} ></Route>
            <Route path="/coachbio" component={CoachBio} ></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
