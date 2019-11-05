import React from 'react'
import './Questions.css'


import Question from './Question'

function Questions(props){
    const $questions = props.questions.map(question => {
        console.log(question)
        return (<Question 
            category={question.category} 
            type={question.question_type} 
            difficulty={question.difficulty} 
            question={question.question} 
            answer={question.correct_answer} />)
    })
    return(
        <div className="question-container">
        <ul>
            {$questions}
        </ul>
        </div>
    )
}

export default Questions