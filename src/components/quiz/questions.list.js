import React, { Component } from 'react';
import Question from './question.js';
import QuestionNumber from './question.number';

class QuestionsList extends Component {


  render() {    

    return(
    <div>
        <QuestionNumber {...this.props}/>
        {
          this.props.questions.map(question => {
            if (this.props.current === question.id) {
              return <Question question={question} key={question.id} {...this.props}/>
            }
          })
        }
    </div>
    );
  }
}

export default QuestionsList;
