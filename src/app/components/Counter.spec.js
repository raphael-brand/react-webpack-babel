import React from 'react';
import {shallow} from 'enzyme';
import { render, fireEvent } from "@testing-library/react";
import './../tests/setupTests';
import { CounterContainer, Counter } from './Counter';
import { Simulate } from 'react-dom/test-utils';

describe('Counter Component', () => {
        
    const container = shallow(<CounterContainer />);
    const counter = container.find(Counter);

    it('should be created', () => {
       expect(counter.exists()).toBeTruthy();
    });
    

    it('has a increment button', () => {
        const { getByTestId } = render(container);
        const incButton = getByTestId("inc");
        expect(incButton.textContent).toBe('Increment');
    });

    it('increments, when clicked', () => {    
        const { getByTestId } = render(<CounterContainer />);
        const incButton = getByTestId("inc");
 
        Simulate.click(incButton, 'click');
        const result = getByTestId('counter');
        expect(result.textContent).toBe("1");
    });
    
    it('has a decrement button', () => {
        const { getByTestId } = render(container);
        const decButton = getByTestId("dec");
        expect(decButton.textContent).toBe('Decrement');
    });

    it('decrements, when clicked', () => {
        const { getByTestId } = render(<CounterContainer />);
        const incButton = getByTestId("inc");
        const decButton = getByTestId("dec");
        Simulate.click(incButton, 'click');
        expect(getByTestId('counter').textContent).toBe("1");
        Simulate.click(decButton, 'click');
        expect(getByTestId('counter').textContent).toBe("0");

    });

});