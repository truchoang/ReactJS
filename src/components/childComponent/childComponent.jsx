import React from 'react';

function ChildComponent(props) {
    return (
        <>
            <h1>I'm layer 3</h1>
            <ul>
                {props.todos.map(todo => {
                    return <li>{todo}</li>
                })}
            </ul>
        </>
    );
}

export default ChildComponent;