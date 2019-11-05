import _ from 'lodash'
import React from 'react'

import './Question.css'


export default function Question(props){
    const quote = /&#039;|&rsquo;/gi;
    const u = /&uuml;/gi;
    const question = _.unescape(props.question).replace(quote, "'").replace(u, "ü")
    return (

       

        <div className="single-question">
        <h2>{question}</h2>
        <p> {props.category} </p>
        <p> {props.difficulty} </p>
        <p> {props.question_type} </p>
        <h3> {props.answer} </h3>
        <input type='text' placeholder='type your answer'/>
        <input type='submit'/>
        </div>

    )
    
 
}