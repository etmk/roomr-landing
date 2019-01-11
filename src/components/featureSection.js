import React from 'react';

import Container from './container';
import Centrifier from './centrifier';
import SectionHeader from './sectionHeader';

import './featureSection.css';
import triangle from "../images/feature-triangle.svg";
import book from "../images/book_and_unbook.svg";
import everyDevice from "../images/device_icon.svg";
import people from "../images/people_icon.svg";
import calendarSync from "../images/calendarsync_icon.svg";
import analytics from "../images/analytics_icon.svg";
import key from "../images/key_icon.svg";

const FeatureSection = () => (
  <div className="feature-section">
    <Container>
      <Centrifier>
        <SectionHeader text="Features" lineWidth="250px"/>
      </Centrifier>
    </Container>
    <Container>
      <Centrifier>
      <div className="feature-box">
          <div className="feature-box__row">
            <div className="feature-box__card card--book">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Book and<br></br>unbook rooms</p>
              <img className="schedule-icon" src={book} alt="book and unbook icon"/>
            </div>
            <div className="feature-box__card card--device">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Works on<br></br>every device</p>
              <img className="device-icon" src={everyDevice} alt="works on every device"/>
            </div>
            <div className="feature-box__card card--people">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Admin and<br></br>member accounts</p>
              <img className="people-icon" src={people} alt="member and admin accounts"/>
            </div>
          
            <div className="feature-box__card card--sync">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Calendar<br></br>integrations</p>
              <img className="schedule-icon" src={calendarSync} alt="calendar integrations"/>
            </div>
            <div className="feature-box__card card--analytics">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Usage<br></br>analytics</p>
              <img className="analytics-icon" src={analytics} alt="usage analytics"/>
            </div>
            <div className="feature-box__card card--key">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>SAML single<br></br>sign-on</p>
              <img className="key-icon" src={key} alt="SAML single sign-on"/>
            </div>
          </div>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default FeatureSection;