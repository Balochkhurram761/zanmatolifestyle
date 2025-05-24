import React from 'react'
import Navbar from './fronted/components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './fronted/pages/home/Home'
import Glasses from './fronted/pages/glasses/Glasses'
const App = () => {
  return (
    <>
    <Navbar/>
   <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/glasses' element={<Glasses />} />
</Routes>
   
   </>
  )
}

export default App
