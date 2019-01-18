import React, { Component } from 'react'
import { navigate } from 'gatsby';

class NotFoundPage extends Component {
  componentDidMount = () => {
    navigate('/');
  }
  
  render () {
    return <div></div>
  }
}

export default NotFoundPage
