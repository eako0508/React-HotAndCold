import React from 'react';
import './guess.css';

export default class Guess extends React.Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}

	onSubmit(event){
		event.preventDefault();
		const theNum = this.textInput.value.trim();
		console.log('text input: '+theNum);
		if (theNum && this.props.onEnter){
			this.props.onEnter(theNum);
		}
		this.textInput.value = '';
	}

	render(){
		return (
			<form onSubmit={(e)=>this.onSubmit(e)}>
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