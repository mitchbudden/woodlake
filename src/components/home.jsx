import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav selected="Home" />
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

export default Home;
