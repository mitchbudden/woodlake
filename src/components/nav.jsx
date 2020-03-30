import React, { Component } from "react";
import "../styles/nav.css";
import logo from "../images/logo.png";

class Nav extends Component {
  render() {
    return (
      <div className="nav-outer">
        <div className="nav-img-container">
          <a href="/contact">
            <img src={logo} className="logo-nav" alt="Woodlake Construction" />
          </a>
        </div>
        <div className="nav-group">
          <a
            href="/"
            className={
              this.props.selected === "About" ? "selected-nav-item" : "nav-item"
            }
          >
            About
          </a>
          <a
            href="/homes"
            className={
              this.props.selected === "Homes" ? "selected-nav-item" : "nav-item"
            }
          >
            Homes
          </a>
          <a
            href="/contact"
            className={
              this.props.selected === "Contact"
                ? "selected-nav-item"
                : "nav-item"
            }
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
