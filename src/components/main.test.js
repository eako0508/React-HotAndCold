import React from 'react';
import {shallow, mount} from 'enzyme';

import Main from './main';

import Guess from  './guess';
import Count from  './count';
import History from  './history';
import Temperature from './temperature';

describe('<Main />', ()=>{
	const seedHistory = [];
	beforeAll(()=>{
		for(let i=0;i<10;i++){
			seedHistory.push(i);
		}
	});

	it('Renders without crashing', ()=>{
		shallow(<Main />);
	});

	it('Should render main page initially', ()=>{
		const wrapper = shallow(<Main />);
		expect(wrapper.hasClass('WholePage'));
	});

	it('Can try to guess numbers', ()=>{
		const wrapper = shallow(<Main />);
		const instance = wrapper.instance();
		//set answer out of the guessing range
		instance.setState({answer:99});
		//10 guesses attempted
		seedHistory.forEach(item=>instance.tried(item));
		//10 guesses recorded
		expect(wrapper.state('history').length).toEqual(seedHistory.length);
		//10 trials
		expect(wrapper.state('counter')).toEqual(10);
		//last guess is matching
		expect(wrapper.state('guess')).toEqual(seedHistory[9]);
	});
	/*
	it('Can guess it right', ()=>{
		const wrapper = shallow(<Main />);
		const instance = wrapper.instance();
		const value = 50;
		instance.setState({answer:value});
		instance.tried(value);
		expect(wrapper.state('guess')).toEqual(value);
		// question!
		// this gets 
		// Method "text" is only meant to be run on a single node
		// first trial
		//const msg = wrapper.find('wording-h2');
		//expect(msg.text()).toEqual('You Won. Click new game to play again');
		
		// second trial using dive
		//const msg = wrapper.find('wording-h2').dive();
		//expect(msg.text()).toEqual('You Won. Click new game to play again');		
	});
	*/
});