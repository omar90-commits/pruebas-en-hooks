import React from 'react';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
// import { todoReducer } from 'enzyme';

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

describe('Pruebas en todoReducer', () => {

	test('Debe de retornar el estado por defecto', () => {
		
		const state = todoReducer( demoTodos, {} );

		expect( state ).toEqual( demoTodos );
	});

	test('Debe de agregar un TODO', () => {
		
		const newTodo = {
			id: 3,
			desc: 'Aprender Angular',
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		}
		
		const state = todoReducer( demoTodos, action );

		expect( state.length ).toBe( 3 );
		expect( state ).toEqual( [...demoTodos, newTodo] );
	});

	test('Debe de borrar un TODO', () => {
		
		const action = {
			type: 'delete',
			payload: 3,
		}

		const state = todoReducer( demoTodos, action );
		expect( state.length ).toBe( 2 );
	});

	test('Debe de hacer un toggle del TODO', () => {
		
		const action = {
			type: 'toggle',
			payload: 1,
		}

		const state = todoReducer( demoTodos, action );
		const [react] = state;

		expect( react.done ).toBe( true );
	});
});