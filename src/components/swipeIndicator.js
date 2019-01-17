import React, { Component } from 'react';

class SwipeIndicator extends Component {
  render () {
    return (
      <div className="testimonial__swipe-indicator">
        <div
          onClick={this.onIndicatorClick}
          name="0"
          className={`indicator-box ${(this.state.testimonial===0) ? "active" : null}`}>
        </div>
        <div
          onClick={this.onIndicatorClick}
          name="1"
          className={`indicator-box ${(this.state.testimonial===1) ? "active" : null}`}>
        </div>
        <div
          onClick={this.onIndicatorClick}
          name="2"
          className={`indicator-box ${(this.state.testimonial===2) ? "active" : null}`}>
        </div>
      </div>
    )
  }
}