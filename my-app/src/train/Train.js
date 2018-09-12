import React, { Component } from 'react';
import './train.css';
import train1 from './train1.png';
import train2 from './train2.png';
import proboxing from './proboxing.png';
import Footer from "./../common/footer/Footer";

class Train extends Component {
  render() {
    return (
      <div className="train content">
        <div className="content1">
          <div className="leftContent">
            <img src={proboxing}/>
            <div className="line1">
              PROFESSIONAL FIGHTERS ARE SOME OF THE TOUGHEST ATHLETES IN THE WORLD.
              THEY CONSTANTLY PUSH THE BOUNDARIES OF HUMAN LIMITS - MENTALLY, PHYSICALLY, 
              EMOTIONALLY, AND SPIRITUALLY.
            </div>
            <div className="line2">
              To be a professional fighter takes hard work, dedication, and perseverance.
              It is not for the faint of heart.
            </div>
            <div className="line2">
              Aboro training programme will provide you with the training and nutritional advice you need
              to be in the best possible shape.
            </div>
            <div className="line2">
              By providing you with a detailed schedule that contains everything you need over 12 weeks, from 
              boxing, conditioning and dynami stretching to nutrition and recovery support, the Aboro team will 
              make sure you reach your goals.
            </div>
          </div>
          <div className="rightContent">
            <img src={train1}/>
          </div>
        </div>
        <div className="content2">
          <div className="line1">WHY CHOOSE OUR TRAINING PROGRAMME?</div>
        </div>
        <div className="content3">
          <div className="leftContent">
            <div className="line1">DO YOU HAVE WHAT IT TAKES?</div>
            <div className="line2">
              The 12-week KNOCK OUT Training Programme consists of 5 classes per week, 3 of them are kickboxing or 
              boxing and 2 of the classes are fitness. You will also be given a separate programme for running, which 
              will consist of 4 sessions a week.
            </div>
            <div className="line2">
              Training 3 times a week at the Aboro Academy is the minimum requirement! If it sounds like you, please contact us using 
              the form below at <span>michele@aboroacademy.com</span>
            </div>
          </div>
          <div className="rightContent">
            <img src={train2}/>
          </div>
        </div>
        <div className="content4"></div>
        <div className="content5"></div>
        <Footer/>
      </div>
    );
  }
}

export default Train;