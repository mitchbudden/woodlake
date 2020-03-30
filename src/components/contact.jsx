import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <Nav selected="About" />
        <div className="about-banner">
          <div className="about-description-container">
            <h1 className="homes-banner-description">Woodlake Construction</h1>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
