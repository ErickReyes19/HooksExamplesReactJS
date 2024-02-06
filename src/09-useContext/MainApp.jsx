import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { HomePage } from './HomePage';
import { LoginApp } from './loginPage';
import { AboutApp } from './AboutPage';
import { NavBar } from './NavBar';
import { UserProvider } from './context/UserProvider';


export const MainApp = () => {
  return (
    <UserProvider>

      <NavBar></NavBar>


      <hr></hr>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/login' element={<LoginApp></LoginApp>} />
        <Route path='/about' element={<AboutApp></AboutApp>} />


        {/* Validar si no existe la ruta y me mande a about */}
        <Route path='/*' element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  )
}
