import React from 'react';
import {shallow, mount} from 'enzyme';

import Guess from  './guess';

describe('<Guess />', function(){
	it('Renders without crashing', function(){
		shallow(<Guess answer='0' />);
	});

	it('Renders the form initially', ()=>{
		const warpper = shallow(<Guess answer='0' />);
		expect(warpper.hasClass('guess-form')).toEqual(true);
	});

	it('Should fire onEnter callback when the form is submitted', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Guess answer='0' onEnter={callback} />);
		const value = '10';
		wrapper.instance();
		wrapper.update();
		wrapper.find('input[type="text"]').instance().value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value);
	});

	it('Should not fire onEnter callback when the form is empty', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Guess answer='0' onEnter={callback} />);
		const value = '';
		wrapper.instance();		
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalled();
	});

	it('Should give empty div when the user guessed the answer correctly.', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Guess answer='50' onEnter={callback} />);
		const value = '50';
		wrapper.instance();
		wrapper.find('input[type="text"]').instance().value = value;
		wrapper.simulate('submit');		
		expect(wrapper.state('guess')).toEqual(value);
		expect(wrapper.state('guess')).toEqual(wrapper.state('answer'));
		//question!
		//expect(wrapper.hasClass('emptyDiv')).toEqual(true);
		expect(wrapper.hasClass('guess-form')).toEqual(false);
	});
});