import React from 'react'
import Navbar from './fronted/components/navbar/Navbar'
import MobileNavbar from './fronted/components/mobileNavbar/MobileNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './fronted/pages/home/Home'
const App = () => {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
   </Routes>
   
   </>
  )
}

export default App
