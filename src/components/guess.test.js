import React from 'react';
import {shallow, mount} from 'enzyme';

import Guess from  './guess';

describe('<Guess />', function(){
	it('Renders without crashing', function(){
		shallow(<Guess guess='0' />);
	});
	
});