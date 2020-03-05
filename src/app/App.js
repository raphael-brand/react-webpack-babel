import React, { Component } from 'react';
import {CounterContainer} from './components/Counter';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {message: 'Hello ReactJS'}
    }

    componentDidMount() {
        console.log('... it worked so far. Sneaking onto the stage now.')
    }

    render() {
        return (<div>
         <h1>{this.state.message}</h1>
         <CounterContainer />
        </div>
        );
    }
}