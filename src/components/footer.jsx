import React, { Component } from "react";
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {

  render() {
    return (
    <div className="footer-container">
      <div className="contact-container">
        <FontAwesomeIcon size="2x" icon="phone" />
        <h1 className="contact-item">248-961-1900</h1>
      </div>
      <div className="contact-container">
        <FontAwesomeIcon size="2x" icon="envelope" />
        <h1 className="contact-item">luxurystager@gmail.com</h1>
      </div>
      <div className="contact-container">
        <FontAwesomeIcon size="2x" icon="camera" />
        <h1 className="contact-item">Instagram: luxeyachtandhomestaging</h1>
      </div>
    </div>
    );
  }
}

export default Footer;
