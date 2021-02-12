import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { shallow } from 'enzyme';

describe('Pruebas en <TodoAdd />', () => {
	
	const handleAddTodo = jest.fn();

	const wrapper = shallow( <TodoAdd handleAddTodo={handleAddTodo} /> );

	test('Debe de mostrarse correctamente', () => {
		
		expect( wrapper ).toMatchSnapshot();
	});

	test('No debe de llamar la funcion handleAddTodo', () => {
		
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		expect( handleAddTodo ).toHaveBeenCalledTimes(0);
	});

	test('Debe de llamar la funcion handleAddTodo', () => {
		
		const value = 'Hola Mundo';
		const input = wrapper.find('input');

		input.simulate('change', { target: { value, name:'description' } });
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		expect( handleAddTodo ).toHaveBeenCalledTimes(1);
		expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
		expect( handleAddTodo ).toHaveBeenCalledWith( {
			desc: value,
			done: false,
			id: expect.any(Number),
		});

		expect( wrapper.find('input').prop('value') ).toBe('');
	});
});