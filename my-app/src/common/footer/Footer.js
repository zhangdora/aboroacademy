import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
         <div className="leftContent">
          <span>667 Chang Hua Road, 2FL S6-S8</span>
          <span>(near AnYuan Road Jing'an District, Shanghai PRC)</span>
          <span>上海市静安昌化路667号（近安源路）2楼 S6-S8室</span>
          <span style={{marginTop: 10}}>＋86 86 216222 0266   info@aboroacademy.com</span>
         </div>
         <div className="rightContent">
          <span>2017 ABORO ACADEMY</span>
         </div>
      </div>
    );
  }
}

export default Footer;