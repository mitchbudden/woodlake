import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class About extends Component {
  render() {
    return (
      <div>
        <Nav selected="About" />
        <h1 className="info-text yellow-background">
          The Woodlake Construction was founded in 2000 and has been building in
          South East Michigan for businesses, small and large, as well as
          individuals since. Doug Budden, founder of Woodlake Construction, and
          the rest of the Woodlake team operate out of Troy Michigan in the
          address listed below. If you think Woodlake Construction can help with
          you or your business, please get in touch using one of the methods at
          the bottom of the page.
        </h1>
        <Footer />
      </div>
    );
  }
}

export default About;
