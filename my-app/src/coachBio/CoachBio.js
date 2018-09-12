import React, { Component } from 'react';
import './coachBio.css';
import Footer from "./../common/footer/Footer";
import Michele from "./michele.jpg";

class CoachBio extends Component {
  render() {
    return (
      <div className="coachBio content">
        <div className="bioWrapper">
           <div className="leftContent">
             <img src={Michele}/>
           </div>
           <div className="rightContent">
             <p>Michele Aboro米歇尔·安博若，英国退役职业拳击手， 5次荷兰踢拳世界冠军，2次全胜世界拳击冠军和两次K1冠军，1999-2002年被评为“Pound for Pound”世界最优秀女拳击手。2002年Michele退出了女子世界最轻量级拳坛。
Michele Aboro现在在上海设有自己的拳击馆Aboro Academy震宇健身有限公司，兼任健身中心的首席教练。</p>
           </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default CoachBio;