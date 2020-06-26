import React from "react";
import "./Header.css";
import { NavLink, Switch } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import Logo_Header from "./logo_black.png";
import Logo_Busket from "./basket.png"

class Header extends React.Component {
  render() {
    return (
      <>
      <div className="nav-yellow">
      <div className="container"><Navbar variant="dark" expand="xl" className="header nav-yellow">
        
         <Navbar.Brand><NavLink to="/"><img src={Logo_Header} alt="website logo"/></NavLink></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="show">
            <Nav className="ml-auto menu">
              <Nav><NavLink to="/dostavka" activeClassName="selected" className="menu_item nav-yellow first" > <button onclick="this.blur();">Доставка и оплата</button> </NavLink></Nav>
              <Nav><NavLink to="/garantee" activeClassName="selected" className="menu_item nav-yellow" > <button onclick="this.blur();">Гарантия</button> </NavLink></Nav>
              <Nav><NavLink to="/contact" activeClassName="selected" className="menu_item nav-yellow" > <button onclick="this.blur();">Контакты</button> </NavLink></Nav>
              <Nav><NavLink to="/busket" activeClassName="selected" className="menu_item nav-yellow last ico-busket" > <button onclick="this.blur();"><img className="busket-logo" src={Logo_Busket} alt="busketC logo"/></button> </NavLink></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
      <div className="nav-black">
      <div className="container"><Navbar variant="dark" expand="xl" className="header">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="test2">
            <Nav className="ml-auto menu">
              <div className="collum">
                <Nav><NavLink to="/Ready" activeClassName="selected" className="menu_item" > <button onclick="this.blur();" className="m-but">Готовые наборы</button> </NavLink></Nav>
              <Nav><NavLink to="/motor" activeClassName="selected" className="menu_item" > <button onclick="this.blur();">Мотор-колеса</button> </NavLink></Nav>
              <Nav><NavLink to="/battery" activeClassName="selected" className="menu_item last1" > <button onclick="this.blur();">Аккумуляторы</button> </NavLink></Nav>
              </div>
              <div className="collum">
              <Nav><NavLink to="/controller" activeClassName="selected" className="menu_item" > <button onclick="this.blur();">Контроллеры</button> </NavLink></Nav>
              <Nav><NavLink to="/accessories" activeClassName="selected" className="menu_item" > <button onclick="this.blur();">Аксессуары</button> </NavLink></Nav>
              <Nav><NavLink to="/electro-bike" activeClassName="selected" className="menu_item last" > <button onclick="this.blur();">Электровелосипеды</button> </NavLink></Nav>
               
              </div>
              </Nav>
           
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
      </>
    );
  }
}

export default Header;
