import React, { Component } from 'react';
import './event.css';
import Footer from "./../common/footer/Footer";


class Events extends Component {
  render() {
    return (
      <div className="events content">
        <div className="event-wrapper">
					 <div className="event-date">
              <span className="date">12 <small>Sep</small></span>
					 </div>
					<div className="event-title-wrapper">
						<h2><a href="#">KO09 FIGHT 2018/09/15</a></h2>
						<p>KO09 FIGHT</p>
						<div className="event-meta">
						  <a id="event-author" href="#"><i className="fa fa-user"></i>Yilan</a>
						</div>
					</div>
				</div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Events;