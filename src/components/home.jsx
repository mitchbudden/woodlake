import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";
import kitchen from "../images/home/kitchen.jpg";
import kitchenTwo from "../images/home/kitchenTwo.jpg";
import outdoors from "../images/home/outdoors.jpg";
import stairs from "../images/home/stairs.jpg";

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
        <div className="info-flex">
          <div className="text-container">
            <h1 className="info-header">Excellence & Service</h1>
            <h1 className="info-text">
              At Woodlake, we excel in commercial and industrial tenant
              renovation in Southeast Michigan. With over 25 years of
              experience, we have built and continue to cultivate successful
              relationships with property managers throughout the area. Our goal
              is to effectively manage your project from its inception through
              completion with 100% satisfaction. We work closely to meet the
              needs of on-site building superintendents and property managers,
              while continually providing you updates on job progress.
            </h1>
          </div>
          <img
            src={kitchen}
            alt="Woodlake Construction"
            className="info-image"
          ></img>
        </div>
        <div className="info-flex">
          <img
            src={outdoors}
            alt="Woodlake Construction"
            className="info-image"
          ></img>
          <div className="text-container">
            <h1 className="info-header">Quality & Satisfaction</h1>
            <h1 className="info-text">
              With our select network of experienced trades, your project will
              be done to your specification:
            </h1>
            <ul className="info-text">
              <li>On schedule</li>
              <li>Within budget</li>
              <li>
                With minimal disruption to the current working environment
              </li>
            </ul>
            <h1 className="info-text">
              Whether it’s small or large, interior or exterior, Woodlake will
              assure your project is completed with quality and complete
              satisfaction.
            </h1>
          </div>
        </div>
        <div className="info-flex">
          <div className="text-container">
            <h1 className="info-header">Experience & Trust</h1>
            <h1 className="info-text">
              Our list of satisfied clients includes companies in the banking,
              financing, child care, and consumer packaged goods industries:
            </h1>
            <ul className="info-text">
              <li>Coca Cola</li>
              <li>PNC Bank</li>
              <li>Independent Bank</li>
              <li>Colliers International</li>
              <li>Finsilver/Friedman Management</li>
              <li>Home Properties</li>
              <li>Green Path Debt Solutions</li>
              <li>Rainbow Child Development Centers</li>
            </ul>
          </div>
          <img
            src={stairs}
            alt="Woodlake Construction"
            className="info-image"
          ></img>
        </div>
        <div className="info-flex">
          <img
            src={kitchenTwo}
            alt="Woodlake Construction"
            className="info-image"
          ></img>
          <div className="text-container">
            <h1 className="info-header">Capabilities & Trades</h1>
            <h1 className="info-text">
              Woodlake specializes in creating efficient work environments to
              meet your needs for appearance and functionality. We offer the
              following services:
            </h1>
            <ul className="info-text">
              <li>Tenant improvement</li>
              <li>Suite renovation</li>
              <li>New construction</li>
              <li>Acoustic ceilings</li>
              <li>Drywall installation – vinyl board</li>
              <li>Cabinetry and millwork</li>
              <li>Plumbing, electrical & HVAC</li>
              <li>Wallcovering</li>
              <li>Flooring</li>
            </ul>
          </div>
        </div>
        <div className="last-item">
          <h1 className="info-header">Mission Statement</h1>
          <h1 className="info-text">
            We will strive to continuously improve our service and dedication to
            the construction industry and to always seek new ways to exceed the
            expectations of our customers.
          </h1>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
