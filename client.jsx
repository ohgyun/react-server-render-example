import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

ReactDOM.render(
    // Load component with server caculated data
    <Counter initialCount={window.initialCount} />,
    document.getElementById('container')
);