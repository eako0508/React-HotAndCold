import React from 'react';
import './main.css';
import Guess from './guess';
import Temperature from './temperature';
import History from './history';
import Count from './count';

export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history: [],
			counter: 0,
			answer: 36,
			guess: 0
		}
	}

	addHistory(number){
		this.setState({
			history : [...this.state.history, number]
		});
		console.log('history: '+this.state.history);
	}

	countUp(){
		this.setState({
			counter: this.state.counter+1
		});
	}

	tried(number){
		
		this.countUp();
		this.addHistory(number);
		this.updateGuess(number);
	}
	updateGuess(guess){
		this.setState({
			guess
		});
	}

	render(){
		return(
			<div className='WholePage'>
				<h1> HOT or COLD </h1>
				<div className='game'>
					<Temperature  answer={this.state.answer} 
					guess={this.state.guess}/>
					<Guess onEnter={value => 
						this.tried(value)}/>
					<Count counter={this.state.counter} />
					<History history={this.state.history} />
				</div>
			</div>
		);
	}
	
}