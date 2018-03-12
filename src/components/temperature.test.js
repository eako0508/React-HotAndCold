import React from 'react';
import {shallow, mount} from 'enzyme';

import Temperature from  './temperature';

describe('<Temperature />', ()=>{
	it('Renders without crashing', ()=>{
		shallow(<Temperature/>);
	});

	it('Should have inital wording initially', ()=>{
		const wrapper = shallow(<Temperature answer='50' guess={0} />);
		expect(wrapper.hasClass('wording-h2')).toEqual(true);
		expect(wrapper.text()).toEqual('Make your Guess!');
	});

	it('Should show "Cold" when the absolute differences are larger than 30', ()=>{
		const wrapper = shallow(<Temperature answer='50' guess='80'/>);
		expect(wrapper.text()).toEqual('Cold');
	});
	it('Should show "Kinda warm" when the absolute differences are larger than 10 but no more than 30', ()=>{
		const wrapper = shallow(<Temperature answer='50' guess='70'/>);
		expect(wrapper.text()).toEqual('Kinda warm');
	});
	it('Should show "Warm" when the absolute differences are larger than 5 but no more than 10', ()=>{
		const wrapper = shallow(<Temperature answer='50' guess='55'/>);
		expect(wrapper.text()).toEqual('Warm');
	});
	it('Should show "Hot" when the absolute differences are less than 5 but not the same', ()=>{
		const wrapper = shallow(<Temperature answer='50' guess='54'/>);
		expect(wrapper.text()).toEqual('Hot');
	});
	it('Should show winning message when the guess is correct...!!!', ()=>{
		const wrapper = shallow(<Temperature answer='50' guess='50'/>);
		expect(wrapper.text()).toEqual('You Won. Click new game to play again');
	});
});