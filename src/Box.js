import React, { Component } from 'react';
import Codebox from './Codebox';
import ExampleBox from './ExampleBox';
import Errorbox from './Errorbox';
import RunButton from './RunButton';
import Output from './Output';

class Box extends Component {
    constructor(props) {
        super(props);
    }

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