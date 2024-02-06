import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();




    // const user = {
    //     id: 123,
    //     nombre: 'Erick Reyes',
    //     correo: 'erickjosepineda33@gmail.com',
    // }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

