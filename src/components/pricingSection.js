import React from 'react';

import Container from './container';
import Centrifier from './centrifier';
import SectionHeader from './sectionHeader';

import './pricingSection.css';


const PricingSection = () => (
  <div className="pricing-section">
    <SectionHeader
      isBlue
      text="Pricing" 
      smallLine="180px"
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
    </Container>
  </div>
)

export default PricingSection;