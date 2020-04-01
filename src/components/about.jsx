import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class About extends Component {
  render() {
    return (
      <div>
        <Nav selected="About" />
        <div className="banner">
          <div className="banner-description-container">
            <h1 className="banner-description">Woodlake Construction</h1>
            <h2 className="banner-subhead">Troy, Michigan</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
