import React, { Component } from 'react';
import './schedule.css';
import scheduleLogo from "./schedule.png";
let title = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
let data = {
	row1: [{
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}]
}
class Schedule extends Component {
  constructor(props){
    super(...props);
  }


  render() {
    return (
      <div className="schedule content">
        <img src={scheduleLogo} style={{height: 400}}/>
  		<div ref="wrapper" className="scheduleWrapper">
      		<ul style={{height: '100%'}}>
      			{
      				title.map( (item, index) => {
      					 return <li className={index == 0 ? "firstLi" : index == 6 ? "lastLi" : ''}>
      					 		<div className="title">{item}</div>
      						</li>
      				})
      			}
      		</ul>	
  		</div>
      </div>
    );
  }
}

export default Schedule;