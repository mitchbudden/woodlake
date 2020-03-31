import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/contact.css";
import "../styles/global.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <Nav selected="Contact" />
        <div className="banner">
          <div className="banner-description-container">
            <h1 className="banner-description">Woodlake Construction</h1>
            <h2 className="banner-subhead">Troy, Michigan</h2>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
