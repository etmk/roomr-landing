import React from 'react';
import './centrifier.css';

const Centrifier = ({ children }) => {
  return (
    <div className="centrifier">
    {children}
  </div>
  )
}

export default Centrifier;