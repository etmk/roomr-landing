import React from 'react';
import MediaQuery from 'react-responsive';

import Container from './container';
import Centrifier from './centrifier';
import SectionHeader from './sectionHeader';

import './pricingSection.css';


const PricingSection = () => (
  <div className="pricing-section">
    <SectionHeader
      isBlue
      text="Pricing" 
      smallLine="160px"
      bigLine="250px"
    />
    <Container>
      <Centrifier>
        <div className="pricing__toggle-box">
          <p>Monthly</p>
          <div className="toggle-background">
            <div className="toggle-foreground"></div>
          </div>
          <p>Annually</p>
        </div>
      </Centrifier>
      <Centrifier>
        <div className="pricing__plans-box">
          <div className="plan-box">
            <p className="plan-name" >Basic</p>
            <p className="plan-price" >2$/room</p>
          </div>
          <div className="plan-box">
            <p className="plan-name" >Pro</p>
            <p className="plan-price" >4$/room</p>
          </div>
          <div className="plan-box">
            <p className="plan-name">Enterprise</p>
            <p className="plan-price enterprise-plan" >Contact us</p>
          </div>
        </div>
      </Centrifier>
      <MediaQuery maxWidth={920}>
        <Centrifier>
          <div className="pricing__swipe-indicator">
            <div className="indicator-box"></div>
            <div className="indicator-box"></div>
            <div className="indicator-box"></div>
          </div>
        </Centrifier>
      </MediaQuery>
    </Container>
  </div>
)

export default PricingSection;