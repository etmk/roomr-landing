import React from 'react';
import './featureSection.css';
import Container from './container';
import Centrifier from './centrifier';
import SectionHeader from './sectionHeader';

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
              <p>Book and<br></br>unbook rooms</p>
            </div>
            <div className="feature-box__card">
              <p>Works on<br></br>every device</p>
            </div>
            <div className="feature-box__card">
              <p>Admin and<br></br>members accounts</p>
            </div>
          </div>
          <div className="feature-box__row">
            <div className="feature-box__card">
             <p>calendar<br></br>integrations</p>
            </div>
            <div className="feature-box__card">
             <p>usage<br></br>analytics</p>
            </div>
            <div className="feature-box__card">
             <p>SAML single<br></br>sign-on</p>
            </div>
          </div>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default FeatureSection;