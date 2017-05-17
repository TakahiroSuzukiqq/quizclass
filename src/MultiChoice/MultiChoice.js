import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MultiChoice extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((answer, i) => <button key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
        <br />
        <p>You have selected: {this.props.selectedAnswer}</p>
        {/*<button onClick={() => {console.log(this); this.props.handleSubmit()}}>Submit</button>*/}
        <button onClick={this.props.handleSubmit}> Submit </button>
      </div>
    )
  }
}

MultiChoice.propTypes = {
  possible_answers: PropTypes.array.isRequired,
  submit: PropTypes.func.isRequired
}

export default MultiChoice;
