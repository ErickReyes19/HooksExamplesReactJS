import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, OnToggleTodo}) => {
    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={OnToggleTodo}
                        ></TodoItem>

                    ))
                }
            </ul>
        </>
    )
}
