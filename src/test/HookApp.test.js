import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HookApp } from '../HookApp';

describe('Probando el componente <HookApp />', () => {
	
	test('Debe mostrarse correctamente', () => {
		
		const wrapper = shallow( <HookApp /> );

		expect( wrapper ).toMatchSnapshot();
	});
});