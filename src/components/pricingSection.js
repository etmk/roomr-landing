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
            <p className="plan-per-month">per month</p>
            <p>minimum 1 room</p>
            <p className="plan-includes">Includes:</p>
            <p className="plan-feature">block and unblock rooms</p>
            <p className="plan-feature">access on any device</p>
            <p className="plan-feature">unlimited members & admins</p>
          </div>
          <div className="plan-box">
            <p className="plan-name" >Pro</p>
            <p className="plan-price" >4$/room</p>
            <p className="plan-per-month">per month</p>
            <p>minimum 1 room</p>
            <p className="plan-includes">Includes:</p>
            <p className="plan-feature">all of basic</p>
            <p className="plan-feature">calendar integrations</p>
            <p className="plan-feature">usage analytics</p>
          </div>
          <div className="plan-box">
            <p className="plan-name">Enterprise</p>
            <p className="plan-price enterprise-plan" >Contact us</p>
            <p className="plan-per-month">per month</p>
            <p>minimum 1 room</p>
            <p className="plan-includes">Includes:</p>
            <p className="plan-feature">all of basic and pro</p>
            <p className="plan-feature">slack plugin</p>
            <p className="plan-feature">custom booking rules</p>
            <p className="plan-feature">SAML single sign-on</p>
            <p className="plan-feature">dedicated support team</p>
            <p className="plan-feature">custom branding</p>
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