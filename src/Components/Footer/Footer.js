import React from "react";
import './Footer.css'
import { NavLink, Switch } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Logo from './logo_white.png';

class Footer extends React.Component {
  render() {
    return (
        <>
        <div className="footer">
        <div className="container">
            <div className="row footer-content">
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-4 offset-sm-4 col-8 offset-2 footer-content">
                <img src={Logo} alt='website logo' />
                    <p className="anot">© 2020 OnBike.life - комплекты электрификации</p>
                </div>
                <div className="col-lg-2 offset-lg-5 col-md-3 offset-md-3  col-sm-6 col-6  footer-content">
                    <a href="">Доставка и оплата</a> <br />
                    <a href="">Гарантия</a> <br />
                    <a href="">Контакты</a>
                </div>
                <div className="col-lg-2 col-md-3  col-sm-6 col-6 footer-content">
                    <h3>Реквизиты</h3>
                    <p>ИП: Иванов И.И. <br />
                        ИНН: 123141231 <br />
                        ОГРН: 12314241 <br />
                    </p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
  };
}

export default Footer