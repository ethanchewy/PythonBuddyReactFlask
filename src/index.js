import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Box from './Box';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Box />, document.getElementById('root'));

registerServiceWorker();
