import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav selected="Home" />
        <div className="banner">
          <div className="banner-description-container">
            <h1 className="banner-description">Woodlake Construction, LLC</h1>
            <h2 className="banner-subhead">Troy, Michigan</h2>
          </div>
        </div>
        <h1 className="info-text yellow-background">
          Woodlake Construction is a South East Michigan based construction
          management company that provides commercial and residential services.
          Please reach out to us using one of the contact methods listed below
          to speak with someone on the Woodlake Construction team about how we
          can help you with you or your business' construction needs.
        </h1>
        <Footer />
      </div>
    );
  }
}

export default Home;
