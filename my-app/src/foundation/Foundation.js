import React, { Component } from 'react';
import './foundation.css';
import foundation1 from './foundation1.jpg';
import foundation2 from './foundation2.jpg';
import foundation4 from './foundation4.png';
import foundation from './foundation.png';

class Foundation extends Component {
  render() {
    return (
      <div className="foundation content">
        <div className="content1">
          <img src={foundation}/>
        </div>
        <div className="content2">
          <div className="leftContent">
            <div className="line1">MISSION & VISION</div>
            <div className="line2">
              PROVIDING CAREER-ORIENTATED FITNESS AND BOXING TRAINING TO UNDERPRIVILEGED YOUTH,
              THROUGH BOXING AND KICKBOXING.
            </div>
            <div className="line3">
              Through rigorous training, the Arboro Academy youngsters gain confidence and experience that 
              can benefit them, their families and their broader communities.
            </div>
            <div className="line4">
              Helping others embodies what the Arboro Foundation is about. Michele and her team train these children daily to 
              become boxers and coaches. Teaching them English and sports coaching will provide them a career, thus a future, fro
              whe they decide to retire from pro boxing.
            </div>
          </div>
          <div className="rightContent">
            <img src={foundation1}/>
          </div>
        </div>
        <div className="content3">
          <div className="leftContent">
            <img src={foundation2}/>
          </div>
          <div className="rightContent">
            <div className="line1">WHAT WE DO</div>
            <div className="line2">
              The Aboro foundation accomplishes its mission and vision by
              operating a program to help with the development of those kids:
            </div>
            <div className="line3">Providing free boxing & coaching training</div>
            <div className="line3">Providing English lessons</div>
            <div className="line3">Help with internships & employment</div>
            <div className="line3">Hosting free educational events</div>
            <div className="line3">Advising on nutrition & health</div>
            <div className="line3">Developing confidence & self-discipline</div>

          </div>
        </div>
        <img src={foundation4} className="content4"/>
      </div>
    );
  }
}

export default Foundation;