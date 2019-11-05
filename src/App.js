import React, {Component} from 'react';
import './App.css';
import Questions from './Components/Questions'
import FilterBox from './Components/FilterBox'

class App extends Component {

  state = {
    questions: [],
    searchTerm: "",
  }

  componentDidMount(){
    fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(questions => {
      this.setState ({questions})
  } )  
  }

  filteredQuestions = () => this.state.questions
  .filter(question => question.difficulty && question.category)
  .filter(question => {
    return (question.difficulty 
    .toLowerCase()
    .includes(this.state.searchTerm.toLowerCase())
    ) || (question.category 
      .toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
      )
  })

  updateSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

 

  render (){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Illumination Trivia</h1>
      </header>
      <section className="points">
      <FilterBox
            searchTerm={this.state.searchTerm}
            updateSearchTerm={this.updateSearchTerm}
          />
        <ul>
        <Questions questions={this.filteredQuestions()}/>
        </ul>
      </section>

    </div>
  );
}
}

export default App;
