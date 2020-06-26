import React from "react";
import Slider from "./../../Components/Slider/Slider";
import Modal from './../../Components/Modal/Modal';
import productImg from "./../../img/complect.jpg";
import Footer from "./../../Components/Footer/Footer";

// react, redux
import { connect } from 'react-redux'

// actions
import actionAddToCart, { actionDelFromCart } from './../../Redux/actions'

class MainScreen extends React.Component {
  render() {
    const { addToCart } = this.props
    return (<>
      <div className="all">
        
        
      </div>
    </>
    );
  }
}
export default connect(MainScreen)