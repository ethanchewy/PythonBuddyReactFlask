import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/lib/Button';
import $ from 'jquery';

class RunButton extends Component {
    constructor(props) {
        super(props);
    }
    
    handleClick(e){
        e.preventDefault();
        $.getJSON('http://localhost:5000/run_code', {
            text :  window.editor.getValue()
        }, function(data) {
            print_result(data);
            return false;
        });
        
        function print_result(data){
            document.getElementById('output').innerHTML = '';
            $("#output").append("<pre>"+data+"</pre>");
        }
    }

    render() {
        return (
             <Button onClick={this.handleClick}>Run</Button>
        )
    }
}

export default RunButton