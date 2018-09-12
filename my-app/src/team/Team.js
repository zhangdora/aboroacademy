import React, { Component } from 'react';
import './team.css';
import { Row, Col } from 'antd';
import coachImg from './coach.jpeg';
import Footer from "./../common/footer/Footer";

class Team extends Component {
  render() {
    return (
      <div className="team content">
        <div className="row">
          <div className="col">
            <img src={coachImg} />
            <span className="name">Blue</span>
            <span className="title">Coach</span>
          </div>
          <div className="col">
            <img src={coachImg} />
            <span className="name">Blue</span>
            <span className="title">Coach</span>
          </div>
          <div className="col">
            <img src={coachImg} />
            <span className="name">Blue</span>
            <span className="title">Coach</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={coachImg} />
            <span className="name">Blue</span>
            <span className="title">Coach</span>
          </div>
          <div className="col">
            <img src={coachImg} />
            <span className="name">Blue</span>
            <span className="title">Coach</span>
          </div>
          <div className="col">
            <img src={coachImg} />
            <span className="name">Blue</span>
            <span className="title">Coach</span>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Team;