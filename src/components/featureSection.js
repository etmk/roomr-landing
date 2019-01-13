import React from 'react';
import MediaQuery from 'react-responsive';

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
    <SectionHeader text="Features" smallLine="180px" bigLine="250px"/>  
    <Container>
      <Centrifier>
      <div className="feature-box">
          <div className="feature-box__row">
            <div className="feature-box__card card--book">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Book and<br></br>unbook rooms</p>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Book and unbook rooms</p>
              </MediaQuery>
              <img className="schedule-icon" src={book} alt="book and unbook icon"/>
            </div>
            <div className="feature-box__card card--device">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Works on<br></br>every device</p>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Works on every device</p>
              </MediaQuery>
              <img className="device-icon" src={everyDevice} alt="works on every device"/>
            </div>
            <div className="feature-box__card card--people">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Admin and<br></br>member accounts</p>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Admin and member accounts</p>
              </MediaQuery>
              <img className="people-icon" src={people} alt="member and admin accounts"/>
            </div>
          
            <div className="feature-box__card card--sync">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Calendar<br></br>integrations</p>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Calendar integrations</p>
              </MediaQuery>
              <img className="schedule-icon" src={calendarSync} alt="calendar integrations"/>
            </div>
            <div className="feature-box__card card--analytics">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Usage<br></br>analytics</p>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Usage analytics</p>
              </MediaQuery>
              <img className="analytics-icon" src={analytics} alt="usage analytics"/>
            </div>
            <div className="feature-box__card card--key">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>SAML single<br></br>sign-on</p>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>SAML single sign-on</p>
              </MediaQuery>
              <img className="key-icon" src={key} alt="SAML single sign-on"/>
            </div>
          </div>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default FeatureSection;