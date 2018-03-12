import React from 'react';
import {shallow, mount} from 'enzyme';

import History from  './history';

describe('<History />', function(){
	const seedHistory = [];
	beforeAll(()=>{
		for(let i=0;i<10;i++){
			seedHistory.push(i);
		}
	});
	it('Renders without crashing', function(){
		shallow(<History history={seedHistory}/>);
	});
	it('Renders <li> items', ()=>{
		const wrapper = shallow(<History history={seedHistory} />);
		const li = wrapper.find('li');
		expect(li.length).toEqual(seedHistory.length);
	});
});