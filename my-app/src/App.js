import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu, Dropdown} from 'antd'
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
import logo from "./common/logo2.svg";

class App extends Component {
  render() {
    let aboutUsMenu = <Menu>
      <Menu.Item><Link to="/foundation">FOUNDATION</Link></Menu.Item>
      <Menu.Item><Link to="/schedule">SCHEDULE</Link></Menu.Item>
      <Menu.Item className="last-ropdown-menu-item"><Link to="/team">OUR TEAM</Link></Menu.Item>
    </Menu>;
    return (
      <div className="App">
        <Router>
          <div className="wrapper">
            <ul className="header">
              <li>
                <Dropdown overlay={aboutUsMenu}><Link to="/aboutus">ABOUT US</Link></Dropdown>
              </li>
              <li><Link to="/train">TRAIN WITH US</Link></li>
              <li><Link to="/tutorials">TUTORIALS</Link></li>
              <li className="logoTab"><Link to="/"><img className="headerLogo" src={logo}/></Link></li>
              <li><Link to="/events">EVENTS</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
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
