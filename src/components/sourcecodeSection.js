import React from 'react';

import SectionHeader from './sectionHeader';
import Container from './container';
import Centrifier from './centrifier';

import './sourcecodeSection.css';
import heartIcon from '../images/heart_icon.svg';

const SourcecodeSection = () => (
  <div className="sourcecode-section">
    <SectionHeader text="Sourcecode" smallLine="220px" bigLine="280px"/>
    <Container>
      <Centrifier>
        <div className="sourcecode-text-box">
          <p>We</p>
          <img src={heartIcon} />
          <p>Open Source</p>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default SourcecodeSection;