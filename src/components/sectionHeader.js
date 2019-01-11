import React from 'react';
import './sectionHeader.css';
import MediaQuery from 'react-responsive';

import Container from './container';
import Centrifier from './centrifier';

const SectionHeader = ({ text, smallLine, bigLine, isBlue }) => (
  <Container>
    <Centrifier>
      <div className="section-header">
        <h2
          style={{ "color": (isBlue) ? "#1e4363" : "#fcf2cb"}}
        >
          {text}
        </h2>
        <MediaQuery maxWidth={600}>
          <div
            className="section-header__underline"
            style={{
              "background": (isBlue) ? "#1e4363" : "#fcf2cb",
              "width": smallLine
            }}
          >
          </div>
        </MediaQuery>
        <MediaQuery minWidth={601}>
        <div
            className="section-header__underline"
            style={{
              "background": (isBlue) ? "#1e4363" : "#fcf2cb",
              "width": bigLine
            }}
          >
          </div>
        </MediaQuery>
      </div>
    </Centrifier>
  </Container>
  
)

export default SectionHeader;