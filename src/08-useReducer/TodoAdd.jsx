import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { onInputChange, description, onResetForm } = useForm({
        description: '',
    })


    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo)
        onResetForm();

    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Agregar Tarea"
                    className="form-control"
                    name='description'
                    value={description}
                    onChange={onInputChange}
                >
                </input>
                <button
                    type='submit' 
                    className="btn btn-outline-primary mt-1">
                    Agregar
                </button>
            </form>
        </>
    )
}
