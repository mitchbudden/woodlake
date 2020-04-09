import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <Nav selected="Contact" />
        <h1 className="last-item">
          The Woodlake Construction team is here to help!<br></br> Please use
          one of the methods below to get in contact and we will get back to you
          as soon as possible.
        </h1>
        <Footer />
      </div>
    );
  }
}

export default Contact;
