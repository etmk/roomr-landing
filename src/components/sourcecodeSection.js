import React from 'react';

import SectionHeader from './sectionHeader';
import Container from './container';
import Centrifier from './centrifier';

import './sourcecodeSection.css';
import heartIcon from '../images/heart_icon.svg';
import githubLogo from '../images/github _logo.svg';

const SourcecodeSection = () => (
  <div className="sourcecode-section">
    <SectionHeader text="Sourcecode" smallLine="220px" bigLine="280px"/>
    <Container>
      <Centrifier>
        <div className="sourcecode-text-box">
          <p>We</p>
          <img alt="heart icon" src={heartIcon} />
          <p>Open Source</p>
        </div>
      </Centrifier>
      <Centrifier>
        <div className="sourcecode-content-box">
          <div className="github-box">
            <img alt="github logo" src={githubLogo} />
            <p>Roomr App</p>
          </div>
          <div className="github-box">
            <img alt="github logo" src={githubLogo} />
            <p>Roomr Landing</p>
          </div>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default SourcecodeSection;