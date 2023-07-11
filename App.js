import React from 'react';
import ReactDOM from 'react-dom';


const element = React.createElement(
    'h1',
    { id: 'heading' },
    'Heading 1'
    );
    
    const element2 = React.createElement(
    'h1',
    { className: 'heading' },
    'Heading 2'
    );
    
    const mydv = React.createElement(
    'div',
    { className: 'dvTest' },
    [element,element2]
    );
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(mydv);