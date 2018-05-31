import React, { Component } from 'react';
import remoteValidator from './cm-validator-remote'
import createEditor from './CreateEditor'
import './App.css';
import './codemirror.css';
import './lint.css';
import './dialog.css';


import $ from 'jquery';

class Codebox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'print "hello world"r'
    };
  }

  componentDidMount() {
    window.CodeMirror.remoteValidator = remoteValidator;
    createEditor();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="Codebox container">
        <textarea id="txt" value={this.state.value} onChange={this.handleChange}></textarea>
      </div>
    );
  }
}

export default Codebox;
