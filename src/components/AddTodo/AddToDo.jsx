import React from 'react';

function AddToDo (props) {
    return (
    <>        
        <input type='text' id="workInput"></input>
        <button onClick={() => {
            console.log(document.getElementById('workInput').value);
            props.addTodo(document.getElementById('workInput').value);
        }} >Add</button>
    </>
    );
}

export default AddToDo;