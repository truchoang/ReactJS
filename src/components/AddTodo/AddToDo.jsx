import React, {useState} from 'react';
import './addToDo.css';

function AddToDo (props) {
    const [value, setValue] = useState("")

    const handleKeyDown = (e) => {
        console.log("key down")

        if( e.keyCode === 13) {
            console.log("you press enter")
        } 
    }

    const getValueKeyboard = (e) => {
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    const keyPress = (e) => {
        console.log("key press")
    }

    return (
    <>   
        <h1>List note todo</h1>
        <input value = {value} type='text' id="workInput" onChange={getValueKeyboard} onKeyPress={keyPress} onKeyDown={handleKeyDown} ></input>
        <button type="submit" id="btn" 
        onClick={() => {
            // console.log(document.getElementById('workInput').value);
            props.addTodo(document.getElementById('workInput').value.trim());
            document.getElementById('workInput').value = "";
        }} >Add</button>
    </>
    );
}

export default AddToDo;