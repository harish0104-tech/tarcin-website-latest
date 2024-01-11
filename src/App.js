import React from 'react'
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CourseContent from './Pages/CourseContent';
import About from './Pages/About';
import Contact from './Pages/Contact';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar/>} >
        <Route index element={<Homepage/>} />
        <Route path='courses' element={<CourseContent/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact-us' element={<Contact/>} />
        </Route>
    </Routes>
    
    
    </BrowserRouter>
  )
}
