import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import {render, cleanup} from '@testing-library/react';
import {CounterContainer, Counter} from './Counter';

describe('Counter', () => {

    test('render Container', () => {
        render(<CounterContainer />); 
    });

    test('render Counter', () => {
        render(<Counter />); 
    });

    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
      
    afterEach(() => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
        container = null;
    });
    
    it('can render', () => {
       
        act(() => {
            ReactDOM.render(<CounterContainer />, container);
        });
        
        const button = document.querySelector('button');
        expect(button).toHaveTextContent("Increment");
        
    });

    afterAll(() => {
        cleanup()
    });


});