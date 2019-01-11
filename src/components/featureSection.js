import React from 'react';

import Container from './container';
import Centrifier from './centrifier';
import SectionHeader from './sectionHeader';

import './featureSection.css';
import triangle from "../images/feature-triangle.svg";

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
            <div className="feature-box__card">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Book and<br></br>unbook rooms</p>
            </div>
            <div className="feature-box__card">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Works on<br></br>every device</p>
            </div>
            <div className="feature-box__card">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Admin and<br></br>members accounts</p>
            </div>
          </div>
          <div className="feature-box__row">
            <div className="feature-box__card">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Calendar<br></br>integrations</p>
            </div>
            <div className="feature-box__card">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>Usage<br></br>analytics</p>
            </div>
            <div className="feature-box__card">
              <img className="feature-triangle" src={triangle} alt="feature-triangle"/>
              <p>SAML single<br></br>sign-on</p>
            </div>
          </div>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default FeatureSection;