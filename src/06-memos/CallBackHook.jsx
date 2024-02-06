import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementar = useCallback(
        (value = 1) => {
            setCounter((c) => c + value)
        },
        [],
    )


    // const incrementar = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>
                Use CallBack Hook: {counter}
            </h1>
            <hr></hr>
            <ShowIncrement increment={incrementar(4)}></ShowIncrement>
        </>
    )
}
