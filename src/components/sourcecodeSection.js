import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Swipeable from 'react-swipeable';

import SectionHeader from './sectionHeader';
import Container from './container';
import Centrifier from './centrifier';

import './sourcecodeSection.css';
import heartIcon from '../images/heart_icon.svg';
import githubLogo from '../images/github _logo.svg';
import SwipeIndicator from './swipeIndicator';

class SourcecodeSection extends Component {
  state = {
    width: '',
    link: 0
  }

  componentDidMount = async () => {
    await this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  }

  onIndicatorClick = event => {
    const number = parseInt(event.target.getAttribute('name'));
    this.setState({ link: number });
  }

  moveRight = event => {
    if (this.state.link === 1) {
      this.setState({ link: 0 });
    } else {
      this.setState(prevState => ({ link: prevState.link + 1 }));
    }
  }

  moveLeft = event => {
    if (this.state.link === 0) {
      this.setState({ link: 1 });
    } else {
      this.setState(prevState => ({ link: prevState.link -1 }));
    }
  }

  render () {
    return (
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
          <Swipeable
              onSwipedLeft={this.moveRight}
              onSwipedRight={this.moveLeft}
            >
            <Centrifier>
              <div className="sourcecode-content-box">
                {(this.state.link === 0 || this.state.width > 767) &&
                  <div className="github-box">
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/paul-schaaf/roomr">
                    <img alt="github logo" src={githubLogo} />
                    <p>Roomr App</p>
                  </a>
                  </div>
                }
                {(this.state.link === 1 || this.state.width > 767) && 
                  <div className="github-box">
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/paul-schaaf/roomr-landing">
                      <img alt="github logo" src={githubLogo} />
                      <p>Roomr Landing</p>
                    </a>
                  </div>
                }
              </div>
            </Centrifier>
          </Swipeable>
          <MediaQuery maxWidth={767}>
              <Centrifier>
                <SwipeIndicator
                  isTwo
                  onIndicatorClick={this.onIndicatorClick}
                  index={this.state.link}
                />
              </Centrifier>
          </MediaQuery>
        </Container>
      </div>
    )
  }
  
}

export default SourcecodeSection;