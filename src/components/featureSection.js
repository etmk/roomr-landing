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
  </div>
)

export default FeatureSection;