import React from 'react'
import './Question.css'
export default function Question(props){
    return (
        <div className="single-question">
        <h2>{props.question}</h2>
        <p> {props.category} </p>
        <p> {props.difficulty} </p>
        <p> {props.question_type} </p>
        <h3> {props.answer} </h3>
        </div>

    )
}