import React from 'react';
const Result = (props) => {
    const { current, score, questions } = props;
    const questionsLength = questions.length;
    const percent = ((score / questionsLength) * 100);
    const renderTable = (question) => {
        return(<tr key={question.id}>
            <td>{question.answer}</td>
            <td>{question.selectedAnswer}</td>
        </tr>)
    }
    return (<div className="">
        <h4>You got {score} out of {questionsLength}</h4>
        <h2>{percent}% </h2>
        <table>
            <thead>
            <tr>
                <th>Correct Answer</th>
                <th>Selected Answer</th>
            </tr>
            </thead>
            <tbody>
            {
                questions.map(question => 
                    renderTable(question))
            }        
            </tbody>
        </table>
        <a className="test-link" href="/">Click here to take test again.</a>
    </div>);
    }

export default Result;