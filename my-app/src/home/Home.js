import React, { Component } from 'react';
import './home.css';
import home1 from './home1.png';
import home2 from './home2.png';
import home3 from './home3.png';
import home4 from './home4.png';
import home5 from './home5.png';
import home6 from './home6.png';
import home7 from './home7.svg';
import ourgym from './ourgym.png';
import ourteam from './ourteam.png';
import Footer from "./../common/footer/Footer";
import { Button } from 'antd';

class Home extends Component {
  render() {
    return (
      <div className="home content">
        <img className="home1" src={home1} alt="aboro"/>
        <div className="home2wrapper">
           <div className="text">
              <span>ONE OF THE MOST RESPECTED GYM IN CHINA</span>
              <span>AND SHANGHAI'S 1st BOXING ACADEMY</span>
              <span>WITH A 7x WORLD CHAMPION COACH</span>
           </div>
           <img src={home7} className="home7"/>
        </div> 
        <div className="home3wrapper">
          <img className="home3" src={home3} alt="aboro"/>
          <div className="textwrapper">
            <img className="ourgym" src={ourgym} alt="ourgym"/>
            <div className="hometext">
              <span>Nowhere in the world will you find a gym like ours.</span>
              <span>A welcoming, supportive community environment in</span>
              <span>which you can train with a seven-time World Champion.</span>
            </div>
            <Button className="trainBtn">Start Training</Button>
          </div>
        </div>
        <div className="home4wrapper">
          <img className="home4" src={home4} alt="aboro"/>
          <div className="textwrapper">
            <div className="hometext">
              <span>"TO ME, THE ABORO</span>
              <span>FOUNDATION IS WHAT</span>
              <span>BOXING IS ABOUT:</span>
              <span>GIVING BACK"</span>
            </div>
            <Button className="trainBtn">ABORO FOUNDATION</Button>
          </div>
        </div>
        <div className="home5wrapper">
           <img className="home5" src={home5} alt="aboro"/>
           <div className="textwrapper">
              <img className="ourteam" src={ourteam} alt="ourteam"/>
              <Button className="trainBtn">MEET US</Button>
            </div>
        </div>
        <img src={home6} className="home6"/>
        <Footer/>
      </div>
    );
  }
}

export default Home;