import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
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

describe('Pruebas en <TodoList />', () => {

	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	
	const wrapper = shallow( 
		<TodoList
			todos={demoTodos}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/> 
	);

	test('Debe de mostrarse correctamente', () => {
		
		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de tener dos <TodoListItem />', () => {
		
		expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

		expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
	});
});