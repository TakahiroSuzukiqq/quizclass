import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';
import { Line } from 'rc-progress';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'Not yet!',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'JavaScript', '42']
      },
      {
        question: 'Who is the best coding YouTuber?',
        correct_answer: 'FunFunFunction',
        possible_answers: ['Coding Train', 'FunFunFunction', 'Young Lamb', 'Wes Bos']
      },
      {
        question: 'How to get rich?',
        correct_answer: 'Marry rich guy',
        possible_answers: ['Work hard', 'Buy lottery', 'Mystery', 'Marry rich guy']
      },
      {
        question: 'What time is it now?',
        correct_answer: '3',
        possible_answers: ['1', '2', '3', '4']
      }
    ]
  }


  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }


  handleRestart() {
    this.setState({
      progress: 0,
      score: 0
    })
  }

  render() {
    return (
      <div>
        <h2> Quiz App </h2>

        {this.state.progress < this.quiz_data.length ? (
          <div>
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <Line percent={(this.state.progress + 1) / (this.quiz_data.length)*100} strokeWidth="2" strokeColor="#D3D3D3"  />
            <Line percent={(this.state.progress) / (this.quiz_data.length)*100} strokeWidth="2" strokeColor="#D3D3D3"  />

            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results score={this.state.score} end_message="Congratulations, you have finished!"
           handleRestart={this.handleRestart} />
         )}
      </div>
    );
  }
}

export default App;
