import _ from 'lodash'
import React, {Component} from 'react'

import ShowAnswer from './ShowAnswer'

import './Question.css'


export default class Question extends Component {

    state = {
        isClicked: false,
    }

     toggleAnswerShowing = () => {
        const {isClicked}  = this.state

        this.setState({isClicked: !isClicked }) 
         
    }

    
     render () {
        const quote = /&#039;|&rsquo;/gi;
        const u = /&uuml;/gi;
        const question = _.unescape(this.props.question).replace(quote, "'").replace(u, "ü")
   
     return (

       

        <div className="single-question">
        <h2>{question}</h2>
        <img src="https://www.homelectrical.com/sites/default/files/styles/original_image/public/images/product/blg/trivia%20animation.gif" width="200" height="121"/>
        <p> {this.props.category} </p>
        <p> {this.props.difficulty} </p>
        <p> {this.props.question_type} </p>
        <input type='submit' value='Answer'onClick={this.toggleAnswerShowing} />

            {
                this.state.isClicked
                ? <ShowAnswer answer= {this.props.answer}/>
                :null
            }
       
        

        {/* <form onSubmit={props.handleSubmit} >
        
        </form> */}
        </div>

    )
     }
    
 
}