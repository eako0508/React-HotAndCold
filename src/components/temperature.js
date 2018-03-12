import React from 'react';

export default function Temperature(props){
	let wording;

	if(props.guess === 0){
		wording = 'Make your Guess!';
	} else{
		let diff = Math.abs(props.answer - props.guess);
		if(diff===0){
			wording = 'You Won. Click new game to play again';
		} else if(diff<5){
			wording = 'Hot';
		} else if(diff<10){
			wording = 'Warm';
		} else if(diff<30){
			wording = 'Kinda warm';
		} else{
			wording = 'Cold';
		}
	}


	return (<h2>{wording}</h2>);
}