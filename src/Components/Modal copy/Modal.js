import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import clos1e from "./../../img/times-solid.svg";

export default class ModalComponent extends React.Component {
    buy(product_name) {
        alert(`Вы купили ${product_name}`);
    }
  render() {
    return (
      <div className="absolute-modal">
        <div className="container">
          <div className="modal-container">
            <button
              className="close"
              onClick={() => this.props.toggler(this.props.product)}
            >
              <img src={close} alt="close" className="modal-close-button" />
            </button>
            <div className="modal-img">
              <img className="modal-main-img"
                src={this.props.product ? this.props.product.img : null}
                alt="product img"
              />
            </div>
            <div className="modal-text">
              <p className="product-name-modal">
                {this.props.product ? this.props.product.name : null}
              </p>
              <p className="product-price-modal">
              {this.props.product ? this.props.product.price : null}₽
              </p>
              <button className="modal-button" onClick={()=> this.buy(this.props.product ? this.props.product.name : 'товар')}>Купить</button>
              <p className="modal-description">{this.props.product ? this.props.product.description : null}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
