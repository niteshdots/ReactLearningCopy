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

// const mydv = React.createElement(
// 'div',
// { className: 'dvTest' },
// [element,element2]
// );

const Mydv = () => {
    return (
        <React.Fragment>
            <div>Div 1</div>
            <div>Div 2</div>
            <div>Div 3</div>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mydv />);