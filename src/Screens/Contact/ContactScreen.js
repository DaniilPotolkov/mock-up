import React from "react";

export default class ContactScreen extends React.Component {
  render() {
    return (
      <>
      <div className="wrap">
        <h2>Пожалуйста, согласовывайте Ваш приезд для подготовки заказа</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <p className="bold">Москва</p>
              <p>
                ул. Генерала Антонова 3А <br />8 960 312 0107
              </p>
              <p className="bold">Чебоксары</p>
              <p>
                пр. Максима Горького 15 <br />8 960 312 0107
              </p>

              <p className="bold">E-mail</p>
              <p>606203@bk.ru</p>
              <p className="bold">Часы работы</p>
              <p>
                Пн - Пт с 10 до 19 <br />
                Сб - Вс - выходной
              </p>
            </div>
            <div className="col-lg-7">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad67149e847b5d314d99f3fa15a2bbd7bc4a5cdac133a1996d6a2c23964d17e2d&amp;source=constructor"
                width="600"
                height="436"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}
