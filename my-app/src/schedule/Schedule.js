import React, { Component } from 'react';
import './schedule.less';
import scheduleLogo from "./schedule.png";

class Schedule extends Component {
  render() {
    return (
      <div className="schedule content">
        <img src={scheduleLogo}/>
      </div>
    );
  }
}

export default Schedule;