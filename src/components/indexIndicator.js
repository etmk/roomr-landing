import React, { Component } from 'react';

import './indexIndicator.css';

class IndexIndicator extends Component {

  onIndicatorClick = event => {
    this.props.onIndicatorClick(event);
  }

  createIndicators = () => {
    let indicatorList = [];
    for (let i = 0; i < this.props.amount; i++) {
      const indicator = (
        <div
          key={`Indicator ${i}`}
          onClick={this.onIndicatorClick}
          name={i}
          className={`indicator-box ${(this.props.index === i) ? "active" : null}`}
        />
      )
      indicatorList.push(indicator);
    }
    return indicatorList;
  }

  render () {
    return (
      <div className={`index-indicator ${(this.props.isBlue) ? "index-indicator--blue" : null}`}>
        {this.createIndicators()}
      </div>
    )
  }
}

export default IndexIndicator;