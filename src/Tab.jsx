import React from 'react';

import './Tab.scss';

const tabs = [
    function() {
        return (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat, similique sit eveniet harum dignissimos, quibusdam eum, provident veritatis culpa iste enim voluptates sint ducimus?
            </p>
        );
    },
    function() {
        return (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo accusamus dolorum rerum ipsum! Dolores!
            </p>
        );
    },
    function() {
        return ([
            <p key={1}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolore officiis fugit. Maxime doloremque iusto perspiciatis sapiente, ea minima repellat.
            </p>,
            <p key={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit ipsa quas quod laborum repudiandae.
            </p>
        ]);
    },
    function() {
        return (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo accusamus dolorum rerum ipsum! Dolores!
            </p>
        );
    }
];

function Tab (props) {
    return (
        <div className='tab'>{ tabs[props.tabIndex]() }</div>
    );
}

export default Tab;