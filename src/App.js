import React, {Component} from 'react';
import './App.css';
import Questions from './Components/Questions'

class App extends Component {

  state = {
    questions: []
  }





  componentDidMount(){
    fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(questions => {
      this.setState ({questions})
  } )
    
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
