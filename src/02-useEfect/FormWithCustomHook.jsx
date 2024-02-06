import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })




    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [third])



    return (
        <>
            <h1>Formulario con Custom Hook</h1>
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

            <input
                type="password"
                placeholder="Contraseña"
                className="form-control mt-2"
                name="password"
                value={password}
                onChange={onInputChange}>
            </input>

            <button className="mt-2 btn btn-primary" onClick={onResetForm}>reset</button>

        </>
    )
}
