import React from 'react'

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
        <ul>
            {$questions}
        </ul>
    )
}

export default Questions