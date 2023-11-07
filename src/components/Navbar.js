import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems.js";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <h1 className="navbar-logo">IATSAT</h1>
        <nav className="NavbarItems">


          <ul className="nav-menu">
            {MenuItems.map((items, index) => {
              return (
                <li key={index} className="links-nav">
                  <a className={items.cName} href={items.url}>
                    {items.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
