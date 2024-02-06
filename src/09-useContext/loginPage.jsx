import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginApp = () => {

  const {user, setUser} = useContext( UserContext);
  console.log(user);


  return (
    <>
    <h1> Login Page</h1>
    <hr></hr>
    <pre>
      {JSON.stringify(user, null , 3)}
    </pre>

    <button className='btn btn-primary' onClick={()=> setUser({id: 123, nombre: 'Erick Reyes', correo: 'erickjosepineda33@gmail.com'})}>
      Establecer Usuario
    </button>
    </>
  )
}
