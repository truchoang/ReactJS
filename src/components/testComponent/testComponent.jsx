import React from 'react';
import ChildComponent from '../childComponent/childComponent';
// Stateless component
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
 
        this.changeTodo = this.changeTodo.bind(this);
    }

    changeTodo() {
        this.props.todos[0] = 'Sleep';
        console.log(this.props);
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <h2>Hello Universe</h2>
                <h3>{this.props.color}</h3>
                {this.props.todos.map(todo => {
                    return <h3>{todo}</h3>;
                })}
                <button onClick={() => {
                    this.props.changeState("Sleep")
                }}>Change todos</button>

                <ChildComponent todos={this.props.todos}/>
            </React.Fragment>);
    }
}

export default TestComponent;