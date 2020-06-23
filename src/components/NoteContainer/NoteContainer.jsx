import React from 'react';

function NoteContainer(props){
    return(
        <div >
            {props.todo.map((t, index) => {
                return (
                <div key={index}>
                    <span>{t}</span>
                    <button onClick={() => {
                        props.removeTodo(t)
                    }}>x</button>
                </div>);
            })}
        </div>
    )
}

export default NoteContainer;