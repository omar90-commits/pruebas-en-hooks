import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { shallow } from 'enzyme';

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

describe('Pruebas en <TodoListItem />', () => {

	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	
	const wrapper = shallow( 
		<TodoListItem
			todo={demoTodos[0]}
			index={0}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/> 
	);

	test('Debe de mostrarse correctamente', () => {
		
		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de llamar la funcion handleDelete', () => {
		
		wrapper.find('button').simulate('click');
		expect( handleDelete ).toHaveBeenCalledTimes(1);
	});

	test('Debe de llamar la funcion handleToggle', () => {
		
		wrapper.find('p').simulate('click');
		expect( handleToggle ).toHaveBeenCalledTimes(1);
	});

	test('Debe de mostrar el texto correctamente', () => {

		expect( wrapper.find('p').text().trim() ).toBe( `1. ${demoTodos[0].desc}` );
	});

	test('Debe de tener la clase complete si el TODO.done = true', () => {
		
		const todo = demoTodos[0];
		todo.done = true;

		const wrapper = shallow( 
			<TodoListItem
				todo={todo}
			/> 
		);
		
		expect( wrapper.find('p').hasClass('complete') ).toBe( true );
	});
});