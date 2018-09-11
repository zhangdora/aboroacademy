import React, { Component } from 'react';
import './home.css';
import home1 from './home1.png';
import home2 from './home2.png';
import home3 from './home3.png';
import home4 from './home4.png';
import home5 from './home5.png';
import ourgym from './ourgym.png';
import ourteam from './ourteam.png';

class Home extends Component {
  render() {
    return (
      <div className="home content">
        <img className="home1" src={home1} alt="aboro"/>
        <div className="home2wrapper">
           <img className="home2" src={home2} alt="aboro"/>
           <div className="text">
              <span>ONE OF THE MOST RESPECTED GYM IN CHINA</span>
              <span>AND SHANGHAI'S 1st BOXING ACADEMY</span>
              <span>WITH A 7x WORLD CHAMPION COACH</span>
           </div>
        </div>
        <div className="home3wrapper">
           <img className="home3" src={home3} alt="aboro"/>
           {/* <div>
             <img className="ourgym" src={ourgym} alt="ourgym"/>
             <span>Nowhere in the world will you find a gym like ours.</span>
             <span>A welcoming, supportive community environment in</span>
             <span>which you can train with a seven-time World Champion.</span>
           </div> */}
        </div>
        <div className="home4wrapper">
        <img className="home4" src={home4} alt="aboro"/>
        </div>
        <div className="home5wrapper">
           <img className="home5" src={home5} alt="aboro"/>
        </div>
        <div className="home6wrapper">
           <span className="line1">COME TRAIN WITH US</span>
           <span className="line2">We'd love to hear from you or, better, train with you.</span>
           <div className="line3Wrapper">
            <span className="line31">Reach out to the team at </span>
            <span className="line32">info@aboroacademy.com</span>
           </div>
           <span className="line4">Interested in turing pro?</span>
           <span className="line5">We're always happy to hear from those who embody our</span>
           <span className="line6">passion for boxing and are driven by a competitive spirit</span>
        </div>
      </div>
    );
  }
}

export default Home;