import React from 'react';
import './todoList.css'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

function TodoList (props) {
    return(
        <ul>
            {props.todos.map((todo,index) => {
                return <TodoItem todo={todo} kay={todo.id} index={index} onChange={props.onToggle}/>
            })}

        </ul>
    )
}

TodoList.protoType = {
    todos: PropTypes.array.isRequired
}


export default TodoList