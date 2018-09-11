import React, { Component } from 'react';
import './footer.less';
import footerImg from './footer.png';

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <img src={footerImg} alt="footer"/>
      </div>
    );
  }
}

export default Footer;