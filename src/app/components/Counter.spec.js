import React from 'react';
import {shallow} from 'enzyme';
import './../tests/setupTests';
import { CounterContainer, Counter } from './Counter';

describe('Counter Component', () => {

    
    const container = shallow(<CounterContainer />);
    const counter = container.find(Counter);

    it('should be created', () => {
       expect(counter.exists()).toBeTruthy();
    });

});