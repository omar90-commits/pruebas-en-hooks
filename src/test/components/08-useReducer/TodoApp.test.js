import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';

const demoTodos = [
	{
		id: 1,
		desc: 'Aprender React',
		done: false,
	},
	{
		id: 2,
		desc: 'Aprender Mongo',
		done: false,
	}
];

describe('Pruebas en <TodoApp />', () => {
	
	const wrapper = shallow( <TodoApp /> );

	Storage.prototype.setItem = jest.fn(() => {});

	test('Debe de mostrarse correctamente', () => {
		
		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de agregar un TODO', () => {
		
		const wrapper = mount( <TodoApp /> );

		act( () => {

			wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
			wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
		} );

		expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
		expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
	});

	test('Debe de eliminar un TODO', () => {

		expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
		expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
	});
});