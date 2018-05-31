import React, { Component } from 'react';
import Header from './Header';
import CodeBox from './Codemirror/CodeBox';
import ExampleBox from './ExampleBox';
import ErrorBox from './ErrorBox';
import Run from './Run';
import './App.css';

class Box extends Component {
    render() {
        return (
            <div className="Box container">
                <Header/>
                <CodeBox/>
                <ExampleBox/>
                <Run/>
                <ErrorBox/>
            </div>
        )
    }
}

export default Box;