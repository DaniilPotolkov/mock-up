import React from "react";
import { Modal, Button } from "react-bootstrap";
import close from "./../../img/times-solid.svg";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import closeico from "./../../img/times-solid.svg";
export default class ModalComponent extends React.Component {

  buy(product_name, good) {
    this.props.add(good)
  }
  exist(product) {
    const { cart } = this.props
    let a = false
    cart.forEach(item => {
      if (item.product_id === product.product_id) { a = true }
    })
    return a
  }
  render() {
    const { product } = this.props
    return (
      <Modal show={true} dialogClassName={"primaryModal"} size="xl">

        <ModalHeader>
          <ModalTitle><button className="button-close" onClick={() => this.props.toggler(this.props.product)}><img src={closeico} alt="close" className="modal-close-button" /></button> </ModalTitle>
        </ModalHeader>
        <ModalBody> <div className="modal-img">
          <div className="col-lg-8 offset-lg-2">
            <img className="modal-main-img"
              src={this.props.product ? this.props.product.img : null}
              alt="product img"
            />
          </div>
        </div>
          <div className="modal-text">

            <div className="row">
              <div className="col-lg-6">
                <p className="product-name-modal">
                  {this.props.product ? this.props.product.name : null}
                </p>
              </div>
              <div className="col-lg-2">
                <p className="product-price-modal">
                  {this.props.product ? this.props.product.price : null}
                </p>
              </div>
              <div className="col-lg-4">
                {!this.exist(product) ? <button className="modal-button" onClick={() => this.buy(this.props.product ? this.props.product.name : 'товар', this.props.product)}>Купить</button> : <button className="modal-button">Уже в корзине</button>}
              </div>
            </div>

            <p className="bold">Описание <hr /></p>
            <div className="modal-description">
            {product.params ? <div className="modal-description">
              {product.params.max_speed ? <p>Максимальная скорость: {product.params.max_speed}км\ч</p> : null}
              {product.params.battary_capacity ? <p>Время заряда аккумулятора при полном разряде: {product.params.battary_capacity} ч</p> : null}
              {product.params.max_distance ? <p>Максимальное расстояние преодолеваемое на одном заряде - {product.params.max_distance} ч (без помощи педалирования, на ровной дороге) Максимальное расстояние на одном заряде используя педалирование - зависит от того как часто помогать себе подключая мотор.</p> : null}
              {product.params.mosh ? <p>Мощность: {product.params.mosh} Вт</p> : null}
              {product.params.mass ? <p>Масса: ~ {product.params.mass} кг</p> : null}
              {product.params.description ? <> <p>В состав комплекта входит:</p >
                <ul>{product.params.description.map(item => {
                  return <li>{item}</li>
                }) }
                </ul> </> : null}

                {product.params.haraks ? <> <p>Характеристики:</p >
                <ul>{product.params.haraks.map(item => {
                  return <li>{item}</li>
                }) }
                </ul> </> : null}

                {product.params.opisanie ? <> <p></p >
                <ul>{product.params.opisanie.map(item => {
                  return <li>{item}</li>
                }) }
                </ul> </> : null}
                
            </div> : null }
            </div>
          </div>
        </ModalBody>
        <ModalFooter><button className="btn" onClick={() => this.props.toggler(this.props.product)}>Закрыть</button> </ModalFooter>
      </Modal>
    );
  }
}
