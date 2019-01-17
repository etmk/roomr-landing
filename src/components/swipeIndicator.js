import React, { Component } from 'react';

import './swipeIndicator.css';

class SwipeIndicator extends Component {

  onIndicatorClick = event => {
    this.props.onIndicatorClick(event);
  }

  render () {
    return (
      <div className={`swipe-indicator ${(this.props.isBlue) ? "swipe-indicator--blue" : null}`}>
        <div
          onClick={this.onIndicatorClick}
          name="0"
          className={`indicator-box ${(this.props.index===0) ? "active" : null}`}>
        </div>
        <div
          onClick={this.onIndicatorClick}
          name="1"
          className={`indicator-box ${(this.props.index===1) ? "active" : null}`}>
        </div>
        {!this.props.isTwo && 
          <div
            onClick={this.onIndicatorClick}
            name="2"
            className={`indicator-box ${(this.props.index===2) ? "active" : null}`}>
          </div>
        }
      </div>
    )
  }
}

export default SwipeIndicator;