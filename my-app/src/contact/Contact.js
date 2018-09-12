import React, { Component } from 'react';
import './contact.css';
import trainLogo from "./train.png";
import mapPic from "./map.png";
class Contact extends Component {
  render() {
    return (
      <div className="contactus content">
      	<img src={trainLogo} style={{height: 400}}/>
      	<div className="contactWrapper">
	      	<div style={{display: 'inline-block', width: 500}}>
	      		<p className="title">WE ARE ART</p>
	      		<p className="content">667 Chang Hua Road, 2FL S6-S8</p>
	      		<p className="content">(near AnYuan Road) Jing&apos;an District, Shanghai PRC</p>
	      		<p className="content">上海市静安昌化路667号(近安源路)2楼 S6-S8室</p>

	      		<p className="content" style={{paddingTop: 20}} >+86 216222 0266</p>
	      		<p style={{fontSize: 18, color: "#a9901e", fontWeight: 700}}>info@aboroacademy.com</p>
	      	</div>
	      	<div style={{display: 'inline-block', width: 300, verticalAlign: 'top'}}>
	      		<p className="title">WE ARE OPEN ON</p>
	      		<p className="content">Monday to Friday</p>
	      		<p className="content">07:00AM - 10:00PM</p>

	      		<p className="content" style={{paddingTop: 20}} >Saturday to Sunday</p>
	      		<p className="content">09:00AM - 04:00PM</p>
	      	</div>
	      	<img src={mapPic} style={{padding: '50px 0', width: '100%'}} />
		  	<div className="form">
		  		<div>
			  		<input placeholder="NAME" style={{width: 300}} /> 
			  		<input placeholder="EMAIL" style={{width: 300, marginLeft: 20}} />
		  		</div>
		  		<div>
		  			<input placeholder="SUBJECT" style={{width: 620, marginTop: 20}} /> 
		  		</div>
		  		<div>
		  			<textarea placeholder="SPEAK YOUR MIND" style={{width: 620, marginTop: 20, height: 200}} rows="5" cols="30">
		  			</textarea>
		  		</div>
		  		<button>SEND</button>
		  	</div>
      	</div>
      	
      </div>
    );
  }
}

export default Contact;