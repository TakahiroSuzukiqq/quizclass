import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  render() {
    return <p>{this.props.current_step}/{this.props.question_length}</p>
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.func.isRequired
}

export default ProgressBar;
