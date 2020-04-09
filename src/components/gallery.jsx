import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

import ROne from "../images/rolex/ROne.jpg";
import RTwo from "../images/rolex/RTwo.jpg";
import RThree from "../images/rolex/RThree.jpg";
import RFour from "../images/rolex/RFour.jpg";
import RFive from "../images/rolex/RFive.jpg";
import RSix from "../images/rolex/RSix.jpg";
import RSeven from "../images/rolex/RSeven.jpg";
import REight from "../images/rolex/REight.jpg";
import RNine from "../images/rolex/RNine.jpg";
import RTen from "../images/rolex/RTen.jpg";

import MOne from "../images/maple/MOne.jpg";
import MTwo from "../images/maple/MTwo.jpg";
import MThree from "../images/maple/MThree.jpg";
import MFour from "../images/maple/MFour.jpg";
import MSix from "../images/maple/MSix.jpg";
import MSeven from "../images/maple/MSeven.jpg";
import MEight from "../images/maple/MEight.jpg";
import MNine from "../images/maple/MNine.jpg";
import MTen from "../images/maple/MTen.jpg";
import MEleven from "../images/maple/MEleven.jpg";
import MTwelve from "../images/maple/MTwelve.jpg";
import MThirteen from "../images/maple/MThirteen.jpg";
import MFourteen from "../images/maple/MFourteen.jpg";
import Mfifteen from "../images/maple/Mfifteen.jpg";
import MSixteen from "../images/maple/MSixteen.jpg";
import MSeventeen from "../images/maple/MSeventeen.jpg";
import MEighteen from "../images/maple/MEighteen.jpg";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.rolexImages = [
      ROne,
      RTwo,
      RThree,
      RFour,
      RFive,
      RSix,
      RSeven,
      REight,
      RNine,
      RTen
    ];
    this.mapleImages = [
      MOne,
      MTwo,
      MThree,
      MFour,
      MSix,
      MSeven,
      MEight,
      MNine,
      MTen,
      MEleven,
      MTwelve,
      MThirteen,
      MFourteen,
      Mfifteen,
      MSixteen,
      MSeventeen,
      MEighteen
    ];
  }

  render() {
    return (
      <div>
        <Nav selected="Gallery" />
        <h1 className="gallery-title">Rolex</h1>
        <div className="gallery-flex">
          {this.rolexImages.map((image, index) => {
            return (
              <img
                className="gallery-image"
                alt={index + "rolex gallery"}
                src={image}
              ></img>
            );
          })}
        </div>
        <h1 className="gallery-title">Maple Hill Lane</h1>
        <div className="gallery-flex">
          {this.mapleImages.map((image, index) => {
            return (
              <img
                className="gallery-image"
                alt={index + "maple hill gallery"}
                src={image}
              ></img>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
