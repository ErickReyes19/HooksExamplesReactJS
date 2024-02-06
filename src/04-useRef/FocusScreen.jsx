import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClic = () => {
        console.log(inputRef.ge)
        inputRef.current.select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr></hr>
            <input
                ref={inputRef}
                className='form-control'
                type='text'
                placeholder='Ingrese su nombre'>
            </input>
            <button className='btn btn-primary mt-1' onClick={onClic}>
                set  Focus
            </button>
        </>
    )
}
