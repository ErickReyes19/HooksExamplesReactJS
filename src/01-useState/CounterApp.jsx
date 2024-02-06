import { useState } from "react"



export const CounterApp = () => {

    const [counter, setCounter] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30
        }
    )
    const {counter1,counter2,counter3} = counter;

    const aumentar = () => {
        setCounter({ ...counter, counter1: counter1 + 1})
    }


    // const reset = () => {
    //     setCounter(0)
    // }
    // const decrementar = () => {
    //     setCounter(c - 1)
    // }

    return (
        <>
            <h1>Counter: {counter.counter1}</h1>
            <h1>Counter: {counter.counter2}</h1>
            <h1>Counter: {counter.counter3}</h1>
            <hr></hr>
            <button className="btn" onClick={aumentar}>+1</button>
            {/* <button className="btn" onClick={reset}>Reset</button> */}
            {/* <button className="btn" onClick={decrementar}>-1</button> */}
        </>
    )
}
