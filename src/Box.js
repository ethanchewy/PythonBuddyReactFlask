import React, { Component } from 'react';
import Codebox from './Codemirror/Codebox';
import ExampleBox from './ExampleBox';
import Errorbox from './Errorbox';
import RunButton from './RunButton';
import Output from './Output';
import './App.css';

class Box extends Component {
    render() {
        return (
            <div>
                <Codebox/>
                <ExampleBox/>
                <RunButton />
                <Output />
                <Errorbox/>
            </div>
        )
    }
}

export default Box;