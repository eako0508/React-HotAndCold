import React from 'react';
import './guess.css';

export default class Guess extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			answer: (props.answer).toString(),
			guess: 0
		}
	}

	onSubmit(event){
		event.preventDefault();
		const theNum = this.textInput.value.trim();		
		if (theNum && this.props.onEnter){
			this.props.onEnter(theNum);
		}
		this.updateGuess(theNum);
		this.textInput.value = '';
	}

	updateGuess(guess){
		this.setState({
			guess
		});
	}

	render(){		
		console.log(this.state.answer);
		
		if(this.state.answer === this.state.guess){
			return (<div className='emptyDiv'></div>);
		}
		return (
			<form className='guess-form' onSubmit={(e)=>this.onSubmit(e)}>
				<input type='text' name='userGuess' id='userGuess'
				className='text' maxLength='3' autoComplete='off'
				placeholder='Enter your Guess' 
				ref={input => this.textInput = input} required />
				<input type="submit" id="guessButton" 
				className="button" name="submit" value="Guess" 				
				/>
			</form>
		);		
	}	
}