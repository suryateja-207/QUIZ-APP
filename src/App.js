import React, { Component } from 'react';
import QuestionsList from './components/quiz/questions.list';
import Result from './components/quiz/result';
import PulseLoader from './components/spinner/pulse.loader';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0,
      current: 1
    }
  }

  getQuestions = () => {
    fetch('https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json')
    .then(response => response.json())
    .then(questions => {
      questions.forEach((question, index) => { question.id = index + 1; question.selectedAnswer = -1; });
      this.setState({ questions });
    })
    .catch(err => console.error('failed', err));
  }
  

  componentDidMount() {
      this.getQuestions();
  }

  setCurrent = (current) => {
    this.setState({current});
  }

  setScore = (score) => {
    this.setState({score});
  }
  
  setQuestions = (index, question) => {
    const questionsLength = this.state.questions.length;
    this.setState({ questions: [
      ...this.state.questions.slice(0,index -1),
      Object.assign({}, this.state.questions[index-1], question),
      ...this.state.questions.slice(index, questionsLength)
   ]});
  } 

  render() {
    const { questions, current } = this.state;
    const questionsLength = questions.length;

    if(questionsLength <= 0) {
      return <PulseLoader />
    } else {
      return (<div className="box">
      { current <= questionsLength ? <QuestionsList setScore={this.setScore} setCurrent={this.setCurrent} setQuestions={this.setQuestions} {...this.state}/> :
        <Result {...this.state}/> }
    </div>)
    }
    
    
  }
}

export default App;