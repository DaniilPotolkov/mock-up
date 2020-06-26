import React from "react";
import './master.css'
import Logo from './img/LOGO_tis.png';

class UnderConstruct extends React.Component {
  render() {
    
    return (
      <>
      <div className="holder">
        <h1 className="under_construction">UNDER CONSTRUCTION</h1>
        <img src={Logo} alt='website logo' />
      </div>
      </>
    )
  };
}

export default UnderConstruct