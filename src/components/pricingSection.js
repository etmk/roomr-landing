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
  </div>
)

export default PricingSection;