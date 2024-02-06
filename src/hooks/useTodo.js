import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodo = () => {

    const initialState = [
        
    ]


    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos) || [])


    }, [todos])

    const handelNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handelDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handelToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        handelDeleteTodo,
        handelNewTodo,
        handelToggleTodo
    }
}
