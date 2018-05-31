import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/lib/Button';
import $ from 'jquery';

class Run extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    handleClick(e){
        var component = this;
        e.preventDefault();
        $.getJSON('http://localhost:5000/run_code', {
            text :  window.editor.getValue()
        }, function(data) {
            component.setState({data});
            return false;
        });
    }

    render() {
        return (
            <div className="Run">
                <Button className="RunButton" onClick={this.handleClick.bind(this)}>Run</Button>
                <div className="Output" id="output"> <pre>{this.state.data}</pre> </div>
            </div>
        )
    }
}

export default Run