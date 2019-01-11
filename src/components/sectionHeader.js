import React from 'react';
import './sectionHeader.css';

const SectionHeader = ({ text, lineWidth, color }) => (
  <div className="section-header">
    <h2
      style={{ "color": (color === 'blue') ? "#1e4363" : "#fcf2cb"}}
    >
      {text}
    </h2>
  </div>
)

export default SectionHeader;