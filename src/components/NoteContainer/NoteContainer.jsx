import React from 'react';
import './NoteContainer.css'

function NoteContainer(props){
    return(
        <div >
            {props.todo.map((t, index) => {
                return (
                <div key={index}>
                    <input type="checkbox" id="checkid"></input>
                    <span>{t.work}</span>
                    <button class="btn_delete" onClick={() => {
                        props.removeTodo(t)
                    }}>x</button>
                </div>);
            })}
        </div>
    )
}

export default NoteContainer;