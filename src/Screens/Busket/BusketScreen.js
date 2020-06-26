import React from "react";
// import productImg from "./../../img/complect.jpg";
import BusketCard from "./../../Components/BusketCard/BusketCard";
// React
import { connect } from "react-redux";

// actions
import actionAddToCart, {
  actionDelFromCart,
  actionIncCartGood,
} from "./../../Redux/actions";

class BusketScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalId: null,
    };
  }
  count() {
    const { cart } = this.props;
    let cunt = 0;
    cart.forEach((item) => {
      cunt += item.good_count;
    });
    return cunt;
  }
  sum() {
    const { cart } = this.props;
    let price = 0;
    cart.forEach((item) => {
      price += item.price * item.good_count;
    });
    return price;
  }
  render() {
    const { cart, delFromCart, incCartGood } = this.props;
    return (
      <>
        <div className="wrap">
          <h2>Корзина</h2>
          <div className="container">
            <div className="busket-row">
              <div className="row">
                <div className="col-lg-3 offset-lg-2 col-md-3 offset-lg-2">
                  <p className="many-tovar">
                    Количество товаров:{" "}
                    <span className="bold">{`${this.count()}`}</span>
                  </p>
                </div>
                <div className="col-lg-3 col-md-3">
                  <p className="sum-tovar">
                    {" "}
                    Сумма цены товаров:{" "}
                    <span className="bold">{`${this.sum()}`}р.</span>
                  </p>
                </div>
                <div className="col-lg-4 col-md-4">
                  <button className="btn-buy">Оплатить</button>
                </div>
              </div>
            </div>
            <p className="bold">Выбранные товары</p>
            <hr />
          </div>
          {cart.map((item, i) => {
            return (
              <BusketCard cart={item} del={delFromCart} inc={incCartGood} />
            );
          })}
        </div>
      </>
    );
  }
}
const mapStateToPorps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (e) => dispatch(actionAddToCart(e)),
    delFromCart: (e) => dispatch(actionDelFromCart(e)),
    incCartGood: (e) => dispatch(actionIncCartGood(e)),
  };
};

export default connect(mapStateToPorps, mapDispatchToProps)(BusketScreen);
