import React from 'react';
import MediaQuery from 'react-responsive';

import SectionHeader from './helperComponents/sectionHeader';
import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import triangle from "../images/feature-triangle.svg";
import bookIcon from "../images/book_and_unbook.svg";
import bookIconBold from "../images/book_and_unbook_bold.svg";
import deviceIcon from "../images/device_icon.svg";
import deviceIconBold from '../images/device_icon_bold.svg';
import peopleIcon from "../images/people_icon.svg";
import peopleIconBold from "../images/people_icon_bold.svg";
import calendarSyncIcon from "../images/calendarsync_icon.svg";
import calendarSyncIconBold from '../images/calendarsync_icon_bold.svg';
import analyticsIcon from "../images/analytics_icon.svg";
import analyticsIconBold from '../images/analytics_icon_bold.svg';
import keyIcon from "../images/key_icon.svg";
import keyIconBold from '../images/key_icon_bold.svg';

import './featureSection.css';

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
                <img className="schedule-icon" src={bookIcon} alt="book and unbook icon"/>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Book and unbook rooms</p>
                <img className="schedule-icon" src={bookIconBold} alt="book and unbook icon"/>
              </MediaQuery>
              
            </div>
            <div className="feature-box__card card--device">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Works on<br></br>every device</p>
                <img className="device-icon" src={deviceIcon} alt="works on every device"/>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Works on every device</p>
                <img className="device-icon" src={deviceIconBold} alt="works on every device"/>
              </MediaQuery>
            </div>
            <div className="feature-box__card card--people">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Admin and<br></br>member accounts</p>
                <img className="people-icon" src={peopleIcon} alt="member and admin accounts"/>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Admin and member accounts</p>
                <img className="people-icon" src={peopleIconBold} alt="member and admin accounts"/>
              </MediaQuery>
              
            </div>
          
            <div className="feature-box__card card--sync">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Calendar<br></br>integrations</p>
                <img className="schedule-icon" src={calendarSyncIcon} alt="calendar integrations"/>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Calendar integrations</p>
                <img className="schedule-icon" src={calendarSyncIconBold} alt="calendar integrations"/>
              </MediaQuery>
              
            </div>
            <div className="feature-box__card card--analytics">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>Usage<br></br>analytics</p>
                <img className="analytics-icon" src={analyticsIcon} alt="usage analytics"/>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>Usage analytics</p>
                <img className="analytics-icon" src={analyticsIconBold} alt="usage analytics"/>
              </MediaQuery>
              
            </div>
            <div className="feature-box__card card--key">
              <MediaQuery minWidth={601}>
                <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
                <p>SAML single<br></br>sign-on</p>
                <img className="key-icon" src={keyIcon} alt="SAML single sign-on"/>
              </MediaQuery>
              <MediaQuery maxWidth={600}>
                <p>SAML single sign-on</p>
                <img className="key-icon" src={keyIconBold} alt="SAML single sign-on"/>
              </MediaQuery>
              
            </div>
          </div>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default FeatureSection;