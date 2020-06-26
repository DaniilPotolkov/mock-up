import React from "react";
import Modal from './../Modal/Modal'
import { Button } from "react-bootstrap";
import productImg from "./../../img/complect.jpg";

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalId: null,
    }
  }
  render() {

    return (
      <>

        <div className="tovar">
          <div className="img_holder">
            <img
              src={this.props.product ? this.props.product.img : null}
              alt=""
            />
          </div>
          <p>{this.props.product ? this.props.product.name : null}</p>
          <p className="price">
            {this.props.product ? this.props.product.price : null}
          </p>
          <button type="button" className=" podrobnee" data-toggle="modal" data-target="#exampleModalLong"
            onClick={() => this.props.modal(this.props.product.product_id)}
          >
            Подробнее о товаре
            </button>
        </div>



      </>
    );
  }
}
