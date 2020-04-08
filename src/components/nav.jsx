import React, { Component } from "react";
import "../styles/nav.css";
import W from "../images/W.png";

class Nav extends Component {
  render() {
    return (
      <div className="nav-outer">
        <img src={W} alt="Woodlake" className="nav-logo"></img>
        <div className="nav-group">
          <a
            href="/gallery"
            className={
              this.props.selected === "Gallery"
                ? "selected-nav-item"
                : "nav-item"
            }
          >
            Gallery
          </a>
          <a
            href="/"
            className={
              this.props.selected === "Home" ? "selected-nav-item" : "nav-item"
            }
          >
            Home
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
