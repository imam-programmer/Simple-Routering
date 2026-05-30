import React from 'react'
import Nav from './component/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact"
import Service from "./pages/Service"

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </div>
  )
}

export default App