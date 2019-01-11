import React from 'react';
import './sectionHeader.css';

const SectionHeader = ({ text, lineWidth }) => (
  <div className="section-header">
    <h2>{text}</h2>
  </div>
)

export default SectionHeader;