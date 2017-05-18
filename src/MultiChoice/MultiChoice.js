import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Nav, NavItem } from 'react-bootstrap';

class MultiChoice extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((answer, i) => <Button key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</Button>)}
        <br />
        <p>You have selected: {this.props.selectedAnswer}</p>
        {/*<button onClick={() => {console.log(this); this.props.handleSubmit()}}>Submit</button>*/}

        <Button bsStyle="info" onClick={this.props.handleSubmit}> Submit </Button>
          {/*{alert('Your answer has sent properly')}*/}

      </div>
    )
  }
}

MultiChoice.propTypes = {
  possible_answers: PropTypes.array.isRequired,
  submit: PropTypes.func.isRequired
}

export default MultiChoice;
