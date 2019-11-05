import React, {Component} from 'react';
import './App.css';
import Questions from './Components/Questions'

class App extends Component {

  state = {
    questions: [],
    isAnswerShowing: false,
  }

  componentDidMount(){
    fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(questions => {
      this.setState ({questions})
  } )  
  }

  toggleAnswerShowing = () => {
    this.setState({
      isAnswerShowing: !this.state.isAddNewBagelShowing
    })
  }

  render (){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Illumination Trivia</h1>
      </header>
      <section className="points">
        <ul>
        <Questions questions={this.state.questions}/>
        </ul>
      </section>

    </div>
  );
}
}

export default App;
