import React { Component } from 'react';

class Question extends Component {
  render() {
    return <h4>{this.quiz_data[0].question}</h4>
  }
}

export default Question;
