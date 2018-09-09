import React from 'react';
const QuestionNumber = (props) => {
    const { current, questions } = props;
    const questionsLength = questions.length;
    if(current > questionsLength) {
        return '';
    } else {
        return <h2>Javascript Quiz {current} of {questionsLength}</h2>;
    }    
}
export default QuestionNumber;