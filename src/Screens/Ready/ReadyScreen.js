import React from "react";
import Modal from "../../Components/Modal/Modal";
import ProductCard from "../../Components/ProductCrad/ProductCard";

export default class ReadyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, modalId: null };
  }
  toggleModal(id) {
    this.setState({ showModal: !this.state.showModal, modalId: id });
  }
  render() {
    return (
      <>
        <div className="all">
          <h2 className="zagolovok">Готовые наборы</h2>
          <div className="container">
            <div className="wrapper">
              {this.props.products.map((product) => {
                return (
                  <div className="">
                    <ProductCard product={product} modal={this.props.modal} />
                  </div>
                );
              })}
            </div>
          </div>
          {this.state.showModal ? (
            <Modal
              product={this.props.products[this.state.modalId]}
              toggler={this.toggleModal.bind(this)}
            />
          ) : null}
        </div>
      </>
    );
  }
}
