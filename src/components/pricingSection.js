import React from 'react';
import MediaQuery from 'react-responsive';

import Container from './container';
import Centrifier from './centrifier';
import SectionHeader from './sectionHeader';

import './pricingSection.css';


const PricingSection = () => (
  <div className="pricing-section">
    
        <MediaQuery maxWidth={600}>
        <SectionHeader color="blue" text="Pricing" lineWidth="180px"/>
        </MediaQuery>
        <MediaQuery minWidth={601}>
          <SectionHeader color="blue"text="Pricing" lineWidth="250px"/>
        </MediaQuery>
     
  </div>
)

export default PricingSection;