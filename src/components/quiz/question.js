import React, { Component } from 'react';

const CHOICES = [{key: 'A', value: 1}, {key: 'B', value: 2}, {key: 'C', value: 3}, {key: 'D', value: 4}];

class Question extends Component {

  handleChange = (value, index) => {
    const { setCurrent, setScore, question, current, score, setQuestions } = this.props;
    setCurrent(current + 1);
    question.selectedAnswer = value;
    setQuestions(index, question);
    if (question.answer === value) {
      setScore(score + 1);
    }
  }

  renderOption = (option, index) => {
    const key = CHOICES[index].key;
    return (
      <div key={key} className="option-choices">
        <span> {key} - {option} </span>
      </div>
    );
  }

  render() {
    const {question} = this.props;
    
    return (
      <div>
        <div>
            <h3>{question.text}</h3>        
            <div>
              {
                question.options.map(this.renderOption)
              }
            </div>
        </div>
        <div className='row select-options'>
        {
            CHOICES.map(option => {
                return (
                  <div key={option.key} className = "square-box" onClick={() => this.handleChange(option.value, question.id)}>
                    <div className = "square-content"><div><span>{option.key}</span></div></div>                    
                  </div>
                 )
            })
        }                    
        </div>        
      </div>
    );
  }
}

export default Question;