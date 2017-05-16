import React, { Component } from 'react';
import './App.css';
import Question from './Question';
import ProgressBar from './ProgressBar';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       progress: 0
     };
     this.quiz_data = [
       {
         question: 'What is the meaning of life?',
         correct_answer: '42',
         possible_answers: ['Love', 'Money', 'Javascript', '42']
       },
       {
         question: 'Who is the best coding youtuber?',
         correct_answer: 'FunFunFunction',
         possible_answers: ['Coding Train', 'Younglamb', 'Wes Bos', 'FunFunFunction']
       }
     ]
  }
  render() {
    return (
      <div>
          <h2>Quiz App</h2>
          <Question current_question={this.quiz_data[this.state.progress].question} />
          <ProgressBar current_step={this.state.progress+ 1} question_length={this.quiz_data.length} />
      </div>
    );
  }
}

export default App;
