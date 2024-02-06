import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {


    const { counter, increment, decrement, reset } = useCounter(15)



    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr></hr>

            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-primary' onClick={reset}>reset</button>
            <button className='btn btn-primary' onClick={decrement}>-1</button>
        </>
    )
}