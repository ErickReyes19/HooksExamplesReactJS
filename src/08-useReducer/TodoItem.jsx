import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between mt-2 shadow rounded">
                <span
                    className={`aling-self-center ${todo.done && 'text-decoration-line-through'}`}
                    onClick={() => onToggleTodo(todo.id)}
                >{todo.description}
                </span>
                <button onClick={(id) => onDeleteTodo(todo.id)} className="btn btn-danger"> borrar</button>
            </li>
        </>
    )
}
