import React from 'react';
import {shallow, mount} from 'enzyme';

import Count from  './count';

describe('<Count />', function(){

	it('Renders without crashing', function(){
		shallow(<Count counter='1'/>);
	});

	it('Renders the proper number', function(){
		const number = '23';
		const wrapper = shallow(<Count counter={number} />);
		const span = wrapper.find('span');
		expect(span.text()).toEqual(number);		
	});

})