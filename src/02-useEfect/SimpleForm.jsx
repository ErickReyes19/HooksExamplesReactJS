import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: "Erick",
        email: "erick@gmail.com"
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log("FormState Cambió")
    }, [formState]);

    useEffect(() => {
        // console.log("Email Cambió")
    }, [email]);

    useEffect(() => {
        // console.log("UseEfect Called")
    }, []);



    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [third])



    return (
        <>
            <h1>Formulario</h1>
            <hr />

            <input
                type="text"
                placeholder="Username"
                className="form-control"
                name="username"
                value={username}
                onChange={onInputChange}>
            </input>

            <input
                type="email"
                placeholder="erick@gmail.com"
                className="form-control mt-2"
                name="email"
                value={email}
                onChange={onInputChange}>
            </input>

            {
                (username === "erick") && <Message />
            }
            
        </>
    )
}
