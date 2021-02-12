import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Probando en hook useForm', () => {

    const initialForm = {
        name: 'fernando',
        email: 'ov1356272@gmail.com',
    }
    
    test('Debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm));

        expect( result.current[0] ).toEqual(initialForm);
        expect( typeof result.current[1] ).toBe('function');
        expect( typeof result.current[2] ).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, ] = result.current;
        const target = {
            name: 'name',
            value: 'Omar',
        }

        act( () => {

            handleInputChange({ target });
        } );

        const [ values ] = result.current;
        expect( values ).toEqual({...initialForm, name: 'Omar'});
    });

    test('Debe de re-establecer el fourmulario con RESET', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
        const target = {
            name: 'name',
            value: 'Omar',
        }

        act( () => {

            handleInputChange({ target });
            reset();
        } );

        const [ values ] = result.current;
        expect( values ).toEqual(initialForm);
    });
});