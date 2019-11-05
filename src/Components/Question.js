import React from 'react'

export default function Question(props){
    return (
        <div>
        <h2>{props.question}</h2>
        <p> {props.category} </p>
        <p> {props.difficulty} </p>
        <p> {props.question_type} </p>
        <h3> {props.answer} </h3>
        </div>

    )
}